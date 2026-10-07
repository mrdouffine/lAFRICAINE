// Doublon d'une autre page : exclu des moteurs de recherche.
export const metadata = {
    robots: { index: false, follow: true },
    alternates: { canonical: "/biography" },
};

export default function Layout({ children }) {
    return children
}
