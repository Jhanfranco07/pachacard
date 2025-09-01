/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',   // si vas a permitir ese host
      'images.unsplash.com',
      'res.cloudinary.com',
    ],
    // O remotePatterns si prefieres:
    // remotePatterns: [{ protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' }],
  },
};

export default nextConfig;
