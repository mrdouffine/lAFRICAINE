import Image from 'next/image';
import Link from 'next/link';
import { getBiography } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { RichText } from '@/components/RichText';

export default async function Biography() {
    // Récupérer les données depuis Sanity
    const biography = await getBiography();

    // Si pas de données, afficher un message
    if (!biography) {
        return (
            <div className="page-container">
                <div className="nav-icons">
                    <Link href="/" className="nav-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                    </Link>
                    <a href="mailto:contact@lafricaine.org" className="nav-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    </a>
                </div>
                <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <h1>Aucune biographie disponible</h1>
                    <p>Veuillez ajouter du contenu dans Sanity Studio à <a href="/admin" style={{ color: 'blue', textDecoration: 'underline' }}>localhost:3001/admin</a></p>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="nav-icons">
                <Link href="/" className="nav-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                </Link>
                <a href="mailto:contact@lafricaine.org" className="nav-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </a>
            </div>

            <div className="main-layout">
                {/* Colonne Gauche : Photo + Nom + Petite Bio */}
                <div className="left-column">
                    <div className="photo-container">
                        {biography.portrait && (
                            <Image
                                src={urlFor(biography.portrait).width(800).height(800).url()}
                                alt={biography.name || 'Portrait'}
                                width={800}
                                height={800}
                                className="portrait-img"
                            />
                        )}
                    </div>

                    <div className="bio-wrapper">
                        <h2 className="person-name">{biography.name}</h2>
                        <div className="short-bio-text">
                            {biography.shortBio?.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Colonne Droite : Titre + Grande Bio */}
                <div className="right-column">
                    <div className="title-wrapper">
                        <h1 className="page-title">BIOGRAPHY</h1>
                    </div>

                    <div className="content-wrapper">
                        <div className="long-bio-text">
                            {biography.longBio && <RichText content={biography.longBio} />}

                            {biography.bioArchitecture && (
                                <>
                                    <br />
                                    <br />
                                    <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '0.05em' }}>BIO ARCHITECTURE</h3>
                                    <RichText content={biography.bioArchitecture} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #000;
                }

                .page-container {
                    min-height: 100vh;
                    padding: 30px 40px;
                    display: flex;
                    flex-direction: column;
                }

                .nav-icons {
                    display: flex;
                    justify-content: flex-end;
                    gap: 20px;
                    margin-bottom: 40px;
                }

                .nav-link {
                    color: #000;
                    text-decoration: none;
                }

                .main-layout {
                    max-width: 1000px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 320px auto; 
                    gap: 60px; 
                    justify-content: center;
                }

                /* --- Colonne Gauche --- */
                .left-column {
                    display: flex;
                    flex-direction: column;
                    width: 320px;
                }

                .photo-container {
                    width: 320px;
                    height: 370px;
                    background-color: transparent; 
                    margin-bottom: 20px; 
                }

                .portrait-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .bio-wrapper {
                    text-align: center;
                    width: 100%;
                }

                .person-name {
                    font-size: 11px;
                    font-weight: bold;
                    margin: 0 0 15px 0;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .short-bio-text {
                    font-size: 10px;
                    line-height: 1.5;
                    letter-spacing: 0.01em;
                    text-align: center;
                }
                .short-bio-text p { margin: 0; }


                /* --- Colonne Droite --- */
                .right-column {
                    display: flex;
                    flex-direction: column;
                }

                .title-wrapper {
                    height: 370px;
                    display: flex;
                    align-items: flex-end; 
                    padding-bottom: 0px; 
                    margin-bottom: 20px; 
                }

                .page-title {
                    font-size: 24px;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    margin: 0;
                    line-height: 1;
                    transform: translateY(4px); 
                }

                .content-wrapper {
                    margin-top: 50px; 
                    padding-left: 0;
                    max-width: 600px;
                }

                .long-bio-text {
                    font-size: 11px;
                    line-height: 1.4;
                    text-align: justify;
                }
                .long-bio-text p { margin-bottom: 12px; }

                @media (max-width: 900px) {
                    .main-layout {
                        grid-template-columns: 1fr;
                        justify-items: center;
                        gap: 30px;
                    }
                    .title-wrapper {
                        height: auto;
                        margin-top: 20px;
                        margin-bottom: 20px;
                        justify-content: center;
                    }
                    .left-column, .right-column {
                        width: 100%;
                        align-items: center;
                        text-align: center;
                    }
                    .content-wrapper {
                        margin-top: 0;
                        text-align: justify;
                        padding: 0 20px;
                    }
                    .photo-container {
                        height: auto;
                        min-height: 320px;
                    }
                }
            `}</style>
        </div>
    )
}
