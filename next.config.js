/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        testKey: 'test'
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
