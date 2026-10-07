const SITE_URL = 'https://sename.lafricaine.org'

// Pages publiques du site, par ordre d'importance.
const routes = [
    ['', 1.0],
    ['/biography', 0.9],
    ['/lectures', 0.8],
    ['/press', 0.8],
    ['/publication', 0.8],
    ['/edition', 0.8],
    ['/architecture', 0.8],
    ['/honor', 0.7],
    ['/academic', 0.7],
    ['/curating', 0.7],
    ['/consulting', 0.7],
    ['/board', 0.7],
    ['/tech', 0.7],
    ['/video', 0.6],
    ['/audio', 0.6],
    ['/photo', 0.6],
    ['/collaboration', 0.6],
    ['/commitment', 0.6],
    ['/quotes', 0.5],
    ['/lessons', 0.5],
    ['/invest', 0.5],
    ['/2025', 0.5],
    ['/contact', 0.5],
]

export default function sitemap() {
    const lastModified = new Date()
    return routes.map(([path, priority]) => ({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: 'monthly',
        priority,
    }))
}
