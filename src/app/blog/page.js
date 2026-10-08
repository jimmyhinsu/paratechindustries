import React from "react";
import Link from "next/link";
import Image from "next/image";
import Commonherobanner from "@/components/commonherobanner";
import common from "@/assests/images/common.jpg";
import { blogImageMap } from "@/data/blogs";
import { supabase } from "@/lib/supabase";
import styles from "./blog.module.scss";
import { FiArrowRight } from "react-icons/fi";
import Contactsection from "@/components/contactsection";
import ScrollToTop from "@/common/ScrollToTop";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Insights & Technical Blog",
  description:
    "Read Paratech Industries’ latest insights on laser marking, cutting, engraving, welding and industrial laser machine technology and applications.",
  keywords: [
    "laser machine blog",
    "laser marking insights",
    "fiber laser technology",
    "laser cutting articles",
    "Paratech Industries blog",
  ],
  alternates: {
    canonical: "https://paratechindustries.com/blog",
  },
  openGraph: {
    title: "Insights & Technical Blog | Paratech Industries",
    description:
      "Read Paratech Industries’ latest insights on laser marking, cutting, engraving, welding and industrial laser machine technology and applications.",
    url: "https://paratechindustries.com/blog",
    siteName: "Paratech Industries",
    type: "website",
  },
};

async function getBlogs() {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    const mapped = (data || []).map((blog) => ({
      ...blog,
      image: blogImageMap[blog.image] || blog.image,
      readTime: blog.read_time || blog.readTime,
    }));

    return mapped.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const timeA = isNaN(dateA.getTime()) ? 0 : dateA.getTime();
      const timeB = isNaN(dateB.getTime()) ? 0 : dateB.getTime();
      if (timeB !== timeA) {
        return timeB - timeA;
      }
      return b.id - a.id;
    });
  } catch (err) {
    console.error("Failed to load blogs on server:", err);
    return [];
  }
}

export default async function BlogList() {
  const blogs = await getBlogs();

  return (
    <>
      <ScrollToTop />
      <Commonherobanner
        title="Insights & Technical Blog"
        subtitle="Stay updated with the latest in laser technology and industrial manufacturing"
        bgImage={common}
      />

      <section className={styles.blogSection}>
        <div className={styles.container}>
          {blogs.length === 0 ? (
            <div className={styles.statusBox}>
              <p className={styles.emptyText}>
                No blog articles have been published yet. Check back soon!
              </p>
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
                        priority={blog.id === 1 || blog.id === 12}
                      />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.metaInfo}>
                      <span className={styles.category}>{blog.category}</span>
                      <span className={styles.date}>{blog.date}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{blog.title}</h2>
                    <div
                      className={styles.excerpt}
                      dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                    />
                    <Link
                      href={`/blog/${blog.slug}`}
                      className={styles.readMoreBtn}
                    >
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
