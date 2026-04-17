import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents clickjacking by disallowing iframe embedding
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Prevents MIME type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controls referrer information sent with requests
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Enables XSS filtering in older browsers
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Controls browser features and APIs
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Enforces HTTPS connections
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "media-src 'self' data: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  // Security headers for all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Disable x-powered-by header to hide tech stack
  poweredByHeader: false,

  // Strict mode for React
  reactStrictMode: true,

  // Image optimization security — restrict external domains
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/tvscrt-prod-auctionimage/**",
      },
      {
        protocol: "https",
        hostname: "tvscertified.in",
        pathname: "/**",
      },
    ],
  },
};


export default nextConfig;
