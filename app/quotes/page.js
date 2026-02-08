"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Quotes() {
    const quotes = [
        {
            text: ["Au commerce des idées, il y a les produits en vitrine… et d’autres qu’il faut aller chercher au fond de la boutique"]
        },
        {
            text: [
                "Où je suis être quelqu’un,",
                "Faire quelque chose de passer,",
                "Travailler à mourir quelque part …"
            ]
        },
        {
            text: ["Faut le faire l’tour des choses pour comprendre qu’elles sont pas au centre"]
        },
        {
            text: ["Le propre des époques quelque peu troublées est, du milieu de l’antagonisme des principes, de provoquer parfois quelque contradiction étonnamment heureuse."]
        },
        {
            text: ["Le monde est désormais divisé en deux. Ceux qui réussissent et ceux qui résistent."]
        },
        {
            text: ["Qui contrôle le futur contrôle le présent."]
        }
    ];

    return (
        <div className="page-container">
            <div className="nav-icons">
                <Link href="/menu" className="nav-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                </Link>
                <Link href="/contact" className="nav-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </Link>
            </div>

            <div className="main-layout">
                <div className="left-column">
                    <div className="photo-container">
                        <Image
                            src="/images/quotes_portrait.png"
                            alt="QUOTES"
                            width={1024}
                            height={1024}
                            className="portrait-img"
                        />
                    </div>

                    <div className="bio-wrapper">
                        <h2 className="person-name">Sename Koffi AGBODJINOU</h2>
                        <div className="short-bio-text">
                            <p>Designer x architect x anthropologist by training,</p>
                            <p>Autor, curator, tech- activist &amp; entrepreneur,</p>
                            <p>Founder : L'Africaine d'architecture,</p>
                            <p>Founder, funder, catalyst : HubCity/ WoeLab.</p>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="title-wrapper">
                        <h1 className="page-title">QUOTES</h1>
                    </div>

                    <div className="content-wrapper">
                        <div className="quotes-list">
                            {quotes.map((quote, index) => (
                                <div key={index}>
                                    <div className="quote-item">
                                        <div className="quote-mark">«</div>
                                        <div className="quote-content">
                                            {quote.text.map((line, idx) => (
                                                <p key={idx}>{line}</p>
                                            ))}
                                        </div>
                                        <div className="quote-mark">»</div>
                                    </div>
                                    {index < quotes.length - 1 && (
                                        <div className="separator">...</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                    font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
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
                    max-width: 1100px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 320px minmax(300px, 600px); 
                    gap: 80px; 
                    justify-content: center;
                }

                .left-column {
                    display: flex;
                    flex-direction: column;
                    width: 320px;
                }

                .photo-container {
                    width: 320px;
                    height: 380px; 
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
                    text-align: center;
                }

                .short-bio-text {
                    font-size: 8.25px;
                    line-height: 1.5;
                    letter-spacing: 0.01em;
                    text-align: center;
                }
                .short-bio-text p { margin: 0; }

                .right-column {
                    display: flex;
                    flex-direction: column;
                }

                .title-wrapper {
                    height: 380px; 
                    display: flex;
                    align-items: flex-end; 
                    padding-bottom: 0px; 
                    margin-bottom: 20px; 
                }

                .page-title {
                    font-size: 30px;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    margin: 0;
                    line-height: 1;
                    transform: translateY(5px); 
                    text-transform: uppercase;
                }

                .content-wrapper {
                    margin-top: 50px; 
                    padding-left: 0;
                }

                .quotes-list {
                    margin-bottom: 60px;
                }

                .quote-item {
                    margin-bottom: 10px;
                    font-style: italic;
                    font-size: 13px;
                    line-height: 1.6;
                }

                .quote-mark {
                    margin: 15px 0;
                    font-style: normal;
                    font-size: 14px;
                }

                .quote-content p {
                    margin: 0;
                    text-align: left;
                }

                .separator {
                    text-align: left;
                    padding: 30px 0;
                    font-size: 13px;
                    color: #000;
                }

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
                        text-align: center;
                    }
                    .left-column, .right-column {
                        width: 100%;
                        align-items: center;
                    }
                    .content-wrapper {
                        margin-top: 0;
                        padding: 0 10px;
                    }
                    .photo-container {
                        height: auto;
                        min-height: 320px;
                    }
                    .separator {
                        padding: 30px 0;
                    }
                    .page-title {
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    )
}
