import { client } from './client'

// Récupérer la biographie
export async function getBiography() {
    return client.fetch(`*[_type == "biography"][0]{
    _id,
    name,
    portrait,
    shortBio,
    longBio,
    bioArchitecture
  }`)
}

// Récupérer toutes les collaborations
export async function getCollaborations() {
    return client.fetch(`*[_type == "collaboration"] | order(order asc){
    _id,
    title,
    description,
    image,
    year,
    category,
    order
  }`)
}

// Récupérer toutes les galeries
export async function getGalleries(category = null) {
    const filter = category ? `*[_type == "gallery" && category == "${category}"]` : `*[_type == "gallery"]`
    return client.fetch(`${filter} | order(order asc){
    _id,
    title,
    slug,
    description,
    images,
    category,
    order
  }`)
}

// Récupérer une galerie spécifique par slug
export async function getGalleryBySlug(slug) {
    return client.fetch(`*[_type == "gallery" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    images,
    category
  }`, { slug })
}

// Récupérer toutes les publications
export async function getPublications() {
    return client.fetch(`*[_type == "publication"] | order(order asc){
    _id,
    title,
    subtitle,
    description,
    coverImage,
    year,
    publisher,
    type,
    link,
    order
  }`)
}

// Récupérer toutes les citations
export async function getQuotes(featured = null) {
    const filter = featured !== null
        ? `*[_type == "quote" && featured == ${featured}]`
        : `*[_type == "quote"]`
    return client.fetch(`${filter} | order(order asc){
    _id,
    text,
    author,
    source,
    year,
    category,
    featured,
    order
  }`)
}

// Récupérer les paramètres du site
export async function getSiteSettings() {
    return client.fetch(`*[_type == "siteSettings"][0]{
    _id,
    title,
    description,
    email,
    logo,
    socialLinks
  }`)
}
