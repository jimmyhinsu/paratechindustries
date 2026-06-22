"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { blogs as staticBlogs, blogImageMap } from "@/data/blogs";
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
  FiMenu
} from "react-icons/fi";

const INITIAL_FORM_STATE = {
  title: "",
  slug: "",
  category: "",
  date: "",
  excerpt: "",
  image: "lasermarkingmachine.jpg",
  read_time: "5 min read",
  author: "Technical Specialist",
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

  // Navigation & Toggle states
  const [currentTab, setCurrentTab] = useState("dashboard"); // dashboard, categories, blogs
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Auth state
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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
      if (data) setBlogs(data);
    } catch (err) {
      console.warn("Failed to load blogs from Supabase. Falling back to local data:", err);
      const formattedStatic = staticBlogs.map(b => ({
        ...b,
        image: b.image.src ? b.slug + ".jpg" : b.image,
        read_time: b.readTime || b.read_time
      }));
      setBlogs(formattedStatic);
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

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setCheckingSession(false);
      if (session) {
        fetchBlogs();
        fetchCategories();
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchBlogs();
        fetchCategories();
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
      category: categories.length > 0 ? categories[0].name : "Technology",
      date: formattedDate
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (blog) => {
    setIsEditing(true);
    setFormData(blog);
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
        const { error } = await supabase
          .from("blogs")
          .update(updateData)
          .eq("id", id);

        if (error) throw error;
        showNotification("success", "Blog post updated successfully!");
      } else {
        const { error } = await supabase
          .from("blogs")
          .insert([formData]);

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
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
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
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
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
          <h2>Paratech Admin</h2>
          <p>Blogs Management</p>
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
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
              ) : (
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Publish Date</th>
                      <th style={{ width: "100px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogs.map((blog) => (
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
              )}
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
                    <label>Excerpt</label>
                    <textarea
                      required
                      rows={2}
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="A short summary description shown in the blog cards list..."
                    />
                  </div>
                </div>

                {/* Dynamic Block Editor */}
                <div className={styles.blockEditor}>
                  <div className={styles.blockEditorHeader}>
                    <h3>Article Content Blocks</h3>
                    <div className={styles.blockActionBtns}>
                      <button type="button" className={styles.addBlockBtn} onClick={() => addContentBlock("paragraph")}>
                        + Add Paragraph
                      </button>
                      <button type="button" className={styles.addBlockBtn} onClick={() => addContentBlock("heading")}>
                        + Add Heading
                      </button>
                      <button type="button" className={styles.addBlockBtn} onClick={() => addContentBlock("list")}>
                        + Add Bullet List
                      </button>
                    </div>
                  </div>

                  <div className={styles.blocksList}>
                    {formData.content.length === 0 ? (
                      <p className={styles.emptyBlocksText}>
                        No content blocks added yet. Click one of the buttons above to start writing.
                      </p>
                    ) : (
                      formData.content.map((block, bIdx) => (
                        <div key={bIdx} className={styles.blockItem}>
                          <div className={styles.blockItemHeader}>
                            <span className={styles.blockType}>{block.type}</span>
                            <button
                              type="button"
                              className={styles.removeBlockBtn}
                              onClick={() => removeContentBlock(bIdx)}
                            >
                              Delete Block
                            </button>
                          </div>

                          {block.type !== "list" ? (
                            <textarea
                              className={styles.blockInput}
                              rows={block.type === "heading" ? 1 : 3}
                              placeholder={block.type === "heading" ? "Heading text..." : "Paragraph body text..."}
                              value={block.text || ""}
                              onChange={(e) => handleBlockTextChange(bIdx, e.target.value)}
                              required
                            />
                          ) : (
                            <div className={styles.listItemInputs}>
                              {block.items.map((item, itemIdx) => (
                                <div key={itemIdx} className={styles.listItemRow}>
                                  <input
                                    type="text"
                                    className={styles.blockInput}
                                    placeholder="List item bullet text..."
                                    value={item}
                                    onChange={(e) => handleListItemChange(bIdx, itemIdx, e.target.value)}
                                    required
                                  />
                                  <button
                                    type="button"
                                    style={{ background: "transparent", border: "none", color: "#e53e3e", cursor: "pointer" }}
                                    onClick={() => removeListItem(bIdx, itemIdx)}
                                    disabled={block.items.length <= 1}
                                  >
                                    <FiX />
                                  </button>
                                </div>
                              ))}
                              <button
                                type="button"
                                className={styles.addListItemBtn}
                                onClick={() => addListItem(bIdx)}
                              >
                                + Add Bullet Point
                              </button>
                            </div>
                          )}
                        </div>
                      ))
                    )}
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
    </div>
  );
}
