"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Publication() {
    const collectives = [
        {
            title: "Human Scale Remeasured",
            lines: [
                "Catalogue of the Exhibition at AEDES Architecture Forum, 16 January – 20 May 2021",
                "AEDES, 2021"
            ]
        },
        {
            title: "Smart about Cities :",
            lines: [
                "Voyage dans les villes intelligentes – Entre datapolis et participolis",
                "dir Francis Pisani",
                "UNESCO/ Netexplo observatory, 2020"
            ]
        },
        {
            title: "Vers des villes africaines durables",
            lines: [
                "Collection Points FNAU : Fédération Nationale des Agences d’Urbanisme",
                "Gallimard Alternatives, 2020"
            ]
        }
    ];

    const magazine = [
        {
            title: "“ Eight principles of Spatial Organisation ”",
            lines: [
                "Arts of the Working Class",
                "N° 120 : The New Serenity",
                "x 2038 (The German Pavilion’s Curatorial Project for the Venice 2020 Architecture Biennale)."
            ]
        },
        {
            title: "“ Las lecciones del Pangolín ”",
            link: "https://www.afribuku.com/pangolin-covid19-simbologia-africa-mitos/",
            lines: [
                "AFRIKUBU -Cultura Africana Contemporanea"
            ]
        }
    ];

    const galleryImages = [
        "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.png", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpg", "15.jpg"
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
                        <a href="/images/publication/portrait.png" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/publication/portrait.png"
                                alt="PUBLICATION"
                                width={300}
                                height={300}
                                className="portrait-img"
                            />
                        </a>
                    </div>

                    <div className="bio-wrapper">
                        <h2 className="person-name">Sename Koffi AGBODJINOU</h2>
                        <div className="short-bio-text">
                            <p>Designer x architect x anthropologist by training,</p>
                            <p>Autor, curator, tech- activist &amp; entrepreneur,</p>
                            <p>Founder : L'Africaine d'architecture,</p>
                            <p>Founder, funder, catalyst : WoeLab.</p>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="title-wrapper">
                        <h1 className="page-title">PUBLICATIONS</h1>
                    </div>

                    <div className="content-wrapper">
                        <div className="section">
                            <h3 className="section-title">COLLECTIFS – CATALOGUES</h3>
                            {collectives.map((item, index) => (
                                <div key={index} className="item">
                                    <div className="item-title">{item.title}</div>
                                    {item.lines.map((line, idx) => (
                                        <div key={idx} className="item-line">{line}</div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="section">
                            <h3 className="section-title">MAGAZINE &amp; WEBZINE</h3>
                            {magazine.map((item, index) => (
                                <div key={index} className="item">
                                    {item.link ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-title-link">
                                            {item.title}
                                        </a>
                                    ) : (
                                        <div className="item-title">{item.title}</div>
                                    )}
                                    {item.lines.map((line, idx) => (
                                        <div key={idx} className="item-line">{line}</div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="images-grid-container">
                            {galleryImages.map((filename, index) => (
                                <div key={index} className="grid-item">
                                    <a href={`/images/publication/${filename}`} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={`/images/publication/${filename}`}
                                            className="grid-img"
                                            alt={`Publication ${index + 1}`}
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
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                }

                .portrait-img {
                    width: 100%;
                    height: auto;
                    max-width: 320px;
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

                .section {
                    margin-bottom: 40px;
                }

                .section-title {
                    font-size: 13px;
                    font-weight: 500;
                    margin-bottom: 40px;
                    color: #000;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                }

                .item {
                    margin-bottom: 20px;
                }

                .item-title {
                    font-size: 13px;
                    font-weight: 500;
                    margin-bottom: 8px;
                    color: #000;
                }

                .item-title-link {
                    font-size: 13px;
                    color: #FFDE00;
                    text-decoration: none;
                    display: inline-block;
                    margin-bottom: 8px;
                }
                
                .item-title-link:hover {
                    text-decoration: underline;
                }

                .item-line {
                    font-size: 13px;
                    line-height: 1.6;
                    color: #000;
                    margin-bottom: 3px;
                }
                
                .item {
                    margin-bottom: 30px;
                }
                
                .section {
                    margin-bottom: 60px;
                }
                
                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 5px;
                    width: 100%;
                    margin-top: 30px;
                }
                
                .grid-item { 
                    position: relative; 
                    width: 100%; 
                    padding-bottom: 100%; 
                    background: #ccc; 
                    overflow: hidden; 
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
                }
            `}</style>
        </div>
    )
}
