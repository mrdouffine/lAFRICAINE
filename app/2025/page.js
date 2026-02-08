"use client";
import Link from 'next/link';

export default function Page2025() {
    return (
        <div className="contact-page">
            <div className="nav-icons">
                <Link href="/" className="nav-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                </Link>
                <a href="mailto:contact@lafricaine.org" className="nav-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </a>
            </div>

            <div className="main-layout" style={{ textAlign: 'center', height: '60vh', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <h1 className="contact-text">2025</h1>
                <p style={{ fontSize: '12px', marginTop: '20px' }}>
                    Le projet 2025 est accessible via le lien suivant :
                </p>
                <a href="http://2025.pro" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', fontWeight: 'bold', color: '#000', marginTop: '10px', textDecoration: 'underline' }}>
                    VISITER 2025.PRO
                </a>
            </div>

            <style jsx global>{`
                body { margin: 0; padding: 0; background-color: #ffffff; font-family: Arial, Helvetica, sans-serif; color: #000; }
                .contact-page { min-height: 100vh; padding: 30px 40px; display: flex; flex-direction: column; position: relative; }
                .nav-icons { display: flex; justify-content: flex-end; gap: 15px; margin-bottom: 40px; }
                .nav-link { color: #000; text-decoration: none; }
                .contact-text { font-size: 24px; font-weight: 500; letter-spacing: 0.1em; margin: 0; }
            `}</style>
        </div>
    )
}
