import './globals.css'

export const metadata = {
    title: 'Sénamé Koffi Agbodjinou | Architect & Anthropologist',
    description: 'Official website of Sénamé Koffi Agbodjinou, Founder of L’Africaine d’architecture and WoeLabs.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
}
