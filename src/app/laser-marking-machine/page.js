import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./lasermarking.module.scss";
import ScrollToTop from "@/common/ScrollToTop";
import LaserMarkingFaq from "./LaserMarkingFaq";

// Machine Images
import flmHero from "@/assests/images/lasermarkingmachine.jpg";
import uvImg from "@/assests/images/uvlasermarkingmachine.jpeg";
import olmmImg from "@/assests/images/olmm.jpg";
import customImg from "@/assests/images/customiselasermachine.jpg";
import dmarkingImg from "@/assests/images/dmarking.jpg";

// Icons
import {
  FaArrowRight,
  FaCheck,
  FaAward,
  FaCrosshairs,
  FaBolt,
  FaLeaf,
  FaHandPaper,
  FaSyncAlt,
  FaBarcode,
  FaTag,
  FaHashtag,
  FaQrcode,
  FaCopyright,
  FaCalendarAlt,
  FaCogs,
  FaGem,
  FaTools,
  FaCube,
  FaLayerGroup,
  FaExpand,
  FaTachometerAlt,
  FaSearchPlus,
  FaIndustry,
  FaRobot,
  FaHeadset,
  FaHistory,
  FaLightbulb,
  FaUserTie,
  FaBullseye,
  FaBuilding,
  FaPhoneAlt,
} from "react-icons/fa";

export const metadata = {
  title: "Laser Marking Machine Manufacturer in India",
  description:
    "Explore laser marking machines from Paratech Industries for precise, permanent marking on metals, plastics and other materials. Get a quote today.",
  keywords: [
    "laser marking machine",
    "laser marking machine manufacturer in India",
    "fiber laser marking machine",
    "UV laser marking machine",
    "online laser marking machine",
    "3D laser marking machine",
    "industrial laser marking",
    "Paratech Industries",
  ],
  alternates: {
    canonical: "https://paratechindustries.com/laser-marking-machine",
  },
  twitter: null,
};

const faqs = [
  {
    question: "What is a laser marking machine?",
    answer:
      "A laser marking machine uses a focused laser beam to create permanent or durable marks on compatible materials. It can be used for text, logos, serial numbers, barcodes, QR codes, graphics, and product identification.",
  },
  {
    question: "What is a laser marking machine used for?",
    answer:
      "Laser marking machines are used for product identification, serial numbers, QR codes, barcodes, logos, batch numbers, manufacturing dates, traceability, branding, and decorative marking.",
  },
  {
    question: "Which laser marking machine is best for metal?",
    answer:
      "Fiber laser marking machines are widely used for marking compatible metals such as stainless steel, aluminium, brass, copper, titanium, and other metal components. The best machine depends on the exact material and required marking result.",
  },
  {
    question: "Can a laser marking machine mark QR codes and barcodes?",
    answer:
      "Yes. Suitable laser marking machines can mark QR codes, barcodes, data matrix codes, serial numbers, and other machine-readable information on compatible surfaces.",
  },
  {
    question: "Can laser marking be done on plastic?",
    answer:
      "Yes, but suitability depends on the type of plastic, its composition, colour, additives, and the laser wavelength. UV laser systems can be suitable for certain specialised plastic-marking applications.",
  },
  {
    question: "Is laser marking permanent?",
    answer:
      "Laser marking can create durable and permanent identification depending on the material, marking method, environmental conditions, and required application.",
  },
  {
    question: "How much does a laser marking machine cost?",
    answer:
      "The cost varies depending on the laser source, power, marking area, machine configuration, automation level, software, and application requirements. Contact Paratech Industries for a machine recommendation and quotation based on your requirements.",
  },
  {
    question: "Does Paratech Industries provide laser marking machines in India?",
    answer:
      "Yes. Paratech Industries manufactures and supplies industrial laser marking solutions for customers in India and supports different manufacturing and industrial applications.",
  },
];

const materialsList = [
  "Stainless steel",
  "Mild steel",
  "Aluminium",
  "Brass",
  "Copper",
  "Titanium",
  "Iron",
  "Gold",
  "Silver",
  "Platinum",
  "Carbide",
  "Engineering plastics",
  "Selected industrial plastics",
  "Coated metals",
  "Anodised aluminium",
  "Painted surfaces",
  "Other compatible materials",
];

const marksCreated = [
  "Text",
  "Numbers",
  "Logos",
  "Serial numbers",
  "Barcodes",
  "QR codes",
  "Data matrix codes",
  "Batch numbers",
  "Manufacturing dates",
  "Product codes",
  "Graphics",
  "Identification marks",
];

export default function LaserMarkingMachinePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className={styles.pageWrapper}>
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>Paratech Laser Solutions</span>
              <h1>Laser Marking Machine</h1>
              <p className={styles.heroDesc}>
                Achieve precise, permanent, and high-quality product identification with advanced laser marking machines from Paratech Industries. Our laser marking solutions are designed for industrial applications such as serial number marking, QR codes, barcodes, logos, text, graphics, and product traceability.
              </p>
              <p className={styles.heroSubDesc}>
                From fiber laser marking to UV and specialised marking solutions, we help manufacturers select the right technology for their material, application, and production requirements.
              </p>
              <div className={styles.heroButtons}>
                <a href="#product-types" className={styles.primaryBtn}>
                  <span>Explore Laser Marking Machines</span>
                  <FaArrowRight />
                </a>
                <Link href="/contactus" className={styles.secondaryBtn}>
                  <span>Get a Quote</span>
                </Link>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <Image
                src={flmHero}
                alt="Laser Marking Machine"
                priority
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Overview</span>
            <h2>Industrial Laser Marking Machines for Precise & Permanent Marking</h2>
          </div>
          <div className={styles.introCard}>
            <p>
              Laser marking is a reliable way to create permanent identification and traceability marks on compatible materials without using inks, labels, or mechanical engraving tools.
            </p>
            <p>
              At Paratech Industries, we provide laser marking machines designed for different industrial applications and materials. Our solutions can be used to mark product names, serial numbers, model numbers, barcodes, QR codes, logos, dates, batch numbers, graphics, and other identification information.
            </p>
            <p>
              The appropriate laser marking technology depends on factors such as material type, surface condition, required marking depth, marking speed, production volume, and the desired appearance of the finished mark.
            </p>
            <p>
              Whether you need marking for metal components, electronic parts, automotive components, jewellery, tools, medical devices, or industrial products, our team can help you identify a suitable laser marking solution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT TYPES */}
      <section className={styles.productTypesSection} id="product-types">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Product Range</span>
            <h2>Explore Our Laser Marking Machines</h2>
            <p>
              Different materials and production requirements require different laser technologies. Our range includes laser marking solutions for a variety of industrial and specialised applications.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {/* Fiber Laser Marking */}
            <div className={styles.productCard}>
              <div className={styles.cardImg}>
                <Image src={flmHero} alt="Fiber Laser Marking Machine" fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.cardBody}>
                <h3>Fiber Laser Marking Machine</h3>
                <p className={styles.cardDesc}>
                  Fiber laser marking machines are widely used for permanent marking on compatible metals and selected non-metal materials. They are suitable for applications requiring high precision, repeatability, and efficient marking.
                </p>
                <div className={styles.appsList}>
                  <h4>Common Applications</h4>
                  <ul>
                    <li>Serial numbers</li>
                    <li>QR codes</li>
                    <li>Barcodes</li>
                    <li>Logo marking</li>
                    <li>Identification</li>
                    <li>Components</li>
                    <li>Data matrix</li>
                    <li>Traceability</li>
                  </ul>
                </div>
                <Link href="/products/fiber-laser-marking-machine" className={styles.exploreLink}>
                  <span>Explore Fiber Laser Marking Machine</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* UV Laser Marking */}
            <div className={styles.productCard}>
              <div className={styles.cardImg}>
                <Image src={uvImg} alt="UV Laser Marking Machine" fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.cardBody}>
                <h3>UV Laser Marking Machine</h3>
                <p className={styles.cardDesc}>
                  UV laser marking machines are designed for applications requiring fine and detailed marking with controlled processing. They can be considered for sensitive or specialised materials where conventional laser marking may not provide the desired result.
                </p>
                <div className={styles.appsList}>
                  <h4>Common Applications</h4>
                  <ul>
                    <li>Fine text marking</li>
                    <li>Detailed graphics</li>
                    <li>Electronics marking</li>
                    <li>Plastic marking</li>
                    <li>Product ID</li>
                    <li>Precision parts</li>
                  </ul>
                </div>
                <Link href="/products/uv-laser-marking-machine" className={styles.exploreLink}>
                  <span>Explore UV Laser Marking Machine</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Online Laser Marking */}
            <div className={styles.productCard}>
              <div className={styles.cardImg}>
                <Image src={olmmImg} alt="Online Laser Marking Machine" fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.cardBody}>
                <h3>Online Laser Marking Machine</h3>
                <p className={styles.cardDesc}>
                  Online laser marking systems can be integrated into production lines to mark products while they move through an automated manufacturing process. They are suitable for businesses looking to improve production efficiency and automate product identification and traceability.
                </p>
                <div className={styles.appsList}>
                  <h4>Key Focus</h4>
                  <ul>
                    <li>Conveyor integration</li>
                    <li>Continuous marking</li>
                    <li>High-speed coding</li>
                    <li>Batch traceability</li>
                  </ul>
                </div>
                <Link href="/products/online-laser-marking-machine" className={styles.exploreLink}>
                  <span>Explore Online Laser Marking Machine</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Customised Laser Marking */}
            <div className={styles.productCard}>
              <div className={styles.cardImg}>
                <Image src={customImg} alt="Customised Laser Marking Machine" fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.cardBody}>
                <h3>Customised Laser Marking Machine</h3>
                <p className={styles.cardDesc}>
                  For specialised manufacturing requirements, customised laser marking systems can be configured around the product, marking area, automation requirements, and production workflow. These solutions can be considered when standard machine configurations do not meet a specific production requirement.
                </p>
                <div className={styles.appsList}>
                  <h4>Custom Capabilities</h4>
                  <ul>
                    <li>Custom fixtures</li>
                    <li>Tailored power</li>
                    <li>Enclosure types</li>
                    <li>Rotary indexing</li>
                  </ul>
                </div>
                <Link href="/products/customise-laser-machine" className={styles.exploreLink}>
                  <span>Enquire About Custom Laser Marking</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* 3D Laser Marking */}
            <div className={styles.productCard}>
              <div className={styles.cardImg}>
                <Image src={dmarkingImg} alt="3D Laser Marking Machine" fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.cardBody}>
                <h3>3D Laser Marking Machine</h3>
                <p className={styles.cardDesc}>
                  3D laser marking machines are designed to mark complex, curved, uneven, or three-dimensional surfaces with greater flexibility than conventional flat-surface marking systems. They can help manufacturers create precise and consistent marks on products with varying surface heights and geometries.
                </p>
                <div className={styles.appsList}>
                  <h4>Common Applications</h4>
                  <ul>
                    <li>Curved surfaces</li>
                    <li>3D components</li>
                    <li>Complex parts</li>
                    <li>Moulds & tools</li>
                    <li>Jewellery designs</li>
                    <li>Detailed logos</li>
                  </ul>
                </div>
                <Link href="/products/3d-marking" className={styles.exploreLink}>
                  <span>Explore 3D Laser Marking Machine</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT IS LASER MARKING? */}
      <section className={styles.whatIsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Technology & Definition</span>
            <h2>What Is a Laser Marking Machine?</h2>
          </div>
          <div className={styles.whatIsCard}>
            <p className={styles.mainText}>
              A laser marking machine uses a focused laser beam to create a permanent mark on a material's surface. Depending on the laser source, material, settings, and application, the process can create different types of marks, including surface discoloration, engraving, etching, or controlled material removal. Unlike traditional printing methods, laser marking does not require ink, stickers, or physical contact with the product.
            </p>

            <h3 className={styles.createsTitle}>Laser marking can be used to create:</h3>
            <div className={styles.tagsGrid}>
              {marksCreated.map((tag, idx) => (
                <div key={idx} className={styles.tagBadge}>
                  <FaCheck style={{ marginRight: "6px", fontSize: "12px", color: "#1a202c" }} />
                  {tag}
                </div>
              ))}
            </div>

            <p className={styles.subText}>
              The final result depends on the material, laser wavelength, power, marking speed, frequency, focus, and other machine parameters.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Why Choose Laser</span>
            <h2>Benefits of Using a Laser Marking Machine</h2>
            <p>
              Laser marking can provide several advantages for manufacturers when the technology is correctly matched to the application.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><FaAward /></div>
              <h3>Permanent Marking</h3>
              <p>Laser marking can create durable identification that remains readable throughout the product's intended service life, depending on the material and marking method.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><FaCrosshairs /></div>
              <h3>High Precision</h3>
              <p>The focused laser beam allows manufacturers to create detailed marks, including small text, codes, logos, and graphics.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><FaBolt /></div>
              <h3>Fast Processing</h3>
              <p>Laser marking can support high-speed production environments and automated marking workflows.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><FaLeaf /></div>
              <h3>No Ink or Labels</h3>
              <p>The marking process does not require consumable inks, printing ribbons, or adhesive labels.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><FaHandPaper /></div>
              <h3>Low Mechanical Contact</h3>
              <p>Laser marking is a non-contact process, reducing the need for physical contact between the marking tool and product.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><FaSyncAlt /></div>
              <h3>Repeatable Results</h3>
              <p>Once suitable parameters are established, laser marking can produce consistent results across batches.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><FaBarcode /></div>
              <h3>Product Traceability</h3>
              <p>Serial numbers, barcodes, QR codes, and data matrix codes can help manufacturers identify and track products and components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS */}
      <section className={styles.applicationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Use Cases</span>
            <h2>Laser Marking Machine Applications</h2>
            <p>
              Laser marking can be used for a wide range of identification, branding, traceability, and decorative applications.
            </p>
          </div>

          <div className={styles.appsGrid}>
            <div className={styles.appCard}>
              <div className={styles.icon}><FaTag /></div>
              <h3>Product Identification</h3>
              <p>Mark product names, model numbers, specifications, and other identification information.</p>
            </div>

            <div className={styles.appCard}>
              <div className={styles.icon}><FaHashtag /></div>
              <h3>Serial Number Marking</h3>
              <p>Create unique serial numbers for component identification and traceability.</p>
            </div>

            <div className={styles.appCard}>
              <div className={styles.icon}><FaQrcode /></div>
              <h3>QR Code & Barcode Marking</h3>
              <p>Create machine-readable codes for product tracking, inventory, authentication, and production processes.</p>
            </div>

            <div className={styles.appCard}>
              <div className={styles.icon}><FaCopyright /></div>
              <h3>Logo Marking</h3>
              <p>Apply permanent company logos and branding to compatible products and components.</p>
            </div>

            <div className={styles.appCard}>
              <div className={styles.icon}><FaCalendarAlt /></div>
              <h3>Batch & Date Marking</h3>
              <p>Mark manufacturing dates, batch numbers, lot numbers, and other production information.</p>
            </div>

            <div className={styles.appCard}>
              <div className={styles.icon}><FaCogs /></div>
              <h3>Component Marking</h3>
              <p>Mark automotive, engineering, electrical, electronic, and industrial components.</p>
            </div>

            <div className={styles.appCard}>
              <div className={styles.icon}><FaGem /></div>
              <h3>Jewellery Marking</h3>
              <p>Create detailed marks, logos, names, identification numbers, and decorative designs on compatible jewellery materials.</p>
            </div>

            <div className={styles.appCard}>
              <div className={styles.icon}><FaTools /></div>
              <h3>Tool & Die Marking</h3>
              <p>Mark part numbers, identification information, logos, and other traceability details on compatible tools and components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MATERIALS */}
      <section className={styles.materialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Compatibility</span>
            <h2>Materials That Can Be Laser Marked</h2>
            <p>
              The materials suitable for laser marking depend on the laser source, wavelength, machine configuration, surface characteristics, and required marking result.
            </p>
          </div>

          <div className={styles.materialsGrid}>
            {materialsList.map((mat, idx) => (
              <div key={idx} className={styles.materialTag}>
                <FaCheck style={{ fontSize: "12px" }} />
                <span>{mat}</span>
              </div>
            ))}
          </div>

          <div className={styles.materialCtaBox}>
            <p>
              Before selecting a machine, it is important to test the actual material and determine the required marking quality.
            </p>
            <Link href="/contactus" className={styles.ctaLink}>
              Need help selecting the right laser for your material? Contact our team.
            </Link>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Sectors</span>
            <h2>Industries We Serve</h2>
            <p>
              Our laser marking solutions can be used across a broad range of manufacturing and industrial applications.
            </p>
          </div>

          <div className={styles.industriesGrid}>
            <div className={styles.industryCard}>
              <h3>Automotive</h3>
              <p>Mark components, identification numbers, codes, and other traceability information.</p>
            </div>

            <div className={styles.industryCard}>
              <h3>Engineering & Manufacturing</h3>
              <p>Mark machine components, tools, hardware, and manufactured parts.</p>
            </div>

            <div className={styles.industryCard}>
              <h3>Electronics</h3>
              <p>Create precise identification marks on suitable electronic components and products.</p>
            </div>

            <div className={styles.industryCard}>
              <h3>Electrical</h3>
              <p>Mark product information, specifications, serial numbers, and other identification details.</p>
            </div>

            <div className={styles.industryCard}>
              <h3>Jewellery</h3>
              <p>Create detailed marks, logos, names, designs, and identification information.</p>
            </div>

            <div className={styles.industryCard}>
              <h3>Pharmaceutical & Medical</h3>
              <p>Use suitable laser marking solutions for product identification and traceability applications.</p>
            </div>

            <div className={styles.industryCard}>
              <h3>Tools, Dies & Moulds</h3>
              <p>Mark part numbers, logos, serial numbers, and other manufacturing information.</p>
            </div>

            <div className={styles.industryCard}>
              <h3>Hardware</h3>
              <p>Create permanent identification and branding on compatible hardware products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HOW IT WORKS */}
      <section className={styles.howItWorksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Process</span>
            <h2>How Does a Laser Marking Machine Work?</h2>
            <p>
              Laser marking uses a focused beam of laser energy to interact with the surface of a material and create a controlled mark.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>1</div>
              <h3>Prepare Product</h3>
              <p>Position the component or product correctly within the machine's marking area.</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNum}>2</div>
              <h3>Create Design</h3>
              <p>Enter required text, logo, serial number, barcode, QR code, or graphic via marking software.</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNum}>3</div>
              <h3>Set Parameters</h3>
              <p>Parameters such as power, speed, frequency, and focus are calibrated for the material.</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNum}>4</div>
              <h3>Apply Laser</h3>
              <p>The focused laser beam follows the programmed marking pattern to mark the surface.</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNum}>5</div>
              <h3>Inspect Result</h3>
              <p>The finished marking is checked for clarity, accuracy, contrast, depth, and readability.</p>
            </div>
          </div>

          <div className={styles.workflowNote}>
            <strong>Automated Integration:</strong> For automated production environments, the system can also be integrated with suitable production-line equipment and identification workflows.
          </div>
        </div>
      </section>

      {/* 10. HOW TO CHOOSE */}
      <section className={styles.howToChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Buying Guide</span>
            <h2>How to Choose the Right Laser Marking Machine?</h2>
            <p>
              Choosing a laser marking machine based only on price or laser power can result in an unsuitable solution. The machine should be selected according to the actual application.
            </p>
          </div>

          <div className={styles.chooseGrid}>
            <div className={styles.chooseCard}>
              <h3><FaCube /> Material</h3>
              <p>Identify the exact material and surface finish that needs to be marked.</p>
            </div>

            <div className={styles.chooseCard}>
              <h3><FaLayerGroup /> Marking Type</h3>
              <p>Determine whether you need surface marking, engraving, etching, colour marking, or another marking effect.</p>
            </div>

            <div className={styles.chooseCard}>
              <h3><FaExpand /> Marking Area</h3>
              <p>Choose a suitable working area based on the size and shape of your products.</p>
            </div>

            <div className={styles.chooseCard}>
              <h3><FaTachometerAlt /> Required Speed</h3>
              <p>Production volume and cycle time should be considered when selecting the laser source and machine configuration.</p>
            </div>

            <div className={styles.chooseCard}>
              <h3><FaSearchPlus /> Marking Detail</h3>
              <p>Fine text, small codes, logos, and detailed graphics may require a suitable laser wavelength and optical configuration.</p>
            </div>

            <div className={styles.chooseCard}>
              <h3><FaIndustry /> Production Volume</h3>
              <p>High-volume production may require automation or online marking capabilities.</p>
            </div>

            <div className={styles.chooseCard}>
              <h3><FaRobot /> Automation</h3>
              <p>Determine whether the machine needs to operate manually, semi-automatically, or as part of an automated production line.</p>
            </div>

            <div className={styles.chooseCard}>
              <h3><FaHeadset /> After-Sales Support</h3>
              <p>Consider installation, training, technical support, maintenance, and spare-part availability when making a long-term machinery investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHY PARATECH INDUSTRIES */}
      <section className={styles.whyParatechSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Why Paratech</span>
            <h2>Why Choose Paratech Industries for Laser Marking Machines?</h2>
            <p>
              Paratech Industries provides laser marking solutions for businesses looking for precision, consistency, and reliable industrial performance.
            </p>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><FaHistory /></div>
              <h3>Industry Experience</h3>
              <p>Established in 2014, Paratech Industries has experience in industrial laser machinery and applications.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><FaLightbulb /></div>
              <h3>Multiple Laser Technologies</h3>
              <p>We offer different laser technologies to address varied marking requirements and materials.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><FaUserTie /></div>
              <h3>Application-Based Guidance</h3>
              <p>Our team can help assess your material and marking requirements before recommending a suitable machine.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><FaBullseye /></div>
              <h3>Precision-Focused Solutions</h3>
              <p>Our machines are designed for applications where marking accuracy, repeatability, and consistency are important.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><FaBuilding /></div>
              <h3>Industrial Applications</h3>
              <p>Our laser marking solutions are suitable for applications across automotive, engineering, electronics, jewellery, pharmaceutical, hardware, and other sectors.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIcon}><FaHeadset /></div>
              <h3>After-Sales Support</h3>
              <p>We support customers with installation assistance, technical guidance, and after-sales service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PRODUCT COMPARISON */}
      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Comparison</span>
            <h2>Which Laser Marking Technology Is Right for You?</h2>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Fiber Laser</th>
                  <th>UV Laser</th>
                  <th>Online Laser</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Metal marking</td>
                  <td>Excellent for compatible metals</td>
                  <td>Suitable for specialised applications</td>
                  <td>Depends on integrated laser source</td>
                </tr>
                <tr>
                  <td>Fine marking</td>
                  <td>Suitable</td>
                  <td>Excellent for many fine-marking applications</td>
                  <td>Depends on configuration</td>
                </tr>
                <tr>
                  <td>QR & barcode marking</td>
                  <td>Suitable</td>
                  <td>Suitable</td>
                  <td>Suitable</td>
                </tr>
                <tr>
                  <td>Serial number marking</td>
                  <td>Suitable</td>
                  <td>Suitable</td>
                  <td>Suitable</td>
                </tr>
                <tr>
                  <td>Production-line marking</td>
                  <td>Can be integrated</td>
                  <td>Can be integrated</td>
                  <td>Designed for production-line use</td>
                </tr>
                <tr>
                  <td>Detailed marking</td>
                  <td>Excellent for many applications</td>
                  <td>Excellent for fine applications</td>
                  <td>Depends on configuration</td>
                </tr>
                <tr>
                  <td>Suitable materials</td>
                  <td>Depends on laser and material</td>
                  <td>Depends on wavelength and material</td>
                  <td>Depends on integrated system</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.compNote}>
            <strong>Important:</strong> Final machine selection should be based on actual material testing and application requirements rather than this general comparison alone.
          </p>
        </div>
      </section>

      {/* 14. FAQ SECTION */}
      <section className={styles.faqSection} id="faqs">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>FAQ'S</span>
            <h2>Frequently Asked Questions About Laser Marking Machines</h2>
          </div>

          <LaserMarkingFaq faqs={faqs} />
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Looking for the Right Laser Marking Machine?</h2>
            <p>
              Whether you need permanent product identification, high-speed production marking, QR and barcode marking, component traceability, or detailed engraving, choosing the right laser technology is essential.
              <br /><br />
              Tell us about your material, product size, marking requirement, production volume, and desired marking result. Our team can help you identify a suitable laser marking solution.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contactus" className={styles.quoteBtn}>
                Get a Quote
              </Link>
              <a href="tel:+919879533323" className={styles.talkBtn}>
                <FaPhoneAlt style={{ marginRight: "8px", fontSize: "14px" }} />
                Talk to a Laser Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
