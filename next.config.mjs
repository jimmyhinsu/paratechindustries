/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    const legacyProductSlugs = [
      "co2lasercuttingmachine",
      "co2laserengravingmachine",
      "customiselasermachine",
      "dengraving",
      "dmarking",
      "fiberlasercuttingmachine",
      "fiberlasermarkingmachine",
      "fiberlaserweldingmachine",
      "handheldfiberlaserweldingmachine",
      "jewellerycuttingmachine",
      "jewellerysolderingmachine",
      "onlinelasermarkingmachine",
      "sheetpipelasercuttingmachine",
      "uvlasermarkingmachine",
    ];
    return legacyProductSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/products/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
