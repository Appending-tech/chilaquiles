/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID
  }
}

export default nextConfig
