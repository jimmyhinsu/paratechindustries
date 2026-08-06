"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { blogImageMap } from "@/data/blogs";
import Image from "next/image";
import logo from "@/assests/images/whitelogo.png";
import styles from "./admin.module.scss";
import { fetchProductsFromSupabase, imageMap, getProductHref } from "@/data/products";
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
  FiEyeOff,
  FiBox,
  FiLayers,
  FiUpload
} from "react-icons/fi";

const getAdminImagePreviewSrc = (img) => {
  if (!img) return null;
  if (typeof img === "object" && img.src) return img.src;
  if (typeof img === "string") {
    const cleanName = img.trim();
    if (cleanName.startsWith("data:") || cleanName.startsWith("http://") || cleanName.startsWith("https://")) {
      return cleanName;
    }
    if (cleanName.startsWith("/")) return cleanName;
    if (imageMap[cleanName]) {
      const mapped = imageMap[cleanName];
      return typeof mapped === "object" && mapped.src ? mapped.src : mapped;
    }
    return cleanName;
  }
  return null;
};

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

  // Products state
  const INITIAL_PRODUCT_FORM = {
    id: null,
    slug: "",
    name: "",
    tag: "",
    heroTitle: "",
    heroSubtitle: "Paratech Industries",
    cardImage: "",
    productImages: [],
    materialsTitle: "Which Materials You Can Mark !!",
    materialsText: "",
    descriptionsText: "",
    specificationsList: [{ label: "", value: "" }],
    applicationImages: [],
    quoteProductName: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywordsText: ""
  };

  const [productsState, setProductsState] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productSearch, setProductSearch] = useState("");
  const [productPage, setProductPage] = useState(1);
  const productPageSize = 10;
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [productFormData, setProductFormData] = useState(INITIAL_PRODUCT_FORM);
  const [deleteConfirmProduct, setDeleteConfirmProduct] = useState(null);

  const handleProductImageFileUpload = (e, fieldType) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const base64Str = uploadEvent.target.result;
        if (fieldType === "cardImage") {
          setProductFormData(prev => ({ ...prev, cardImage: base64Str }));
        } else if (fieldType === "productImages") {
          setProductFormData(prev => ({ ...prev, productImages: [...prev.productImages, base64Str] }));
        } else if (fieldType === "applicationImages") {
          setProductFormData(prev => ({ ...prev, applicationImages: [...prev.applicationImages, base64Str] }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeProductImage = (indexToRemove, fieldType) => {
    setProductFormData(prev => ({
      ...prev,
      [fieldType]: (prev[fieldType] || []).filter((_, idx) => idx !== indexToRemove)
    }));
  };

  const handleSpecChange = (index, field, value) => {
    setProductFormData(prev => {
      const updated = [...(prev.specificationsList || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, specificationsList: updated };
    });
  };

  const addSpecRow = () => {
    setProductFormData(prev => ({
      ...prev,
      specificationsList: [...(prev.specificationsList || []), { label: "", value: "" }]
    }));
  };

  const removeSpecRow = (indexToRemove) => {
    setProductFormData(prev => ({
      ...prev,
      specificationsList: (prev.specificationsList || []).filter((_, idx) => idx !== indexToRemove)
    }));
  };

  const fetchProductsAdmin = async () => {
    setProductsLoading(true);
    try {
      const data = await fetchProductsFromSupabase(true);
      setProductsState(data || []);
    } catch (err) {
      console.warn("Error loading products from Supabase:", err);
      setProductsState([]);
    } finally {
      setProductsLoading(false);
    }
  };

  const handleOpenProductModal = (prod = null) => {
    if (prod) {
      setIsEditingProduct(true);

      const extractImgStr = (img) => {
        if (!img) return "";
        if (typeof img === "string") return img;
        if (typeof img === "object" && img.src) return img.src;
        return "";
      };

      const cardImgVal = prod.rawCardImage || (typeof prod.cardImage === "string" ? prod.cardImage : "");
      
      const prodImgs = Array.isArray(prod.rawProductImages) && prod.rawProductImages.length > 0
        ? prod.rawProductImages
        : Array.isArray(prod.productImages)
        ? prod.productImages.map(extractImgStr).filter(Boolean)
        : [];

      const appImgs = Array.isArray(prod.rawApplicationImages) && prod.rawApplicationImages.length > 0
        ? prod.rawApplicationImages
        : Array.isArray(prod.applicationImages)
        ? prod.applicationImages.map(extractImgStr).filter(Boolean)
        : [];

      let specList = [];
      if (Array.isArray(prod.specifications) && prod.specifications.length > 0) {
        specList = prod.specifications.map(s => ({
          label: s.label || "",
          value: s.value || ""
        }));
      } else if (typeof prod.specificationsText === "string" && prod.specificationsText) {
        specList = prod.specificationsText.split("\n").map(line => {
          const parts = line.split(":");
          return { label: parts[0]?.trim() || "", value: parts.slice(1).join(":").trim() || "" };
        }).filter(s => s.label || s.value);
      }
      if (specList.length === 0) {
        specList = [{ label: "", value: "" }];
      }

      setProductFormData({
        id: prod.id,
        slug: prod.slug || "",
        name: prod.name || "",
        tag: prod.tag || "",
        heroTitle: prod.heroTitle || prod.name || "",
        heroSubtitle: prod.heroSubtitle || "Paratech Industries",
        cardImage: cardImgVal,
        productImages: prodImgs,
        materialsTitle: prod.materialsTitle || "",
        materialsText: prod.materialsText || "",
        descriptionsText: Array.isArray(prod.descriptions) ? prod.descriptions.join("\n\n") : "",
        specificationsList: specList,
        applicationImages: appImgs,
        quoteProductName: prod.quoteProductName || prod.name || "",
        metaTitle: prod.metaTitle || "",
        metaDescription: prod.metaDescription || "",
        metaKeywordsText: Array.isArray(prod.metaKeywords) ? prod.metaKeywords.join(", ") : (prod.metaKeywords || "")
      });
    } else {
      setIsEditingProduct(false);
      setProductFormData(INITIAL_PRODUCT_FORM);
    }
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      const descriptions = productFormData.descriptionsText
        .split("\n\n")
        .map(p => p.trim())
        .filter(Boolean);

      const specifications = (productFormData.specificationsList || [])
        .map(s => ({ label: String(s.label || "").trim(), value: String(s.value || "").trim() }))
        .filter(s => s.label || s.value);

      const productImages = (productFormData.productImages || [])
        .map(u => String(u).trim())
        .filter(Boolean);

      const applicationImages = (productFormData.applicationImages || [])
        .map(u => String(u).trim())
        .filter(Boolean);

      const metaKeywords = productFormData.metaKeywordsText
        .split(",")
        .map(k => k.trim())
        .filter(Boolean);

      const payload = {
        slug: productFormData.slug || productFormData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        name: productFormData.name,
        tag: productFormData.tag || null,
        hero_title: productFormData.heroTitle || productFormData.name,
        hero_subtitle: productFormData.heroSubtitle || "Paratech Industries",
        card_image: productFormData.cardImage || null,
        product_images: productImages,
        materials_title: productFormData.materialsTitle || null,
        materials_text: productFormData.materialsText || null,
        descriptions,
        specifications,
        application_images: applicationImages,
        quote_product_name: productFormData.quoteProductName || productFormData.name,
        meta_title: productFormData.metaTitle || null,
        meta_description: productFormData.metaDescription || null,
        meta_keywords: metaKeywords
      };

      if (isEditingProduct) {
        let query = supabase.from("products").update(payload);
        if (productFormData.id && typeof productFormData.id === "number") {
          query = query.eq("id", productFormData.id);
        } else {
          query = query.eq("slug", payload.slug);
        }
        let { error } = await query;
        if (error && error.message && error.message.includes("column")) {
          delete payload.meta_title;
          delete payload.meta_description;
          delete payload.meta_keywords;
          let retryQuery = supabase.from("products").update(payload);
          if (productFormData.id && typeof productFormData.id === "number") {
            retryQuery = retryQuery.eq("id", productFormData.id);
          } else {
            retryQuery = retryQuery.eq("slug", payload.slug);
          }
          const { error: retryError } = await retryQuery;
          error = retryError;
        }
        if (error) throw error;
        setNotification({ type: "success", message: `Updated product "${productFormData.name}" in database!` });
      } else {
        let { error } = await supabase
          .from("products")
          .upsert([payload], { onConflict: "slug" });
        if (error && error.message && error.message.includes("column")) {
          delete payload.meta_title;
          delete payload.meta_description;
          delete payload.meta_keywords;
          const { error: retryError } = await supabase
            .from("products")
            .upsert([payload], { onConflict: "slug" });
          error = retryError;
        }
        if (error) throw error;
        setNotification({ type: "success", message: `Added product "${productFormData.name}" to database!` });
      }

      setIsProductModalOpen(false);
      await fetchProductsAdmin();
    } catch (err) {
      console.error("Save product error:", err);
      setNotification({ type: "error", message: `Database save error: ${err.message || "Failed to update product"}` });
    }
  };

  const handleDeleteProduct = async (id, slug, name) => {
    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("slug", slug);

      if (error) throw error;
      setProductsState(prev => prev.filter(p => p.slug !== slug));
      setNotification({ type: "success", message: `Deleted product "${name}" from database` });
    } catch (err) {
      console.error("Delete product error:", err);
      setNotification({ type: "error", message: `Failed to delete product: ${err.message || err}` });
    } finally {
      setDeleteConfirmProduct(null);
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
        fetchProductsAdmin();
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchBlogs();
        fetchCategories();
        fetchWelcomeUsers();
        fetchProductsAdmin();
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
                placeholder="Enter your email address"
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
                  placeholder="Enter your password"
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
            className={`${styles.navLink} ${currentTab === "products" ? styles.active : ""}`}
            onClick={() => {
              setCurrentTab("products");
              setMobileSidebarOpen(false);
            }}
          >
            <FiBox /> Products
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
              {currentTab === "products" && "Products Management"}
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
                  <FiBox />
                </div>
                <div className={styles.statInfo}>
                  <h3>{productsState.length}</h3>
                  <p>Total Products</p>
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

        {/* PRODUCTS TAB */}
        {currentTab === "products" && (
          <div className={styles.tableWrapper}>
            <div className={styles.tableHeader}>
              <div className={styles.headerTitleArea}>
                <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#1f1f1f" }}>
                  Products Management ({productsState.length})
                </h2>
                <p style={{ fontSize: "13px", color: "#666", marginTop: "4px" }}>
                  Manage dynamic products, descriptions, specifications, and images across the website.
                </p>
              </div>
              <div style={{ display: "flex", gap: "15px", alignItems: "center", flexWrap: "wrap" }}>
                <div className={styles.searchBox}>
                  <FiSearch />
                  <input
                    type="text"
                    placeholder="Search products by name..."
                    value={productSearch}
                    onChange={(e) => {
                      setProductSearch(e.target.value);
                      setProductPage(1);
                    }}
                  />
                </div>
                <button
                  className={styles.primaryBtn}
                  onClick={() => handleOpenProductModal()}
                >
                  <FiPlus /> Add New Product
                </button>
              </div>
            </div>

            {productsLoading ? (
              <div style={{ padding: "50px", textAlign: "center", color: "#666" }}>
                <p>Loading products...</p>
              </div>
            ) : (() => {
              const filtered = productsState.filter(p =>
                (p.name?.toLowerCase() || "").includes(productSearch.toLowerCase()) ||
                (p.slug?.toLowerCase() || "").includes(productSearch.toLowerCase())
              );

              const totalPages = Math.ceil(filtered.length / productPageSize) || 1;
              const currentPage = Math.min(productPage, totalPages);
              const startIndex = (currentPage - 1) * productPageSize;
              const paginated = filtered.slice(startIndex, startIndex + productPageSize);

              return (
                <>
                  <div style={{ overflowX: "auto" }}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Slug / URL Path</th>
                          <th>Specifications</th>
                          <th>Quote Product Name</th>
                          <th style={{ width: "120px", textAlign: "center" }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginated.length === 0 ? (
                          <tr>
                            <td colSpan={5} style={{ textAlign: "center", padding: "40px", color: "#666" }}>
                              No products found. Click "Add New Product" to create one.
                            </td>
                          </tr>
                        ) : (
                          paginated.map((prod) => (
                            <tr key={prod.id || prod.slug}>
                              <td>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                  {getAdminImagePreviewSrc(prod.rawCardImage || prod.cardImage) ? (
                                    <img
                                      src={getAdminImagePreviewSrc(prod.rawCardImage || prod.cardImage)}
                                      alt={prod.name}
                                      style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "6px", border: "1px solid #eee" }}
                                    />
                                  ) : (
                                    <div style={{ width: "40px", height: "40px", background: "#f0f0f0", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>
                                      <FiBox />
                                    </div>
                                  )}
                                  <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                      <span style={{ fontWeight: "600", color: "#1f1f1f" }}>{prod.name}</span>
                                    </div>
                                    <div style={{ fontSize: "12px", color: "#777" }}>{prod.heroSubtitle || "Paratech Industries"}</div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <code style={{ background: "#f5f5f5", padding: "4px 8px", borderRadius: "4px", fontSize: "13px", color: "#2b6cb0" }}>
                                  {getProductHref(prod.slug)}
                                </code>
                              </td>
                              <td>
                                <span className={styles.categoryBadge}>
                                  {prod.specifications ? prod.specifications.length : 0} Specifications
                                </span>
                              </td>
                              <td style={{ fontSize: "13px", color: "#555" }}>
                                {prod.quoteProductName || prod.name}
                              </td>
                              <td>
                                <div className={styles.actionCell}>
                                  <Link
                                    href={getProductHref(prod.slug)}
                                    target="_blank"
                                    className={`${styles.iconBtn} ${styles.edit}`}
                                    title="View Product Page"
                                    style={{ color: "#3182ce" }}
                                  >
                                    <FiGlobe />
                                  </Link>
                                  <button
                                    type="button"
                                    className={`${styles.iconBtn} ${styles.edit}`}
                                    onClick={() => handleOpenProductModal(prod)}
                                    title="Edit Product"
                                  >
                                    <FiEdit />
                                  </button>
                                  <button
                                    type="button"
                                    className={`${styles.iconBtn} ${styles.delete}`}
                                    onClick={() => setDeleteConfirmProduct(prod)}
                                    title="Delete Product"
                                  >
                                    <FiTrash2 />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {totalPages > 1 && (
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 24px",
                      borderTop: "1px solid #f0f0f0",
                      background: "#fafafa"
                    }}>
                      <div style={{ fontSize: "13px", color: "#666" }}>
                        Showing {startIndex + 1} to {Math.min(startIndex + productPageSize, filtered.length)} of {filtered.length} products
                      </div>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <button
                          type="button"
                          disabled={currentPage <= 1}
                          onClick={() => setProductPage(prev => Math.max(prev - 1, 1))}
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
                          onClick={() => setProductPage(prev => Math.min(prev + 1, totalPages))}
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
                      placeholder="Enter article title"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>URL Slug</label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="Enter url slug"
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
                      placeholder="Enter author name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Publish Date</label>
                    <input
                      type="text"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      placeholder="Enter publish date"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Blog Tags</label>
                    <input
                      type="text"
                      value={formData.tags || ""}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="Enter blog tags (comma separated)"
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
                        placeholder="Enter intro paragraphs"
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
                      placeholder="Enter meta title"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Meta description</label>
                    <textarea
                      rows={3}
                      value={formData.meta_description || ""}
                      onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                      placeholder="Enter meta description"
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

      {/* Product Form Modal */}
      {isProductModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} style={{ maxWidth: "700px" }}>
            <header className={styles.modalHeader}>
              <h2>{isEditingProduct ? "Edit Product Details" : "Add New Product"}</h2>
              <button className={styles.closeBtn} onClick={() => setIsProductModalOpen(false)}>
                <FiX />
              </button>
            </header>

            <form onSubmit={handleSaveProduct} style={{ display: "flex", flexDirection: "column", height: "calc(100% - 60px)", overflow: "hidden" }}>
              <div className={styles.modalBody}>
                <div className={styles.formGrid}>
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Product Name *</label>
                    <input
                      type="text"
                      required
                      value={productFormData.name}
                      onChange={(e) => {
                        const name = e.target.value;
                        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
                        setProductFormData(prev => ({
                          ...prev,
                          name,
                          slug: isEditingProduct ? prev.slug : slug,
                          heroTitle: isEditingProduct ? prev.heroTitle : name,
                          quoteProductName: isEditingProduct ? prev.quoteProductName : name
                        }));
                      }}
                      placeholder="Enter product name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>URL Slug *</label>
                    <input
                      type="text"
                      required
                      value={productFormData.slug}
                      onChange={(e) => setProductFormData({ ...productFormData, slug: e.target.value })}
                      placeholder="Enter url slug"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Quote Product Name</label>
                    <input
                      type="text"
                      value={productFormData.quoteProductName}
                      onChange={(e) => setProductFormData({ ...productFormData, quoteProductName: e.target.value })}
                      placeholder="Enter quote product name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Hero Title</label>
                    <input
                      type="text"
                      value={productFormData.heroTitle}
                      onChange={(e) => setProductFormData({ ...productFormData, heroTitle: e.target.value })}
                      placeholder="Enter hero title"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Hero Subtitle</label>
                    <input
                      type="text"
                      value={productFormData.heroSubtitle}
                      onChange={(e) => setProductFormData({ ...productFormData, heroSubtitle: e.target.value })}
                      placeholder="Enter hero subtitle"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Card / Main Product Image</label>
                    <div className={styles.uploadActionArea}>
                      <label htmlFor="cardImageFileInput" className={styles.uploadBtnLabel}>
                        <FiUpload /> Upload Main Image
                      </label>
                      <input
                        id="cardImageFileInput"
                        type="file"
                        accept="image/*"
                        className={styles.uploadFileInput}
                        onChange={(e) => handleProductImageFileUpload(e, "cardImage")}
                      />
                      <input
                        type="text"
                        value={productFormData.cardImage}
                        onChange={(e) => setProductFormData({ ...productFormData, cardImage: e.target.value })}
                        placeholder="Enter card image url or path"
                        style={{ flex: 1 }}
                      />
                    </div>
                    {productFormData.cardImage && (
                      <div className={styles.imageGalleryContainer}>
                        <div className={styles.imageThumbnailCard}>
                          <img
                            src={getAdminImagePreviewSrc(productFormData.cardImage) || productFormData.cardImage}
                            alt="Card preview"
                          />
                          <button
                            type="button"
                            className={styles.removeImgBtn}
                            onClick={() => setProductFormData({ ...productFormData, cardImage: "" })}
                          >
                            <FiX />
                          </button>
                          <div className={styles.imgNameLabel}>{String(productFormData.cardImage).split("/").pop()}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Product Images Gallery (Existing & Uploaded Thumbnails)</label>
                    <div className={styles.uploadActionArea}>
                      <label htmlFor="productImagesFileInput" className={styles.uploadBtnLabel}>
                        <FiUpload /> Upload Product Images
                      </label>
                      <input
                        id="productImagesFileInput"
                        type="file"
                        accept="image/*"
                        multiple
                        className={styles.uploadFileInput}
                        onChange={(e) => handleProductImageFileUpload(e, "productImages")}
                      />
                    </div>

                    <div className={styles.imageGalleryContainer}>
                      {(productFormData.productImages || []).length === 0 ? (
                        <p style={{ fontSize: "13px", color: "#888", padding: "12px" }}>No product images uploaded yet.</p>
                      ) : (
                        (productFormData.productImages || []).map((img, idx) => {
                          const previewSrc = getAdminImagePreviewSrc(img);
                          return (
                            <div key={idx} className={styles.imageThumbnailCard}>
                              {previewSrc ? (
                                <img src={previewSrc} alt={`prod-img-${idx}`} />
                              ) : (
                                <div style={{ padding: "8px", fontSize: "10px", color: "#666" }}>{String(img)}</div>
                              )}
                              <button
                                type="button"
                                className={styles.removeImgBtn}
                                onClick={() => removeProductImage(idx, "productImages")}
                              >
                                <FiX />
                              </button>
                              <div className={styles.imgNameLabel}>{String(img).split("/").pop()}</div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Materials Title</label>
                    <input
                      type="text"
                      value={productFormData.materialsTitle}
                      onChange={(e) => setProductFormData({ ...productFormData, materialsTitle: e.target.value })}
                      placeholder="Enter materials title"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Materials Suitability Description</label>
                    <textarea
                      rows={2}
                      value={productFormData.materialsText}
                      onChange={(e) => setProductFormData({ ...productFormData, materialsText: e.target.value })}
                      placeholder="Enter materials suitability description"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Product Descriptions (Separate paragraphs with double newlines)</label>
                    <textarea
                      rows={4}
                      value={productFormData.descriptionsText}
                      onChange={(e) => setProductFormData({ ...productFormData, descriptionsText: e.target.value })}
                      placeholder="Enter product descriptions"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Specification Table Editor</label>
                    <div className={styles.specEditorContainer}>
                      <div className={styles.specHeaderRow}>
                        <div>Specification Name (Label)</div>
                        <div>Specification Value</div>
                        <div>Action</div>
                      </div>
                      <div className={styles.specRowList}>
                        {(productFormData.specificationsList || []).map((spec, idx) => (
                          <div key={idx} className={styles.specRow}>
                            <input
                              type="text"
                              placeholder="e.g. Laser type"
                              value={spec.label}
                              onChange={(e) => handleSpecChange(idx, "label", e.target.value)}
                            />
                            <input
                              type="text"
                              placeholder="e.g. Pulsed Fiber Laser"
                              value={spec.value}
                              onChange={(e) => handleSpecChange(idx, "value", e.target.value)}
                            />
                            <button
                              type="button"
                              className={`${styles.iconBtn} ${styles.delete}`}
                              onClick={() => removeSpecRow(idx)}
                              title="Remove Row"
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        className={styles.addSpecBtn}
                        onClick={addSpecRow}
                      >
                        <FiPlus /> Add Specification Row
                      </button>
                    </div>
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Application Images Gallery (Existing & Uploaded)</label>
                    <div className={styles.uploadActionArea}>
                      <label htmlFor="applicationImagesFileInput" className={styles.uploadBtnLabel}>
                        <FiUpload /> Upload Application Images
                      </label>
                      <input
                        id="applicationImagesFileInput"
                        type="file"
                        accept="image/*"
                        multiple
                        className={styles.uploadFileInput}
                        onChange={(e) => handleProductImageFileUpload(e, "applicationImages")}
                      />
                    </div>

                    <div className={styles.imageGalleryContainer}>
                      {(productFormData.applicationImages || []).length === 0 ? (
                        <p style={{ fontSize: "13px", color: "#888", padding: "12px" }}>No application images uploaded yet.</p>
                      ) : (
                        (productFormData.applicationImages || []).map((img, idx) => {
                          const previewSrc = getAdminImagePreviewSrc(img);
                          return (
                            <div key={idx} className={styles.imageThumbnailCard}>
                              {previewSrc ? (
                                <img src={previewSrc} alt={`app-img-${idx}`} />
                              ) : (
                                <div style={{ padding: "8px", fontSize: "10px", color: "#666" }}>{String(img)}</div>
                              )}
                              <button
                                type="button"
                                className={styles.removeImgBtn}
                                onClick={() => removeProductImage(idx, "applicationImages")}
                              >
                                <FiX />
                              </button>
                              <div className={styles.imgNameLabel}>{String(img).split("/").pop()}</div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>SEO Meta Title (Browser & Search Engine Title)</label>
                    <input
                      type="text"
                      value={productFormData.metaTitle}
                      onChange={(e) => setProductFormData({ ...productFormData, metaTitle: e.target.value })}
                      placeholder="Enter seo meta title"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>SEO Meta Description (Search Engine Description)</label>
                    <textarea
                      rows={2}
                      value={productFormData.metaDescription}
                      onChange={(e) => setProductFormData({ ...productFormData, metaDescription: e.target.value })}
                      placeholder="Enter seo meta description"
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>SEO Meta Keywords (Comma-separated keywords)</label>
                    <textarea
                      rows={2}
                      value={productFormData.metaKeywordsText}
                      onChange={(e) => setProductFormData({ ...productFormData, metaKeywordsText: e.target.value })}
                      placeholder="Enter seo meta keywords"
                    />
                  </div>
                </div>
              </div>

              <footer className={styles.modalFooter}>
                <button type="button" className={styles.secondaryBtn} onClick={() => setIsProductModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryBtn}>
                  {isEditingProduct ? "Update Product" : "Create Product"}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal for Product */}
      {deleteConfirmProduct && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} style={{ maxWidth: "450px" }}>
            <header className={styles.modalHeader}>
              <h2>Confirm Deletion</h2>
              <button className={styles.closeBtn} onClick={() => setDeleteConfirmProduct(null)}>
                <FiX />
              </button>
            </header>
            <div className={styles.modalBody} style={{ padding: "30px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ fontSize: "50px", color: "#e53e3e", display: "flex", justifyContent: "center" }}>
                <FiTrash2 />
              </div>
              <div>
                <p style={{ fontSize: "16px", fontWeight: "700", color: "#1f1f1f", marginBottom: "8px" }}>
                  Delete Product?
                </p>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
                  Are you sure you want to delete <strong>"{deleteConfirmProduct.name}"</strong>? This will remove it from the database and live website.
                </p>
              </div>
            </div>
            <footer className={styles.modalFooter}>
              <button type="button" className={styles.secondaryBtn} onClick={() => setDeleteConfirmProduct(null)}>
                Cancel
              </button>
              <button
                type="button"
                className={styles.primaryBtn}
                style={{ background: "#e53e3e", color: "#ffffff", borderColor: "transparent" }}
                onClick={() => handleDeleteProduct(deleteConfirmProduct.id, deleteConfirmProduct.slug, deleteConfirmProduct.name)}
              >
                Delete Product
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
