"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogs as staticBlogs, blogImageMap } from "@/data/blogs";
import { supabase } from "@/lib/supabase";
import styles from "../blog.module.scss";
import { FiArrowLeft, FiUser, FiCalendar } from "react-icons/fi";
import Contactsection from "@/components/contactsection";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(() => staticBlogs.find((b) => b.slug === slug));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) {
          console.warn("Using local fallback due to database read error:", error);
        } else if (data) {
          setBlog({
            ...data,
            image: blogImageMap[data.image] || data.image,
            readTime: data.read_time || data.readTime
          });
        }
      } catch (err) {
        console.warn("Using local fallback due to fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (blog) {
      document.title = `${blog.title} | Paratech Industries`;
    }
  }, [blog]);

  if (!blog && !loading) {
    return (
      <div className={styles.detailSection}>
        <div className={styles.detailContainer}>
          <Link href="/blog" className={styles.backBtn}>
            <FiArrowLeft /> Back to Blogs
          </Link>
          <h1 className={styles.detailTitle}>Blog Not Found</h1>
          <p>The blog article you are looking for does not exist or has been moved.</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={styles.detailSection}>
        <div className={styles.detailContainer}>
          <p>Loading blog content...</p>
        </div>
      </div>
    );
  }

  return (
    <>
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
