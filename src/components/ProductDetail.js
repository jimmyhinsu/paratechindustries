"use client";
import React, { useState, useEffect } from "react";
import styles from "./fiberlaser/fiberlaser.module.scss";
import Imagemodel from "./imagemodel";
import QuoteModal from "./quotemodal";
import Image from "next/image";
import Commonherobanner from "./commonherobanner";
import common from "@/assests/images/common.jpg";
import { fetchProductBySlugFromSupabase, resolveImage, resolveImageArray } from "@/data/products";

const SmartImage = ({ src, alt, width, height, className, style, priority = false }) => {
  if (!src) return null;
  if (typeof src === "object" && src.src) {
    return (
      <Image
        src={src}
        alt={alt || "Product image"}
        width={width || 600}
        height={height || 600}
        className={className}
        style={style}
        priority={priority}
        unoptimized
      />
    );
  }
  if (typeof src === "string") {
    return (
      <img
        src={src}
        alt={alt || "Product image"}
        className={className}
        style={{ width: "100%", height: "100%", objectFit: "cover", ...style }}
      />
    );
  }
  return null;
};

export default function ProductDetail({ product: initialProduct, slug }) {
  const [product, setProduct] = useState(initialProduct || null);
  const [loading, setLoading] = useState(!initialProduct && !!slug);
  const [mainImage, setMainImage] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const setupProductData = (data) => {
      if (!data) return;
      const rawCard = data.rawCardImage || data.cardImage;
      const cardImg = resolveImage(rawCard);

      const rawPImgs = (Array.isArray(data.rawProductImages) && data.rawProductImages.length > 0)
        ? data.rawProductImages
        : (Array.isArray(data.productImages) ? data.productImages : []);
      const pImages = resolveImageArray(rawPImgs);

      const rawAImgs = (Array.isArray(data.rawApplicationImages) && data.rawApplicationImages.length > 0)
        ? data.rawApplicationImages
        : (Array.isArray(data.applicationImages) ? data.applicationImages : []);
      const aImages = resolveImageArray(rawAImgs);

      const finalPImages = pImages.length > 0 ? pImages : (cardImg ? [cardImg] : []);

      const resolvedProduct = {
        ...data,
        cardImage: cardImg,
        productImages: finalPImages,
        applicationImages: aImages
      };

      setProduct(resolvedProduct);
      setMainImage(finalPImages[0] || cardImg || null);
    };

    if (initialProduct) {
      setupProductData(initialProduct);
      setLoading(false);
      return;
    }

    if (slug) {
      setLoading(true);
      fetchProductBySlugFromSupabase(slug).then((data) => {
        if (isMounted) {
          setupProductData(data);
          setLoading(false);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [initialProduct, slug]);

  if (loading) {
    return (
      <section className={styles.machineSection}>
        <div className={styles.container}>
          <p>Loading product details...</p>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className={styles.machineSection}>
        <div className={styles.container}>
          <h2>Product Not Found</h2>
          <p>The requested product could not be found.</p>
        </div>
      </section>
    );
  }

  const productImages = product.productImages || [];
  const applicationImages = product.applicationImages || [];

  return (
    <>
      <Commonherobanner
        title={product.heroTitle || product.name}
        subtitle={product.heroSubtitle || "Paratech Industries"}
        bgImage={common}
      />

      <section className={styles.machineSection}>
        <div className={styles.container}>
          <div className={styles.gridmachine}>
            {/* LEFT: Product image, thumbnails, buttons */}
            <div className={styles.left}>
              {mainImage && (
                <div className={styles.imageWrap}>
                  <SmartImage
                    src={mainImage}
                    alt={product.name}
                    width={700}
                    height={630}
                    className={styles.mainImage}
                    priority
                  />
                </div>
              )}

              {productImages.length > 1 && (
                <div className={styles.thumbRow}>
                  {productImages.map((img, i) => (
                    <button
                      key={i}
                      className={`${styles.thumbBtn} ${
                        mainImage === img ? styles.active : ""
                      }`}
                      onClick={() => setMainImage(img)}
                      aria-label={`Select image ${i + 1}`}
                    >
                      <SmartImage
                        src={img}
                        alt={`thumb-${i}`}
                        width={80}
                        height={60}
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className={styles.actions}>
                <button
                  className={styles.quoteBtn}
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Request A Quote &nbsp; →
                </button>

                <a href="/catalogue.pdf" target="__blank">
                  <button className={styles.catalogBtn}>
                    Download Catalogue &nbsp; →
                  </button>
                </a>
              </div>

              {(() => {
                const rawTags = product?.tag || product?.tags;
                const tagsList = rawTags
                  ? (Array.isArray(rawTags)
                      ? rawTags
                      : typeof rawTags === "string"
                      ? rawTags.split(",")
                      : [rawTags]
                    )
                      .map(t => String(t).trim())
                      .filter(Boolean)
                  : (Array.isArray(product?.metaKeywords) && product.metaKeywords.length > 0)
                  ? product.metaKeywords
                  : [];

                if (tagsList.length === 0) return null;

                return (
                  <div className={styles.tagWrapper}>
                    <span className={styles.tagLabel}>Tags:</span>
                    {tagsList.map((tagText, idx) => (
                      <span key={idx} className={styles.productTag}>
                        {tagText}
                      </span>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* RIGHT: Title, Materials, Specification table, Application grid */}
            <div className={styles.right}>
              <h2>{product.name}</h2>

              {product.materialsText && (
                <>
                  <h3>{product.materialsTitle || "Which Materials You Can Mark !!"}</h3>
                  <p>{product.materialsText}</p>
                </>
              )}

              {product.descriptions && product.descriptions.length > 0 && (
                product.descriptions.map((desc, idx) => (
                  <p key={idx} className={styles.productDesc}>
                    {desc}
                  </p>
                ))
              )}

              {product.specifications && product.specifications.length > 0 && (
                <>
                  <h4 className={styles.specHeading}>Specification</h4>
                  <table className={styles.specTable}>
                    <tbody>
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx}>
                          <td className={styles.leftCell}>{spec.label}</td>
                          <td className={styles.rightCell}>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {applicationImages.length > 0 && (
                <>
                  <h3 className={styles.appHeading}>Application</h3>
                  <div className={styles.appGrid}>
                    {applicationImages.filter(Boolean).map((img, idx) => (
                      <button
                        key={idx}
                        className={styles.appItem}
                        onClick={() => setModalImage(img)}
                        aria-label={`Open application image ${idx + 1}`}
                      >
                        <SmartImage
                          src={img}
                          alt={`app-${idx}`}
                          width={140}
                          height={120}
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {modalImage && (
          <Imagemodel image={modalImage} onClose={() => setModalImage(null)} />
        )}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          productName={product.quoteProductName || product.name}
        />
      </section>
    </>
  );
}
