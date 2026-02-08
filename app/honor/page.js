"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Honor() {
    const prix = [
        {
            text: "AFRICA’S 50 DIGITAL CHAMPIONS",
            detail: "Africa Digital Festival – 2020"
        },
        {
            text: "Best in Tech",
            detail: <>ESSENCE Magazine very first ”<a href="https://www.essence.com/feature/best-in-africa/" target="_blank" rel="noopener noreferrer" className="highlight-link">Africa List</a>” – 2020</>
        },
        {
            text: "TOP Africa Innovators",
            detail: <>QUARTZ <a href="https://qz.com/africa/1700312/quartz-africa-innovators-2019/?fbclid=IwAR1APNJjgkhZ9rdggHN9yVHt7hDEDzyA6vmZyqXfis8UVeIiJVO_wuMetsQ" target="_blank" rel="noopener noreferrer" className="highlight-link">2019 cohort</a> : “leading the change for Africa’s future” – 2019</>
        },
        {
            text: "African Leadership Awards",
            detail: "Paris, 2018."
        },
        {
            text: "NETEXPLO AWARDS",
            detail: "Netexplo Observatoire de l’Innovation. UNESCO- Paris, 2015"
        },
        {
            text: "Global Fab Awards",
            detail: "Fab Foundation : FAB 10 – Barcelone, 2014."
        },
        {
            text: "Best Mission Concept”",
            detail: "NASA International Space Apps Challenge – 2013."
        },
        {
            text: "Prix “Coeur d’Immobilier”",
            detail: <>Première place Concours pour le projet de la Maternité de Gao/Tchad <br /> – 2010</>
        }
    ];

    const distinctions = [
        {
            detail: "Officier de l’Ordre National du Mérite de la République Togolaise – 2018."
        }
    ];

    const galleryImages = [
        "1.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.png", "7.jpg", "8.jpg", "9.png"
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
                            src="/images/honor_portrait.png"
                            alt="HONOUR . AWARDS"
                            width={1024}
                            height={1024}
                            className="portrait-img"
                        />
                    </div>

                    <div className="bio-wrapper">
                        <h2 className="person-name">Sename Koffi AGBODJINOU</h2>
                        <div className="short-bio-text">
                            <p>Designer x architect x anthropologist by training,</p>
                            <p>Author, curator, tech- activist &amp; entrepreneur,</p>
                            <p>Founder : L'Africaine d'architecture,</p>
                            <p>Founder, funder, catalyst : HubCity/ WoeLab.</p>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="title-wrapper">
                        <h1 className="page-title">HONOUR . AWARDS</h1>
                    </div>

                    <div className="content-wrapper">
                        <div className="section">
                            <h3 className="section-title">PRIX</h3>
                            <div className="items-list">
                                {prix.map((item, index) => (
                                    <div key={index} className="award-item">
                                        {item.text && <div className="item-main-text">{item.text}</div>}
                                        <div className="item-detail-text">{item.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="section">
                            <h3 className="section-title">DISTINCTIONS</h3>
                            <div className="items-list">
                                {distinctions.map((item, index) => (
                                    <div key={index} className="award-item">
                                        <div className="item-detail-text">{item.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="images-grid-container">
                            {galleryImages.map((filename, index) => (
                                <div key={index} className="grid-item">
                                    <a href={`/images/honor/${filename}`} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={`/images/honor/${filename}`}
                                            className="grid-img"
                                            alt={`Honor ${index + 1}`}
                                            loading="lazy"
                                        />
                                    </a>
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
                    background-color: #b1b1b1;
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
                }

                .section {
                    margin-bottom: 60px;
                }

                .section-title {
                    font-size: 13px;
                    font-weight: 500;
                    margin-bottom: 40px;
                    color: #000;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .award-item {
                    margin-bottom: 30px;
                }

                .item-main-text {
                    font-size: 13px;
                    font-weight: 500;
                    margin-bottom: 5px;
                    color: #000;
                    text-transform: uppercase;
                }

                .item-detail-text {
                    font-size: 13px;
                    line-height: 1.6;
                    color: #000;
                }

                .highlight-link {
                    color: #FFDF00;
                    text-decoration: none;
                }

                .highlight-link:hover {
                    text-decoration: underline;
                }
                
                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 5px;
                    width: 100%;
                    margin-top: 30px;
                }
                
                .grid-item { 
                    position: relative; 
                    width: 100%; 
                    padding-bottom: 75%; 
                    background: #ccc; 
                    overflow: hidden; 
                    cursor: pointer;
                }

                /* Row 1: 4 images (3 columns each) */
                .grid-item:nth-child(-n+4) {
                    grid-column: span 3;
                }

                /* Row 2: 3 images (4 columns each) */
                .grid-item:nth-child(n+5):nth-child(-n+7) {
                    grid-column: span 4;
                }

                /* Row 3: 2 images (6 columns each) */
                .grid-item:nth-child(n+8) {
                    grid-column: span 6;
                }
                
                .grid-img { 
                    position: absolute; 
                    top: 0; 
                    left: 0; 
                    width: 100%; 
                    height: 100%; 
                    object-fit: cover; 
                    transition: transform 0.3s ease;
                }
                
                .grid-item:hover .grid-img {
                    transform: scale(1.05);
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
                }
            `}</style>
        </div>
    )
}
