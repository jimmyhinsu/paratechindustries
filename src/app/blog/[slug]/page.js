import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogImageMap } from "@/data/blogs";
import { supabase } from "@/lib/supabase";
import styles from "../blog.module.scss";
import { FiArrowLeft, FiUser, FiCalendar } from "react-icons/fi";
import Contactsection from "@/components/contactsection";
import ScrollToTop from "./ScrollToTop";

// Helper to fetch blog data on the server
async function getBlog(slug) {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) return null;
    return {
      ...data,
      image: blogImageMap[data.image] || data.image,
      readTime: data.read_time || data.readTime
    };
  } catch (err) {
    console.error("Failed to load blog on server:", err);
    return null;
  }
}

// Generate metadata dynamically on the server for Search Engines / View Source
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Paratech Industries",
      description: "The article you are looking for does not exist."
    };
  }

  const title = blog.meta_title || `${blog.title} | Paratech Industries`;
  const description = blog.meta_description || blog.excerpt?.replace(/<[^>]*>/g, '')?.substring(0, 160) || "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: blog.image ? [blog.image] : [],
    }
  };
}

// Main page component (Server Component)
export default async function BlogDetail({ params }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) {
    return (
      <div className={styles.detailSection}>
        <div className={styles.detailContainer}>
          <Link href="/blog" className={styles.backBtn}>
            <FiArrowLeft /> Back to Blogs
          </Link>
          <h1 className={styles.detailTitle}>Blog Not Found</h1>
          <p>The article you are looking for does not exist or has been moved.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <section className={styles.detailSection}>
        <div className={styles.detailContainer}>
          <Link href="/blog" className={styles.backBtn}>
            <FiArrowLeft /> Back to Blogs
          </Link>

          <header className={styles.detailHeader}>
            <span className={styles.category}>{blog.category}</span>
            <h1 className={styles.detailTitle}>{blog.title}</h1>
            <div className={styles.detailMeta}>
              <span className={styles.author}>
                <FiUser /> By {blog.author}
              </span>
              <span>
                <FiCalendar /> {blog.date}
              </span>
            </div>
          </header>

          <div className={styles.detailImageWrapper}>
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 900px"
              />
            )}
          </div>

          <div className={styles.detailContent}>
            {blog.excerpt && (
              <div dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
            )}
            {blog.content && Array.isArray(blog.content) && blog.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return <p key={idx}>{block.text}</p>;
              } else if (block.type === "heading") {
                return <h2 key={idx}>{block.text}</h2>;
              } else if (block.type === "list") {
                return (
                  <ul key={idx}>
                    {block.items && Array.isArray(block.items) && block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>
      <Contactsection />
    </>
  );
}
