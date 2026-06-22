import markingImg from "@/assests/images/lasermarkingmachine.jpg";
import weldingImg from "@/assests/images/handheldfiberlaserweldingmachine.jpeg";
import jewelleryImg from "@/assests/images/jsm.jpeg";

export const blogImageMap = {
  "lasermarkingmachine.jpg": markingImg,
  "handheldfiberlaserweldingmachine.jpeg": weldingImg,
  "jsm.jpeg": jewelleryImg
};

export const blogs = [
  {
    id: 1,
    slug: "evolution-of-fiber-laser-marking",
    title: "The Evolution of Fiber Laser Marking in Modern Manufacturing",
    category: "Technology",
    date: "June 18, 2026",
    excerpt: "Discover how Fiber Laser Marking technology is transforming traceability, branding, and durability standards across industries from automotive to electronics.",
    image: markingImg,
    readTime: "5 min read",
    author: "Technical Specialist",
    content: [
      {
        type: "paragraph",
        text: "In the fast-paced world of modern manufacturing, permanent identification and traceability have become crucial. Whether it is a tiny microchip inside a smartphone, a medical implant, or an aerospace component, every part requires high-resolution markings that can withstand harsh environments. Fiber laser marking has emerged as the gold standard for these demanding requirements."
      },
      {
        type: "heading",
        text: "What is Fiber Laser Marking?"
      },
      {
        type: "paragraph",
        text: "Fiber laser marking is a non-contact method that uses a high-intensity laser beam generated from an optical fiber doped with rare-earth elements. The laser beam alters the surface properties of the material, creating a high-contrast, indelible mark. Unlike traditional ink-jet printing or mechanical engraving, fiber lasers do not rely on consumables and do not damage the structural integrity of the workpiece."
      },
      {
        type: "heading",
        text: "Key Benefits of Fiber Lasers in Manufacturing"
      },
      {
        type: "list",
        items: [
          "Extreme Precision & Contrast: Ideal for 2D barcodes, QR codes, serialized numbers, and complex brand logos.",
          "Zero Consumables: Drastically reduces operational costs and environmental impact by eliminating inks, solvents, and drill bits.",
          "High Processing Speed: Enables high-speed automated markings inline on active assembly conveyors.",
          "Unrivaled Durability: Marks are resistant to heat, chemical corrosion, acids, and physical wear."
        ]
      },
      {
        type: "heading",
        text: "Industrial Applications"
      },
      {
        type: "paragraph",
        text: "From engraving serial numbers on metal gears in the automotive sector, to creating sterile UDI markings on medical instruments, and adding brand identifiers to electronics and consumer products, fiber laser marking machines provide unparalleled flexibility. At Paratech Industries, we design customized solutions that integrate seamlessly into existing production lines, elevating manufacturing efficiency to new heights."
      }
    ]
  },
  {
    id: 2,
    slug: "handheld-laser-welding-vs-traditional-welding",
    title: "Why Handheld Laser Welding is Replacing Traditional TIG/MIG Welding",
    category: "Welding",
    date: "June 10, 2026",
    excerpt: "Traditional welding methods demand high skill and time. Learn why handheld fiber laser welding is dominating the market with speed, strength, and ease of use.",
    image: weldingImg,
    readTime: "6 min read",
    author: "Engineering Lead",
    content: [
      {
        type: "paragraph",
        text: "Welding has always been a skilled trade requiring years of training and experience. However, the manufacturing sector has been facing a shortage of skilled welders globally. Enter the Handheld Fiber Laser Welding Machine—a revolutionary tool that is transforming how metal fabrication is done by making welding faster, stronger, and significantly easier to learn."
      },
      {
        type: "heading",
        text: "How Handheld Laser Welding Works"
      },
      {
        type: "paragraph",
        text: "Unlike traditional TIG (Tungsten Inert Gas) or MIG (Metal Inert Gas) welding which uses an electric arc to melt metals, laser welding utilizes a highly focused, concentrated light beam. The handheld gun allows the operator to guide the beam precisely along the joint. The energy density is so high that metals fuse instantly, producing a clean, narrow weld seam."
      },
      {
        type: "heading",
        text: "Comparing Laser Welding vs. TIG/MIG"
      },
      {
        type: "paragraph",
        text: "Here is why manufacturers are making the transition to handheld fiber laser welding systems:"
      },
      {
        type: "list",
        items: [
          "4x to 10x Faster: Laser welding speeds are significantly higher than traditional TIG, increasing factory throughput.",
          "Minimal Heat Affected Zone (HAZ): Reduces thermal distortion, warping, and discoloration of thin metals like stainless steel and aluminum.",
          "Low Skill Requirement: An amateur operator can learn to make high-quality welds within hours, compared to months of TIG training.",
          "Virtually No Post-Weld Cleanup: The resulting welds are extremely clean, eliminating the need for grinding, polishing, or chemical treatments."
        ]
      },
      {
        type: "heading",
        text: "Is it Safe and Strong?"
      },
      {
        type: "paragraph",
        text: "Absolutely. The tensile strength of laser welds is often superior to traditional arc welds because of the deep penetration and consistent energy delivery. Safety features are also deeply integrated into our machines, including automatic laser-off functions when the gun is not in contact with the workpiece, and mandatory protective eyewear. For metal fabricators looking to boost productivity and reduce labor dependency, handheld laser welding is the ultimate future."
      }
    ]
  },
  {
    id: 3,
    slug: "laser-machines-for-jewellery-manufacturing",
    title: "Selecting the Right Laser Machine for Jewellery Designing & Manufacturing",
    category: "Jewellery",
    date: "June 02, 2026",
    excerpt: "Surat is the global hub for diamonds and jewellery. Read our guide on selecting laser cutting, engraving, and soldering machines for precious metals.",
    image: jewelleryImg,
    readTime: "4 min read",
    author: "Product Manager",
    content: [
      {
        type: "paragraph",
        text: "The jewellery industry relies heavily on intricate designs, fine details, and absolute precision. Traditionally, processes like cutting, engraving, and soldering precious metals like gold, silver, and platinum were performed by hand. This was not only time-consuming but also resulted in material loss. Modern laser technology has completely modernized jewellery workshops."
      },
      {
        type: "heading",
        text: "Laser Applications in Jewellery"
      },
      {
        type: "paragraph",
        text: "Laser machines are utilized in three primary areas of jewellery manufacturing, each requiring specialized configurations:"
      },
      {
        type: "list",
        items: [
          "Laser Soldering (Spot Welding): Used for resizing rings, repairing chains, and mounting gemstones without removing the stone or damaging surrounding heat-sensitive materials.",
          "Laser Engraving: Allows hallmark stamping, serial numbers, personalized text, and intricate patterns on inside or outside surfaces of rings and bangles.",
          "Laser Cutting: High-precision cutting of gold and silver sheets into complex designer shapes with minimal kerf width, ensuring maximum metal recovery."
        ]
      },
      {
        type: "heading",
        text: "Key Considerations when Buying"
      },
      {
        type: "paragraph",
        text: "Precious metals are highly reflective, especially gold, silver, and copper. Standard fiber lasers might suffer from back-reflection damage. Therefore, selecting a jewellery laser soldering or cutting machine designed with advanced reflection protection and specific wavelengths is critical. At Paratech Industries, we offer specialized Jewellery Laser Cutting and Soldering machines tailored specifically for the diamond and jewellery hubs of Surat and international exporters, ensuring zero gold loss and micro-precision finishes."
      }
    ]
  }
];
