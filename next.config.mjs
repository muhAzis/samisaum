import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  ...withPWA({
    dest: 'public',
  }),
};

export default nextConfig;
