/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "image.tmdb.org",   // if you're using TMDB images
      "your-domain.com"   // add more if needed
    ],
  },
};

export default nextConfig;
