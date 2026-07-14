"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Commonherobanner from "@/components/commonherobanner";
import common from "@/assests/images/common.jpg";
import { blogImageMap } from "@/data/blogs";
import { supabase } from "@/lib/supabase";
import styles from "./blog.module.scss";
import { FiArrowRight } from "react-icons/fi";
import Contactsection from "@/components/contactsection";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Insights & Technical Blog | Paratech Industries";

    async function fetchBlogs() {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;

        const mapped = (data || []).map((blog) => ({
          ...blog,
          image: blogImageMap[blog.image] || blog.image,
          readTime: blog.read_time || blog.readTime
        }));

        const sorted = mapped.sort((a, b) => {
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
        console.error("Failed to load blogs:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <>
      <Commonherobanner
        title="Insights & Technical Blog"
        subtitle="Stay updated with the latest in laser technology and industrial manufacturing"
        bgImage={common}
      />

      <section className={styles.blogSection}>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.statusBox}>
              <div className={styles.spinner} />
              <p>Loading articles...</p>
            </div>
          ) : error ? (
            <div className={styles.statusBox}>
              <p className={styles.errorText}>Failed to load blogs. Please try again later.</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className={styles.statusBox}>
              <p className={styles.emptyText}>No blog articles have been published yet. Check back soon!</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {blogs.map((blog) => (
                <article key={blog.id} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    {blog.image && (
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={blog.id === 1}
                      />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.metaInfo}>
                      <span className={styles.category}>{blog.category}</span>
                      <span className={styles.date}>{blog.date}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{blog.title}</h2>
                    <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
                    <Link href={`/blog/${blog.slug}`} className={styles.readMoreBtn}>
                      Read More <FiArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Contactsection />
    </>
  );
}
