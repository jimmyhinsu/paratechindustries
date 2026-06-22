"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Commonherobanner from "@/components/commonherobanner";
import common from "@/assests/images/common.jpg";
import { blogs as staticBlogs, blogImageMap } from "@/data/blogs";
import { supabase } from "@/lib/supabase";
import styles from "./blog.module.scss";
import { FiArrowRight } from "react-icons/fi";
import Contactsection from "@/components/contactsection";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Insights & Technical Blog | Paratech Industries";

    async function fetchBlogs() {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("id", { ascending: true });

        if (error) {
          console.warn("Using local fallback due to database read error:", error);
          setBlogs(staticBlogs);
        } else if (data && data.length > 0) {
          const mapped = data.map((blog) => ({
            ...blog,
            image: blogImageMap[blog.image] || blog.image,
            readTime: blog.read_time || blog.readTime
          }));
          setBlogs(mapped);
        } else {
          setBlogs(staticBlogs);
        }
      } catch (err) {
        console.warn("Using local fallback due to fetch error:", err);
        setBlogs(staticBlogs);
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
                  <p className={styles.excerpt}>{blog.excerpt}</p>
                  <Link href={`/blog/${blog.slug}`} className={styles.readMoreBtn}>
                    Read More <FiArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contactsection />
    </>
  );
}
