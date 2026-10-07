import { readdirSync } from 'node:fs'
import path from 'node:path'

// Anciennes URLs d'images WordPress (/wp-content/uploads/AAAA/MM/fichier.jpg) :
// redirige vers la même image servie depuis public/images, pour ne pas casser
// les liens externes ni le référencement des images.

let index = null

function buildIndex() {
    const map = new Map()
    const root = path.join(process.cwd(), 'public', 'images')
    const walk = (dir) => {
        for (const entry of readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name)
            if (entry.isDirectory()) walk(full)
            else {
                const url = '/' + path.relative(path.join(process.cwd(), 'public'), full).split(path.sep).join('/')
                const name = entry.name.toLowerCase()
                if (!map.has(name)) map.set(name, url)
                const base = stripVariant(name)
                if (!map.has(base)) map.set(base, url)
            }
        }
    }
    walk(root)
    return map
}

// "photo-1000x800.jpg" et "photo-scaled.jpg" désignent la même image que "photo.jpg"
function stripVariant(name) {
    return name.replace(/-\d+x\d+(?=\.[a-z0-9]+$)/, '').replace(/-scaled(?=\.[a-z0-9]+$)/, '')
}

export function GET(_request, { params }) {
    index ??= buildIndex()
    return params.then(({ path: parts }) => {
        const name = decodeURIComponent(parts[parts.length - 1] || '').toLowerCase()
        const target = index.get(name) || index.get(stripVariant(name))
        if (!target) return new Response('Not found', { status: 404 })
        // Location relative : reste sur le domaine et le protocole d'origine derrière nginx
        return new Response(null, { status: 301, headers: { Location: target } })
    })
}
