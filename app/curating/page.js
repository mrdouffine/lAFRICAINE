
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Curating() {
    const galleryImages = [
        { id: 1, src: '/images/curating/1-10-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/1-10-1000x800.jpg' },
        { id: 2, src: '/images/curating/2-1-2-1080x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/2-1-2-1080x800.jpg' },
        { id: 3, src: '/images/curating/2-10.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/2-10.jpg' },
        { id: 4, src: '/images/curating/3-8-1400x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/3-8-1400x800.jpg' },
        { id: 5, src: '/images/curating/4-8-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/4-8-1000x800.jpg' },
        { id: 6, src: '/images/curating/5-9-1080x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/5-9-1080x800.jpg' },
        { id: 7, src: '/images/curating/6-4-1200x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/6-4-1200x800.jpg' },
        { id: 8, src: '/images/curating/7-1-3-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/7-1-3-1000x800.jpg' },
        { id: 9, src: '/images/curating/signal-2022-02-08-101947_002-1-1400x800.jpeg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/02/signal-2022-02-08-101947_002-1-1400x800.jpeg' },
        { id: 10, src: '/images/curating/8-5-1000x483.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/8-5-1000x483.png' },
        { id: 11, src: '/images/curating/9-5.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/9-5.png' },
        { id: 12, src: '/images/curating/10-4.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/10-4.png' },
        { id: 13, src: '/images/curating/11-7-1000x800.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/11-7-1000x800.png' },
        { id: 14, src: '/images/curating/12-3.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/12-3.png' },
        { id: 15, src: '/images/curating/13-2.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/13-2.png' },
        { id: 16, src: '/images/curating/14-2-1400x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/14-2-1400x800.jpg' },
        { id: 17, src: '/images/curating/Capture-decran-2020-07-21-a-13.32.11-1.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2020-07-21-a%CC%80-13.32.11-1.png' },
        { id: 18, src: '/images/curating/Capture-decran-2021-02-09-a-11.42.42-1.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-02-09-a%CC%80-11.42.42-1.png' },
        { id: 19, src: '/images/curating/Capture-decran-2021-02-09-a-11.45.54-1.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-02-09-a%CC%80-11.45.54-1.png' },
        { id: 20, src: '/images/curating/Capture-decran-2021-02-09-a-11.48.36-1.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-02-09-a%CC%80-11.48.36-1.png' },
        { id: 21, src: '/images/curating/Capture-decran-2021-02-09-a-11.49.52-1.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-02-09-a%CC%80-11.49.52-1.png' },
        { id: 22, src: '/images/curating/IMG_3038-1-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3038-1-1000x800.jpg' },
        { id: 23, src: '/images/curating/poster_Communalis-1.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/02/poster_Communalis-1.png' },
    ];

    const sections = [
        {
            title: "COMMISSARIAT",
            items: [
                {
                    heading: "Communalis",
                    content: "Commissariat et scénographie\nParlement Européen\nBruxelles, Février 2021"
                },
                {
                    heading: "The Currency Lab",
                    content: "co- Commissariat (with Elom 20ce, Gregor Kasper)\nLomé, WoeLabs Prime, 2021-"
                },
                {
                    heading: "LOME+ : passé, présent, futur,…",
                    content: "Commissariat et scénographie\nVirtual Exhibition, 2020."
                },
                {
                    heading: "#LowHighTech Design Xperience,",
                    content: "Direction Artistique (with Marcel Odenbach)\nHochschule Pforzheim, 2018."
                }
            ]
        },
        {
            title: "EXPOSANT",
            items: [
                {
                    heading: "Principes de la Cosmoarchitecture",
                    content: "Biennale d'Architecture de Venise 2020/21\nExpo Centrale, Venise, 2021"
                },
                {
                    heading: "N'GOLÁ Festival",
                    content: "Biennial of Arts and Culture in São Tomé e Príncipe, 2019."
                },
                {
                    heading: "HubCity,",
                    content: "'Digital Imaginaries :Africa(s) in Production'\nZKM, Centre d'Art et de Technologies des Médias\nKarlsruhe, 2018."
                },
                {
                    heading: "New York 3D PRINT SHOW",
                    content: "NYC, 2015."
                }
            ]
        },
        {
            title: "CONTRIBUTIONS",
            items: [
                {
                    heading: <><a href="http://postgrowth.art/" target="_blank" rel="noopener noreferrer" className="highlight-link">Post Growth Art</a></>,
                    content: "Collectif Disnovation (Nicolas Maigret & Maria Roszkowska)\nMuseum für Gestaltung Zürich (DA Z Digital Art Festival 2020)\nZurich, 2020"
                },
                {
                    heading: "iMAL Art Center for Digital Cultures & Technology",
                    content: "Bruxelles, 2020-2021"
                },
                {
                    heading: <><a href="https://www.dbz.de/news/dbz_2038_3499716.html" target="_blank" rel="noopener noreferrer" className="highlight-link">2038. Die Neue Gelassenheit – Geschichte</a></>,
                    content: "German Pavilion\nBiennale d'Architecture de Venise 2020/21\nVenise, 2021"
                },
                {
                    heading: "'Readings From Below'",
                    content: "The Hubs\nTimes Art Center Berlin\nBerlin, 2020"
                }
            ]
        }
    ];

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
                <div className="left-column">
                    <div className="photo-container">
                        <Image
                            src="/images/curating_portrait.png"
                            alt="CURATING"
                            width={800}
                            height={800}
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
                        <h1 className="page-title">CURATING</h1>
                    </div>

                    <div className="content-wrapper">
                        {sections.map((section, index) => (
                            <div key={index} className="section-block">
                                <h3 className="section-title">{section.title}</h3>
                                <div className="section-items">
                                    {section.items.map((item, idx) => (
                                        <div key={idx} className="curating-item">
                                            <h4 className="item-heading">{item.heading}</h4>
                                            <p className="item-content" style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="images-grid-container">
                            {galleryImages.map((image) => (
                                <div key={image.id} className="grid-item">
                                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                                        <img src={image.src} className="grid-img" alt={`Gallery ${image.id}`} />
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
                    background-color: #ffffff;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #000;
                }

                .highlight-link { 
                    color: #e6e600; 
                    text-decoration: none; 
                    transition: color 0.3s ease; 
                    cursor: pointer; 
                }
                .highlight-link:hover { 
                    color: #bfbf00; 
                    text-decoration: underline; 
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
                    gap: 40px; 
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
                    font-size: 10px;
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
                    font-size: 24px;
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
                    text-align: justify;
                }
                
                p { margin-bottom: 12px; font-size: 11px; line-height: 1.5; }
                a { color: #000; text-decoration: none; }
                a:hover { text-decoration: underline; }
                ul { padding-left: 0; list-style-type: none; }
                
                .section-block { margin-bottom: 50px; }
                .section-title { 
                    font-size: 14px; 
                    font-weight: bold; 
                    margin-bottom: 25px; 
                    text-transform: uppercase; 
                    letter-spacing: 0.1em; 
                    border-bottom: 1px solid #000; 
                    padding-bottom: 5px; 
                    display: inline-block; 
                }
                .curating-item { margin-bottom: 30px; }
                .item-heading { font-size: 13px; font-weight: bold; margin: 0 0 5px 0; }
                .item-content { font-size: 11px; margin: 0 0 5px 0; line-height: 1.4; }
                
                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 5px;
                    width: 100%;
                }
                .grid-item { position: relative; width: 100%; padding-bottom: 100%; background: #ccc; overflow: hidden; }
                .grid-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
                .grid-img:hover { transform: scale(1.05); }

                @media (max-width: 600px) {
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
