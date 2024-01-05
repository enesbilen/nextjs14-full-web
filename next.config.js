/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.instagram.com',
            'instagram.com',
            'www.facebook.com',
            'facebook.com',
            'images.pexels.com', 
            'images.unsplash.com', 
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '^(www\\.)?(instagram|facebook)\\.com',
            },
            {
                protocol: 'https',
                hostname: '^(www\\.)?(pexels)\\.com',
            },
            {
                protocol: 'https',
                hostname: '^(www\\.)?(unsplash)\\.com',
            },
        ],
    },
};

module.exports = nextConfig;
