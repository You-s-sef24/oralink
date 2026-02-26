/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'oralink.runasp.net',
                pathname: '/Images/**',
            },
        ],
    },
};

export default nextConfig;