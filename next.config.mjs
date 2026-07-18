/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve modern formats and let Next optimize/resize for faster mobile loading.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
