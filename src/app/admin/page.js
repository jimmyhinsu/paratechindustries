"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { blogImageMap } from "@/data/blogs";
import Image from "next/image";
import logo from "@/assests/images/whitelogo.png";
import styles from "./admin.module.scss";
import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiSearch,
  FiGlobe,
  FiX,
  FiFileText,
  FiList,
  FiCheckCircle,
  FiAlertCircle,
  FiGrid,
  FiUser,
  FiLogOut,
  FiMenu,
  FiEye,
  FiEyeOff
} from "react-icons/fi";

const INITIAL_FORM_STATE = {
  title: "",
  slug: "",
  category: "",
  tags: "",
  date: "",
  excerpt: "",
  image: "lasermarkingmachine.jpg",
  read_time: "5 min read",
  author: "",
  meta_title: "",
  meta_description: "",
  content: []
};

const DEFAULT_CATEGORIES = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Welding" },
  { id: 3, name: "Jewellery" },
  { id: 4, name: "Industrial" },
  { id: 5, name: "Guides" }
];

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPage, setBlogPage] = useState(1);
  const blogPageSize = 10;

  // Navigation & Toggle states
  const [currentTab, setCurrentTab] = useState("dashboard"); // dashboard, categories, blogs
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Auth state
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Form modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Category Form states
  const [categoryName, setCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);

  // Notification states
  const [notification, setNotification] = useState(null); // { type: 'success'|'error', message: '' }

  // Load blogs from database
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;
      const sorted = (data || []).sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        const timeA = isNaN(dateA.getTime()) ? 0 : dateA.getTime();
        const timeB = isNaN(dateB.getTime()) ? 0 : dateB.getTime();
        if (timeB !== timeA) {
          return timeB - timeA;
        }
        return b.id - a.id;
      });
      setBlogs(sorted);
    } catch (err) {
      console.warn("Failed to load blogs from Supabase:", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  // Load categories from database
  const fetchCategories = async () => {
    setCategoriesLoading(true);
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name", { ascending: true });

      if (error) throw error;
      if (data && data.length > 0) {
        setCategories(data);
        // Set default category in form if empty
        if (!formData.category) {
          setFormData(prev => ({ ...prev, category: data[0].name }));
        }
      } else {
        setCategories(DEFAULT_CATEGORIES);
        if (!formData.category) {
          setFormData(prev => ({ ...prev, category: DEFAULT_CATEGORIES[0].name }));
        }
      }
    } catch (err) {
      console.warn("Failed to load categories from Supabase. Falling back to default list:", err);
      setCategories(DEFAULT_CATEGORIES);
      if (!formData.category) {
        setFormData(prev => ({ ...prev, category: DEFAULT_CATEGORIES[0].name }));
      }
    } finally {
      setCategoriesLoading(false);
    }
  };

  // Welcome Users state
  const [welcomeUsers, setWelcomeUsers] = useState([]);
  const [welcomeUsersLoading, setWelcomeUsersLoading] = useState(false);
  const [welcomeSearch, setWelcomeSearch] = useState("");
  const [welcomePage, setWelcomePage] = useState(1);
  const welcomePageSize = 10;
  const [deleteConfirmWelcomeUser, setDeleteConfirmWelcomeUser] = useState(null);

  // Load welcome users from Supabase database
  const fetchWelcomeUsers = async () => {
    setWelcomeUsersLoading(true);
    try {
      const { data, error } = await supabase
        .from("welcome_users")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setWelcomeUsers(data || []);
    } catch (err) {
      console.warn("Welcome users table issue or not created yet:", err);
      setWelcomeUsers([]);
    } finally {
      setWelcomeUsersLoading(false);
    }
  };

  // Delete Welcome User
  const handleDeleteWelcomeUser = async (id, name) => {
    try {
      const { error } = await supabase
        .from("welcome_users")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setWelcomeUsers(prev => prev.filter(item => item.id !== id));
      setNotification({ type: "success", message: `Deleted submission for "${name || "User"}"` });
      setTimeout(() => setNotification(null), 3000);
    } catch (err) {
      console.error("Error deleting welcome user:", err);
      // If client-only array fallback
      setWelcomeUsers(prev => prev.filter(item => item.id !== id));
      setNotification({ type: "success", message: `Removed "${name || "User"}" from list` });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setCheckingSession(false);
      if (session) {
        fetchBlogs();
        fetchCategories();
        fetchWelcomeUsers();
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchBlogs();
        fetchCategories();
        fetchWelcomeUsers();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Display brief notifications
  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  // Helper to generate slug from title
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setFormData(prev => ({
      ...prev,
      title,
      slug: isEditing ? prev.slug : slug
    }));
  };

  // Manage Content Blocks
  const addContentBlock = (type) => {
    const newBlock = {
      type,
      text: type !== "list" ? "" : undefined,
      items: type === "list" ? [""] : undefined
    };
    setFormData(prev => ({
      ...prev,
      content: [...prev.content, newBlock]
    }));
  };

  const removeContentBlock = (index) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index)
    }));
  };

  const handleBlockTextChange = (index, value) => {
    setFormData(prev => {
      const updatedContent = [...prev.content];
      updatedContent[index] = { ...updatedContent[index], text: value };
      return { ...prev, content: updatedContent };
    });
  };

  const handleListItemChange = (blockIndex, itemIndex, value) => {
    setFormData(prev => {
      const updatedContent = [...prev.content];
      const updatedItems = [...updatedContent[blockIndex].items];
      updatedItems[itemIndex] = value;
      updatedContent[blockIndex] = { ...updatedContent[blockIndex], items: updatedItems };
      return { ...prev, content: updatedContent };
    });
  };

  const addListItem = (blockIndex) => {
    setFormData(prev => {
      const updatedContent = [...prev.content];
      const updatedItems = [...updatedContent[blockIndex].items, ""];
      updatedContent[blockIndex] = { ...updatedContent[blockIndex], items: updatedItems };
      return { ...prev, content: updatedContent };
    });
  };

  const removeListItem = (blockIndex, itemIndex) => {
    setFormData(prev => {
      const updatedContent = [...prev.content];
      const updatedItems = updatedContent[blockIndex].items.filter((_, i) => i !== itemIndex);
      updatedContent[blockIndex] = { ...updatedContent[blockIndex], items: updatedItems };
      return { ...prev, content: updatedContent };
    });
  };

  // Image Upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filePath);

      if (data?.publicUrl) {
        setFormData(prev => ({
          ...prev,
          image: data.publicUrl
        }));
        showNotification("success", "Image uploaded successfully!");
      }
    } catch (err) {
      console.error("Upload error:", err);
      showNotification("error", `Image upload failed: ${err.message || err}`);
    } finally {
      setUploadingImage(false);
    }
  };

  // CRUD Operations for Blogs
  const handleOpenAddModal = () => {
    setIsEditing(false);
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
    setFormData({
      ...INITIAL_FORM_STATE,
      category: "",
      date: formattedDate
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (blog) => {
    setIsEditing(true);
    const tagsString = Array.isArray(blog.tags)
      ? blog.tags.join(", ")
      : blog.tags || "";
    setFormData({
      ...blog,
      tags: tagsString,
      author: blog.author === "Technical Specialist" ? "" : (blog.author || "")
    });
    setIsModalOpen(true);
  };

  const [deleteConfirmBlog, setDeleteConfirmBlog] = useState(null);

  const handleDeleteBlog = async (id, title) => {
    try {
      const { error } = await supabase
        .from("blogs")
        .delete()
        .eq("id", id);

      if (error) throw error;

      showNotification("success", "Blog post deleted successfully!");
      fetchBlogs();
    } catch (err) {
      console.error("Delete error:", err);
      setBlogs(prev => prev.filter(b => b.id !== id));
      showNotification("error", `Could not delete from database: ${err.message || err}`);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const { id, created_at, ...updateData } = formData;
        let { error } = await supabase
          .from("blogs")
          .update(updateData)
          .eq("id", id);

        if (error && (error.message?.includes("tags") || error.code === "PGRST204")) {
          const { tags, ...dataWithoutTags } = updateData;
          const retry = await supabase
            .from("blogs")
            .update(dataWithoutTags)
            .eq("id", id);

          if (!retry.error) {
            showNotification("success", "Blog updated! Please add the 'tags' column in your Supabase database table.");
            setIsModalOpen(false);
            fetchBlogs();
            return;
          }
          error = retry.error;
        }

        if (error) throw error;
        showNotification("success", "Blog post updated successfully!");
      } else {
        let { error } = await supabase
          .from("blogs")
          .insert([formData]);

        if (error && (error.message?.includes("tags") || error.code === "PGRST204")) {
          const { tags, ...dataWithoutTags } = formData;
          const retry = await supabase
            .from("blogs")
            .insert([dataWithoutTags]);

          if (!retry.error) {
            showNotification("success", "Blog created! Please add the 'tags' column in your Supabase database table.");
            setIsModalOpen(false);
            fetchBlogs();
            return;
          }
          error = retry.error;
        }

        if (error) throw error;
        showNotification("success", "New blog post created successfully!");
      }
      setIsModalOpen(false);
      fetchBlogs();
    } catch (err) {
      console.error("Save error:", err);
      showNotification("error", `Failed to save changes: ${err.message || err}`);
    }
  };

  // CRUD Operations for Categories
  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    try {
      if (editingCategory) {
        // Edit Category
        const { error } = await supabase
          .from("categories")
          .update({ name: categoryName })
          .eq("id", editingCategory.id);

        if (error) throw error;
        showNotification("success", "Category updated successfully!");
      } else {
        // Add Category
        const { error } = await supabase
          .from("categories")
          .insert([{ name: categoryName }]);

        if (error) throw error;
        showNotification("success", "New category added successfully!");
      }
      setCategoryName("");
      setEditingCategory(null);
      fetchCategories();
    } catch (err) {
      console.error("Category save error:", err);
      showNotification("error", `Failed to save category: ${err.message || err}`);
    }
  };

  const handleDeleteCategory = async (id, name) => {
    if (!confirm(`Are you sure you want to delete category "${name}"?`)) return;

    try {
      const { error } = await supabase
        .from("categories")
        .delete()
        .eq("id", id);

      if (error) throw error;
      showNotification("success", "Category deleted successfully!");
      fetchCategories();
    } catch (err) {
      console.error("Category delete error:", err);
      showNotification("error", `Failed to delete category: ${err.message || err}`);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword
      });
      if (error) throw error;
      showNotification("success", "Logged in successfully!");
    } catch (err) {
      console.error("Login error:", err);
      setLoginError(err.message || "Invalid email or password");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignOut = async () => {
    if (!confirm("Are you sure you want to sign out?")) return;
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setBlogs([]);
      setCategories([]);
      showNotification("success", "Signed out successfully!");
    } catch (err) {
      console.error("Logout error:", err);
      showNotification("error", "Failed to sign out");
    }
  };

  // Filter Blogs
  const filteredBlogs = blogs.filter(blog =>
    (blog.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (blog.category?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (blog.excerpt?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );

  if (checkingSession) {
    return (
      <div className={styles.loginWrapper}>
        <p style={{ color: "#666", fontSize: "15px", fontWeight: "500" }}>Checking security session...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginCard}>
          <header className={styles.loginHeader}>
            <div className={styles.adminLogoWrapper}>
              <Image src={logo} alt="Paratech Logo" priority width={160} height={45} style={{ objectFit: "contain" }} />
            </div>
            <h1>Paratech Admin</h1>
          </header>

          <form onSubmit={handleLogin} className={styles.loginBody}>
            {loginError && (
              <div className={styles.loginError}>
                <FiAlertCircle />
                <span>{loginError}</span>
              </div>
            )}

            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input
                type="email"
                required
                placeholder="admin@paratechindustries.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Password</label>
              <div className={styles.passwordInputWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button
                  type="button"
                  className={styles.passwordToggleBtn}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button type="submit" className={styles.loginBtn} disabled={loginLoading}>
              {loginLoading ? "Verifying..." : "Sign In to Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminLayout}>
      {/* Toast Notification */}
      {notification && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 3000,
            padding: "16px 24px",
            borderRadius: "8px",
            background: notification.type === "success" ? "#2f855a" : "#c53030",
            color: "#ffffff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "slideIn 0.3s ease"
          }}
        >
          {notification.type === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
          <span>{notification.message}</span>
        </div>
      )}



      {/* Mobile Drawer Overlay */}
      {mobileSidebarOpen && (
        <div
          className={styles.sidebarOverlay}
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar navigation */}
      <aside className={`${styles.sidebar} ${mobileSidebarOpen ? styles.sidebarOpen : ""}`}>
        {/* Close Button for Mobile Drawer */}
        <button
          className={styles.closeSidebarBtn}
          onClick={() => setMobileSidebarOpen(false)}
        >
          <FiX />
        </button>

        <div className={styles.logoArea}>
          <div className={styles.sidebarLogoWrapper}>
            <Image src={logo} alt="Paratech Logo" width={160} height={42} priority style={{ objectFit: "contain" }} />
          </div>

        </div>

        <nav className={styles.navMenu}>
          <button
            className={`${styles.navLink} ${currentTab === "dashboard" ? styles.active : ""}`}
            onClick={() => {
              setCurrentTab("dashboard");
              setMobileSidebarOpen(false);
            }}
          >
            <FiGrid /> Dashboard
          </button>
          <button
            className={`${styles.navLink} ${currentTab === "welcome" ? styles.active : ""}`}
            onClick={() => {
              setCurrentTab("welcome");
              setMobileSidebarOpen(false);
            }}
          >
            <FiUser /> Welcome User
          </button>
          <button
            className={`${styles.navLink} ${currentTab === "categories" ? styles.active : ""}`}
            onClick={() => {
              setCurrentTab("categories");
              setMobileSidebarOpen(false);
            }}
          >
            <FiList /> Blog Category
          </button>
          <button
            className={`${styles.navLink} ${currentTab === "blogs" ? styles.active : ""}`}
            onClick={() => {
              setCurrentTab("blogs");
              setMobileSidebarOpen(false);
            }}
          >
            <FiFileText /> Blog
          </button>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/blog" className={styles.navLink} style={{ marginBottom: "8px" }}>
            <FiGlobe /> View Live Website
          </Link>
          <button
            type="button"
            className={styles.navLink}
            onClick={handleSignOut}
            style={{ width: "100%", border: "none", background: "transparent", cursor: "pointer" }}
          >
            <FiLogOut /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main panel body */}
      <main className={styles.mainContent}>
        <header className={styles.adminHeader}>
          <div className={styles.headerLeft}>
            <button
              className={styles.hamburgerBtn}
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              <FiMenu />
            </button>
            <span className={styles.headerPath}>
              {currentTab === "dashboard" && "Dashboard"}
              {currentTab === "categories" && "Blog Categories"}
              {currentTab === "blogs" && "Blogs List"}
              {currentTab === "welcome" && "Welcome Users"}
            </span>
          </div>
          <button
            type="button"
            className={styles.signOutHeaderBtn}
            onClick={handleSignOut}
          >
            <FiLogOut /> Sign Out
          </button>
        </header>

        {/* DASHBOARD TAB */}
        {currentTab === "dashboard" && (
          <>
            <div className={styles.headerRow}>
              <div className={styles.titleArea}>
                <h1>Admin Dashboard</h1>
                <p>Welcome back! Here is a summary of your blog publications.</p>
              </div>
            </div>

            {/* Statistics Row */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <FiFileText />
                </div>
                <div className={styles.statInfo}>
                  <h3>{blogs.length}</h3>
                  <p>Total Articles</p>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <FiList />
                </div>
                <div className={styles.statInfo}>
                  <h3>{categories.length}</h3>
                  <p>Blog Categories</p>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <FiUser />
                </div>
                <div className={styles.statInfo}>
                  <h3>{Array.from(new Set(blogs.map(b => b.author))).length}</h3>
                  <p>Active Authors</p>
                </div>
              </div>
            </div>

            <div style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #f0f0f0" }}>
              <h2 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "15px", color: "#1f1f1f" }}>
                Recent Articles
              </h2>
              {blogs.length === 0 ? (
                <p style={{ color: "#777", fontSize: "14px" }}>No articles found. Click on the "Blog" tab to add one.</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {blogs.slice(-3).reverse().map((b) => (
                    <div key={b.id || b.slug} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: "1px solid #f0f0f0" }}>
                      <div>
                        <p style={{ fontWeight: "600", color: "#1f1f1f", fontSize: "14px" }}>{b.title}</p>
                        <p style={{ color: "#777", fontSize: "12px", marginTop: "2px" }}>By {b.author} in <span className={styles.categoryBadge} style={{ fontSize: "10px", padding: "2px 6px" }}>{b.category}</span></p>
                      </div>
                      <p style={{ color: "#999", fontSize: "12px" }}>{b.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* BLOGS TAB */}
        {currentTab === "blogs" && (
          <>
            <div className={styles.headerRow}>
              <div className={styles.titleArea}>
                <h1>Blogs List</h1>
                <p>Manage, write, and configure articles for your Next.js application.</p>
              </div>
              <button className={styles.primaryBtn} onClick={handleOpenAddModal}>
                <FiPlus /> Add New Blog
              </button>
            </div>

            <div className={styles.tableWrapper}>
              <div className={styles.tableHeader}>
                <div className={styles.searchBox}>
                  <FiSearch />
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setBlogPage(1);
                    }}
                  />
                </div>
                <div style={{ fontSize: "14px", color: "#666", fontWeight: "600" }}>
                  Total: {filteredBlogs.length} Articles
                </div>
              </div>

              {loading ? (
                <div style={{ padding: "50px", textAlign: "center", color: "#666" }}>
                  <p>Loading database items...</p>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div style={{ padding: "50px", textAlign: "center", color: "#666" }}>
                  <p>No blog articles found. Create one using the "+ Add New Blog" button.</p>
                </div>
              ) : (() => {
                const totalBlogPages = Math.ceil(filteredBlogs.length / blogPageSize) || 1;
                const currentBlogPage = Math.min(blogPage, totalBlogPages);
                const blogStartIndex = (currentBlogPage - 1) * blogPageSize;
                const paginatedBlogs = filteredBlogs.slice(blogStartIndex, blogStartIndex + blogPageSize);

                return (
                  <>
                    <div style={{ overflowX: "auto" }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Publish Date</th>
                            <th style={{ width: "100px", textAlign: "center" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedBlogs.map((blog) => (
                            <tr key={blog.id || blog.slug}>
                              <td className={styles.blogTitleCol}>{blog.title}</td>
                              <td>
                                <span className={styles.categoryBadge}>{blog.category}</span>
                              </td>
                              <td>{blog.author}</td>
                              <td>{blog.date}</td>
                              <td>
                                <div className={styles.actionCell}>
                                  <button
                                    className={`${styles.iconBtn} ${styles.edit}`}
                                    title="Edit Post"
                                    onClick={() => handleOpenEditModal(blog)}
                                  >
                                    <FiEdit />
                                  </button>
                                  <button
                                    className={`${styles.iconBtn} ${styles.delete}`}
                                    title="Delete Post"
                                    onClick={() => setDeleteConfirmBlog(blog)}
                                  >
                                    <FiTrash2 />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Blog List Pagination Controls */}
                    {totalBlogPages > 1 && (
                      <div style={{
                        display: "flex",
                        justify: "space-between",
                        alignItems: "center",
                        padding: "16px 24px",
                        borderTop: "1px solid #f0f0f0",
                        background: "#fafafa"
                      }}>
                        <div style={{ fontSize: "13px", color: "#666" }}>
                          Showing {blogStartIndex + 1} to {Math.min(blogStartIndex + blogPageSize, filteredBlogs.length)} of {filteredBlogs.length} entries
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <button
                            type="button"
                            disabled={currentBlogPage <= 1}
                            onClick={() => setBlogPage(prev => Math.max(prev - 1, 1))}
                            style={{
                              padding: "6px 12px",
                              border: "1px solid #dcdcdc",
                              borderRadius: "6px",
                              background: currentBlogPage <= 1 ? "#f5f5f5" : "#ffffff",
                              color: currentBlogPage <= 1 ? "#aaa" : "#333",
                              cursor: currentBlogPage <= 1 ? "not-allowed" : "pointer",
                              fontSize: "13px",
                              fontWeight: "500"
                            }}
                          >
                            Previous
                          </button>
                          <span style={{ fontSize: "13px", color: "#444", fontWeight: "600", padding: "0 8px" }}>
                            Page {currentBlogPage} of {totalBlogPages}
                          </span>
                          <button
                            type="button"
                            disabled={currentBlogPage >= totalBlogPages}
                            onClick={() => setBlogPage(prev => Math.min(prev + 1, totalBlogPages))}
                            style={{
                              padding: "6px 12px",
                              border: "1px solid #dcdcdc",
                              borderRadius: "6px",
                              background: currentBlogPage >= totalBlogPages ? "#f5f5f5" : "#ffffff",
                              color: currentBlogPage >= totalBlogPages ? "#aaa" : "#333",
                              cursor: currentBlogPage >= totalBlogPages ? "not-allowed" : "pointer",
                              fontSize: "13px",
                              fontWeight: "500"
                            }}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </>
        )}

        {/* CATEGORIES TAB */}
        {currentTab === "categories" && (
          <div className={styles.categoryLayout}>
            <div className={styles.headerRow}>
              <div className={styles.titleArea}>
                <h1>Blog Categories</h1>
                <p>Manage list categories used to tag blog articles.</p>
              </div>
            </div>

            <div className={styles.categoryGrid}>
              {/* Category Add/Edit Form */}
              <div className={styles.categoryFormCard}>
                <h3 className={styles.categoryFormTitle}>
                  {editingCategory ? "Edit Category Name" : "Create New Category"}
                </h3>
                <form onSubmit={handleCategorySubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <div className={styles.formGroup}>
                    <label>Category Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Laser Cutting"
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" className={styles.primaryBtn} style={{ flexGrow: 1 }}>
                      {editingCategory ? "Update" : "Add Category"}
                    </button>
                    {editingCategory && (
                      <button
                        type="button"
                        className={styles.secondaryBtn}
                        onClick={() => {
                          setEditingCategory(null);
                          setCategoryName("");
                        }}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Categories list */}
              <div className={styles.categoryListCard}>
                <div className={styles.categoryListHeader}>
                  <h3>Active Categories ({categories.length})</h3>
                </div>
                {categoriesLoading ? (
                  <p style={{ padding: "30px", textAlign: "center", color: "#888" }}>Loading categories...</p>
                ) : categories.length === 0 ? (
                  <p style={{ padding: "30px", textAlign: "center", color: "#888" }}>No categories configured.</p>
                ) : (
                  <div className={styles.categoryGridItems}>
                    {categories.map((cat) => (
                      <div key={cat.id} className={styles.categoryItem}>
                        <span>{cat.name}</span>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <button
                            type="button"
                            style={{ background: "transparent", border: "none", color: "#333", cursor: "pointer", fontSize: "14px" }}
                            onClick={() => {
                              setEditingCategory(cat);
                              setCategoryName(cat.name);
                            }}
                          >
                            <FiEdit />
                          </button>
                          <button
                            type="button"
                            style={{ background: "transparent", border: "none", color: "#e53e3e", cursor: "pointer", fontSize: "14px" }}
                            onClick={() => handleDeleteCategory(cat.id, cat.name)}
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* WELCOME USERS TAB */}
        {currentTab === "welcome" && (
          <div className={styles.categoryManagement}>
            <div className={styles.headerRow}>
              <div className={styles.titleArea}>
                <h1>Welcome Users Submissions</h1>
                <p>Manage and view inquiries submitted from the website Welcome Popup.</p>
              </div>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={fetchWelcomeUsers}
              >
                Refresh List
              </button>
            </div>

            <div className={styles.tableWrapper} style={{ marginTop: "24px" }}>
              <div className={styles.tableHeader}>
                <div className={styles.searchBox}>
                  <FiSearch />
                  <input
                    type="text"
                    placeholder="Search by name, phone, email..."
                    value={welcomeSearch}
                    onChange={(e) => {
                      setWelcomeSearch(e.target.value);
                      setWelcomePage(1);
                    }}
                  />
                </div>
                <div style={{ fontSize: "14px", color: "#666", fontWeight: "600" }}>
                  Total: {welcomeUsers.length} Submissions
                </div>
              </div>

              {welcomeUsersLoading ? (
                <div style={{ padding: "40px", textAlign: "center", color: "#888" }}>
                  Loading welcome users submissions...
                </div>
              ) : welcomeUsers.length === 0 ? (
                <div style={{ padding: "40px", textAlign: "center", color: "#666" }}>
                  <FiUser style={{ fontSize: "40px", marginBottom: "12px", color: "#aaa" }} />
                  <p style={{ fontSize: "16px", fontWeight: "600" }}>No Welcome Submissions Yet</p>
                  <p style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}>
                    Submissions from the front-end Welcome Popup will appear here and be emailed to info.paratechindustries@gmail.com.
                  </p>
                </div>
              ) : (() => {
                const filtered = welcomeUsers.filter((u) =>
                  (u.full_name || "").toLowerCase().includes(welcomeSearch.toLowerCase()) ||
                  (u.mobile_number || "").includes(welcomeSearch) ||
                  (u.email || "").toLowerCase().includes(welcomeSearch.toLowerCase())
                );
                const totalPages = Math.ceil(filtered.length / welcomePageSize) || 1;
                const currentPage = Math.min(welcomePage, totalPages);
                const startIndex = (currentPage - 1) * welcomePageSize;
                const paginatedUsers = filtered.slice(startIndex, startIndex + welcomePageSize);

                return (
                  <>
                    <div style={{ overflowX: "auto" }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th style={{ width: "60px" }}>#</th>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                            <th>Submitted At</th>
                            <th style={{ width: "100px", textAlign: "center" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedUsers.length === 0 ? (
                            <tr>
                              <td colSpan={6} style={{ textAlign: "center", color: "#888", padding: "30px" }}>
                                No matching records found.
                              </td>
                            </tr>
                          ) : (
                            paginatedUsers.map((user, idx) => (
                              <tr key={user.id || idx}>
                                <td>{startIndex + idx + 1}</td>
                                <td style={{ fontWeight: "600", color: "#111" }}>{user.full_name || "N/A"}</td>
                                <td>
                                  <a href={`tel:${user.mobile_number}`} style={{ color: "#2563eb", textDecoration: "none", fontWeight: "500" }}>
                                    {user.mobile_number}
                                  </a>
                                </td>
                                <td>
                                  {user.email ? (
                                    <a href={`mailto:${user.email}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                                      {user.email}
                                    </a>
                                  ) : (
                                    <span style={{ color: "#999", fontStyle: "italic" }}>Not provided</span>
                                  )}
                                </td>
                                <td style={{ color: "#666", fontSize: "13px" }}>
                                  {user.created_at ? new Date(user.created_at).toLocaleString() : "N/A"}
                                </td>
                                <td style={{ textAlign: "center" }}>
                                  <button
                                    type="button"
                                    title="Delete Submission"
                                    onClick={() => setDeleteConfirmWelcomeUser(user)}
                                    style={{
                                      background: "transparent",
                                      border: "none",
                                      color: "#e53e3e",
                                      cursor: "pointer",
                                      fontSize: "16px",
                                      padding: "6px",
                                      borderRadius: "4px",
                                      transition: "background 0.2s"
                                    }}
                                  >
                                    <FiTrash2 />
                                  </button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div style={{
                        display: "flex",
                        justify: "space-between",
                        alignItems: "center",
                        padding: "16px 24px",
                        borderTop: "1px solid #f0f0f0",
                        background: "#fafafa"
                      }}>
                        <div style={{ fontSize: "13px", color: "#666" }}>
                          Showing {startIndex + 1} to {Math.min(startIndex + welcomePageSize, filtered.length)} of {filtered.length} entries
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <button
                            type="button"
                            disabled={currentPage <= 1}
                            onClick={() => setWelcomePage(prev => Math.max(prev - 1, 1))}
                            style={{
                              padding: "6px 12px",
                              border: "1px solid #dcdcdc",
                              borderRadius: "6px",
                              background: currentPage <= 1 ? "#f5f5f5" : "#ffffff",
                              color: currentPage <= 1 ? "#aaa" : "#333",
                              cursor: currentPage <= 1 ? "not-allowed" : "pointer",
                              fontSize: "13px",
                              fontWeight: "500"
                            }}
                          >
                            Previous
                          </button>
                          <span style={{ fontSize: "13px", color: "#444", fontWeight: "600", padding: "0 8px" }}>
                            Page {currentPage} of {totalPages}
                          </span>
                          <button
                            type="button"
                            disabled={currentPage >= totalPages}
                            onClick={() => setWelcomePage(prev => Math.min(prev + 1, totalPages))}
                            style={{
                              padding: "6px 12px",
                              border: "1px solid #dcdcdc",
                              borderRadius: "6px",
                              background: currentPage >= totalPages ? "#f5f5f5" : "#ffffff",
                              color: currentPage >= totalPages ? "#aaa" : "#333",
                              cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
                              fontSize: "13px",
                              fontWeight: "500"
                            }}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        )}

        <footer className={styles.adminFooter}>
          <p>© 2026 Paratech Industrial Company. All rights reserved.</p>
        </footer>
      </main>

      {/* Editor Modal Overlay */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <header className={styles.modalHeader}>
              <h2>{isEditing ? "Edit Blog Article" : "Create New Blog Article"}</h2>
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
                <FiX />
              </button>
            </header>

            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", height: "calc(100% - 60px)", overflow: "hidden" }}>
              <div className={styles.modalBody}>
                <div className={styles.formGrid}>
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Article Title</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={handleTitleChange}
                      placeholder="e.g. The Future of Laser Engraving"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>URL Slug</label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="future-of-laser-engraving"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Author</label>
                    <input
                      type="text"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Author Name"
                    />
                  </div>



                  <div className={styles.formGroup}>
                    <label>Publish Date</label>
                    <input
                      type="text"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      placeholder="June 18, 2026"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Blog Tags</label>
                    <input
                      type="text"
                      value={formData.tags || ""}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="e.g. Laser Marking, Fiber Laser, Welding, Automation (comma separated)"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Blog Image Upload</label>
                    <div className={styles.uploadPreviewArea}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploadingImage}
                        style={{ padding: "8px 0" }}
                      />
                      {uploadingImage && <p style={{ fontSize: "12px", color: "#666" }}>Uploading...</p>}
                      {formData.image && (
                        <div className={styles.previewThumbnail}>
                          <img
                            src={blogImageMap[formData.image] ? blogImageMap[formData.image].src : formData.image}
                            alt="Uploaded preview"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.introParagraphsLabel}>
                      Intro Paragraphs
                    </label>
                    <p className={styles.introParagraphsHint}>
                      Plain text or HTML allowed — use tags like{" "}
                      <code>&lt;p&gt;</code>,{" "}
                      <code>&lt;a href="..."&gt;</code>,{" "}
                      <code>&lt;ul&gt;</code>,{" "}
                      <code>&lt;strong&gt;</code>. Preview shows how it will look on the website.
                    </p>
                    <div className={styles.htmlEditorWrapper}>
                      <textarea
                        required
                        rows={4}
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        placeholder="A short summary description shown in the blog cards list..."
                        className={styles.htmlTextarea}
                      />
                    </div>
                    {formData.excerpt && (
                      <div className={styles.previewSection}>
                        <span className={styles.previewLabel}>WEBSITE PREVIEW</span>
                        <div
                          className={styles.previewBox}
                          dangerouslySetInnerHTML={{ __html: formData.excerpt }}
                        />
                      </div>
                    )}
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Meta title</label>
                    <input
                      type="text"
                      value={formData.meta_title || ""}
                      onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                      placeholder="e.g. Laser Marking & Cutting Machine Manufacturer in India"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Meta description</label>
                    <textarea
                      rows={3}
                      value={formData.meta_description || ""}
                      onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                      placeholder="Looking for reliable laser machines? Paratech Industries offers..."
                    />
                  </div>
                </div>

              </div>

              <footer className={styles.modalFooter}>
                <button type="button" className={styles.secondaryBtn} onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryBtn}>
                  Save Post
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {/* Custom Delete Confirmation Modal */}
      {deleteConfirmBlog && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} style={{ maxWidth: "450px" }}>
            <header className={styles.modalHeader}>
              <h2>Confirm Deletion</h2>
              <button className={styles.closeBtn} onClick={() => setDeleteConfirmBlog(null)}>
                <FiX />
              </button>
            </header>
            <div className={styles.modalBody} style={{ padding: "30px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ fontSize: "50px", color: "#e53e3e", display: "flex", justifyContent: "center" }}>
                <FiTrash2 />
              </div>
              <div>
                <p style={{ fontSize: "16px", fontWeight: "700", color: "#1f1f1f", marginBottom: "8px" }}>
                  Delete Blog Post?
                </p>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
                  Are you sure you want to delete <strong>"{deleteConfirmBlog.title}"</strong>? This action cannot be undone.
                </p>
              </div>
            </div>
            <footer className={styles.modalFooter}>
              <button type="button" className={styles.secondaryBtn} onClick={() => setDeleteConfirmBlog(null)}>
                Cancel
              </button>
              <button
                type="button"
                className={styles.primaryBtn}
                style={{ background: "#e53e3e", color: "#ffffff", borderColor: "transparent" }}
                onClick={() => {
                  handleDeleteBlog(deleteConfirmBlog.id, deleteConfirmBlog.title);
                  setDeleteConfirmBlog(null);
                }}
              >
                Delete Post
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* Custom Delete Confirmation Modal for Welcome Users */}
      {deleteConfirmWelcomeUser && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} style={{ maxWidth: "450px" }}>
            <header className={styles.modalHeader}>
              <h2>Confirm Deletion</h2>
              <button className={styles.closeBtn} onClick={() => setDeleteConfirmWelcomeUser(null)}>
                <FiX />
              </button>
            </header>
            <div className={styles.modalBody} style={{ padding: "30px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ fontSize: "50px", color: "#e53e3e", display: "flex", justifyContent: "center" }}>
                <FiTrash2 />
              </div>
              <div>
                <p style={{ fontSize: "16px", fontWeight: "700", color: "#1f1f1f", marginBottom: "8px" }}>
                  Delete User Submission?
                </p>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
                  Are you sure you want to delete submission for <strong>"{deleteConfirmWelcomeUser.full_name || "User"}"</strong> ({deleteConfirmWelcomeUser.mobile_number})? This action cannot be undone.
                </p>
              </div>
            </div>
            <footer className={styles.modalFooter}>
              <button type="button" className={styles.secondaryBtn} onClick={() => setDeleteConfirmWelcomeUser(null)}>
                Cancel
              </button>
              <button
                type="button"
                className={styles.primaryBtn}
                style={{ background: "#e53e3e", color: "#ffffff", borderColor: "transparent" }}
                onClick={() => {
                  handleDeleteWelcomeUser(deleteConfirmWelcomeUser.id, deleteConfirmWelcomeUser.full_name);
                  setDeleteConfirmWelcomeUser(null);
                }}
              >
                Delete Record
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
