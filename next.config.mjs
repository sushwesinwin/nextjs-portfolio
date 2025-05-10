/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/subdir',
    trailingSlash: true, // helps with static exports
};

export default nextConfig;
