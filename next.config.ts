import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
};

export default nextConfig;
