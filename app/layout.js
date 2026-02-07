import './globals.css'

export const metadata = {
    title: 'MENU – Sename',
    description: 'Menu Sename',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    )
}
