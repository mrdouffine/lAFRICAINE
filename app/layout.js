import './globals.css'
import StyledJsxRegistry from './registry'

const SITE_URL = 'https://sename.lafricaine.org'
const DESCRIPTION = 'Site officiel de Sénamé Koffi Agbodjinou, architecte, anthropologue, designer, activiste technologique et entrepreneur social togolais. Fondateur de L’Africaine d’architecture et de HubCity / WoeLab, père de l’approche néovernaculaire.'

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Sénamé Koffi Agbodjinou | Architecte & Anthropologue',
        template: '%s | Sénamé Koffi Agbodjinou',
    },
    description: DESCRIPTION,
    keywords: [
        'Sénamé Koffi Agbodjinou', 'Sename Koffi', 'Sename', 'Agbodjinou',
        'L’Africaine d’architecture', 'WoeLab', 'HubCity', 'néovernaculaire',
        'architecte togolais', 'anthropologue', 'smart city africaine', 'Lomé', 'Togo',
    ],
    authors: [{ name: 'Sénamé Koffi Agbodjinou', url: SITE_URL }],
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: SITE_URL,
        siteName: 'Sénamé Koffi Agbodjinou',
        title: 'Sénamé Koffi Agbodjinou | Architecte & Anthropologue',
        description: DESCRIPTION,
        images: [{ url: '/images/bio_portrait.png', alt: 'Sénamé Koffi Agbodjinou' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sename__',
        creator: '@sename__',
        title: 'Sénamé Koffi Agbodjinou | Architecte & Anthropologue',
        description: DESCRIPTION,
        images: ['/images/bio_portrait.png'],
    },
    robots: { index: true, follow: true },
    // Code de vérification Google Search Console (balise meta), défini dans .env.local
    verification: process.env.GOOGLE_SITE_VERIFICATION
        ? { google: process.env.GOOGLE_SITE_VERIFICATION }
        : undefined,
}

// Données structurées : aident Google à identifier la personne et à afficher sa fiche.
const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sénamé Koffi Agbodjinou',
    alternateName: ['Sename Koffi Agbodjinou', 'Sename Koffi A.', 'Sénamé Koffi'],
    url: SITE_URL,
    image: `${SITE_URL}/images/bio_portrait.png`,
    birthDate: '1980',
    birthPlace: { '@type': 'Place', name: 'Lomé, Togo' },
    nationality: { '@type': 'Country', name: 'Togo' },
    jobTitle: ['Architecte', 'Anthropologue', 'Designer', 'Entrepreneur social'],
    description: DESCRIPTION,
    founder: [
        { '@type': 'Organization', name: 'L’Africaine d’architecture', url: 'https://www.lafricainedarchitecture.com/' },
        { '@type': 'Organization', name: 'WoeLab' },
        { '@type': 'Organization', name: 'HubCity', url: 'https://hubcity.africa/' },
    ],
    alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'École des Hautes Études en Sciences Sociales (EHESS)' },
        { '@type': 'CollegeOrUniversity', name: 'ENSA Paris-La Villette' },
        { '@type': 'CollegeOrUniversity', name: 'École Spéciale d’Architecture' },
    ],
    award: [
        'Les Grandes Figures de l’Architecture Africaine Contemporaine — Forbes Afrique, 2026',
        'Officier de l’Ordre National du Mérite de la République Togolaise',
        'Netexplo Award — UNESCO, 2015',
        'Global Fab Awards — Fab Foundation, 2014',
        'Best Mission Concept — NASA International Space Apps Challenge, 2013',
    ],
    sameAs: [
        'https://fr.wikipedia.org/wiki/S%C3%A9nam%C3%A9_Koffi_Agbodjinou',
        'https://www.linkedin.com/in/sename-koffi-a-2a5432242/',
        'https://twitter.com/sename__',
        'https://www.tiktok.com/@sename_koffi_a',
        'https://www.weizenbaum-institut.de/en/portrait/p/sename-koffi-agbodjinou/',
        'https://www.ashoka.org/en-us/fellow/sename-agbodjinou',
    ],
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
            </head>
            <body>
                <StyledJsxRegistry>{children}</StyledJsxRegistry>
            </body>
        </html>
    )
}
