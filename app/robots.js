export default function robots() {
    return {
        rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] }],
        sitemap: 'https://sename.lafricaine.org/sitemap.xml',
        host: 'https://sename.lafricaine.org',
    }
}
