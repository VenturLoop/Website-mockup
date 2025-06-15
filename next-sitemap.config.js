/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://venturloop.com/', // Ensure this is the correct production URL
  generateRobotsTxt: true, // Generates a robots.txt file
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // Add disallow rules if needed, e.g., for API routes or specific non-public pages
      // { userAgent: '*', disallow: '/api/' },
    ],
    additionalSitemaps: [
      // If you have other sitemaps, e.g., for a blog on a subdomain
      // 'https://example.com/server-sitemap.xml',
    ],
  },
  // Optional: Add paths to exclude from the sitemap
  exclude: [
    '/api/*', // Exclude all API routes
    '/auth/*', // Exclude authentication callback pages or similar
    // '/server-sitemap.xml', // if you have a server-side sitemap you want to exclude from the main one
  ],
  // Optional: For dynamic pages, you might need a custom transform function
  // See next-sitemap documentation for more advanced configurations.
};
