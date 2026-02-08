
"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Collaborations() {
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

            <div className="main-grid">

                <div className="left-panel">
                    <div className="image-wrapper">
                        <Image
                            src="/images/collaboration_portrait.png"
                            alt="Sénamé Koffi AGBODJINOU"
                            width={500}
                            height={500}
                            className="main-image"
                        />
                    </div>

                    <div className="bio-section">
                        <h2 className="person-name">Sénamé Koffi AGBODJINOU</h2>
                        <div className="bio-text">
                            <p>Designer x architect x anthropologist by training,</p>
                            <p>Author, curator, tech- activist & entrepreneur,</p>
                            <p className="no-margin">Founder : L’Africaine d’architecture,</p>
                            <p>Founder, funder, catalyst : HubCity/ WoeLab.</p>
                        </div>
                    </div>
                </div>

                <div className="right-panel">
                    <h1 className="page-title">COLLABORATIONS .............</h1>

                    <div className="content-listing">

                        <div className="listing-item">
                            <p className="partners">/Leila Ben Gacem, Yame Nkgowe, African Crossroads</p>
                            <p><a href="https://youtu.be/lQdGFakaacE" target="_blank" rel="noopener noreferrer"><span className="highlight">The Turtle of the Yellow Sea</span></a></p>
                            <p>2021</p>
                        </div>

                        <div className="listing-item">
                            <p className="partners">/Pierrick Chabi -Pixpole</p>
                            <p>La Grotte de Paul Ayhi</p>
                            <p>2019</p>
                        </div>

                        <div className="listing-item">
                            <p className="partners">/Elom Vince</p>
                            <p><a href="https://youtube.com/playlist?list=PL498F766A8DC2D6D5" target="_blank" rel="noopener noreferrer"><span className="highlight">Aux Impossibles Imminents !</span></a></p>
                            <p className="description">
                                Double triptyque vidéo<br />
                                En une descente incroyablement profond dans le quotidien de la ville de Lomé à partir de figures qui professent l'imminence d'impossibles éthiques et libérateurs, Elom 20ce a conçu et réalisé une fresque urbaine en 6 tableaux : "Blacky", "Mawuto", "Yao", "Kezita", "Alex", "Bertha" dans le cadre du projet curatorial LOMÉ+. Six épisodes de rigoureusement 13 min chacunes mises en espace dans l exposition pour fonctionner ensemble et qui font du clip du 1er morceau de l'album "Amewuga", une unique œuvre d'art documentaire !
                            </p>
                            <p>2019</p>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #BEBEBE;
                    font-family: 'Ubuntu', sans-serif;
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

                .main-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    align-items: start;
                }

                .left-panel {
                    display: flex;
                    flex-direction: column;
                    align-items: center; 
                    margin-top: 50px;
                }

                .right-panel {
                    display: flex;
                    flex-direction: column;
                    padding-top: 320px; /* Aligned with bottom of image */
                }

                .image-wrapper {
                    position: relative;
                    margin-bottom: 30px;
                    width: 320px; 
                    height: 320px;
                }

                .main-image {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    background-color: transparent;
                    filter: grayscale(100%);
                }

                .page-title {
                    font-size: 24px;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    margin: 0 0 60px 0;
                    padding-left: 0; 
                    text-transform: uppercase;
                    text-align: left;
                }

                .bio-section {
                    text-align: center;
                    width: 320px; 
                }

                .person-name {
                    font-size: 11px;
                    font-weight: bold;
                    margin: 0 0 15px 0;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .bio-text p {
                    font-size: 10px;
                    margin: 0 0 2px 0;
                    line-height: 1.4;
                    font-weight: bold;
                }
                
                .bio-text p.no-margin {
                    margin-bottom: 0;
                }

                .content-listing {
                    width: 100%;
                    max-width: 800px;
                    text-align: left;
                }

                .listing-item {
                    margin-bottom: 50px;
                    font-size: 10px;
                    line-height: 1.6;
                    font-weight: bold;
                }
                
                .listing-item p { margin: 0; }
                
                .partners {
                    margin-bottom: 5px !important;
                }
                
                .description {
                    margin-top: 10px !important;
                    margin-bottom: 10px !important;
                    font-weight: normal; 
                    max-width: 600px;
                }

                .highlight {
                    color: #ffff00;
                    font-weight: bold;
                    text-decoration: none;
                    transition: opacity 0.2s;
                }
                
                a:hover .highlight {
                    opacity: 0.7;
                    text-decoration: underline;
                }
                
                a {
                    text-decoration: none;
                    color: inherit;
                }

                @media (max-width: 800px) {
                    .main-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .right-panel {
                        padding-top: 0;
                        align-items: center;
                    }
                    .page-title {
                        text-align: center;
                        margin-bottom: 30px;
                    }
                    .image-wrapper {
                         margin: 0 auto 30px auto;
                    }
                    .bio-section {
                        margin: 0 auto;
                    }
                    .content-listing {
                        text-align: center;
                        max-width: 400px;
                        margin: 0 auto;
                    }
                     .description {
                        text-align: justify;
                    }
                }
            `}</style>
        </div>
    )
}
