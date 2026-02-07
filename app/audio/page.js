
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Audio() {
    const sections = [
        {
            title: "PODCASTS",
            items: [
                {
                    heading: "Le Code a changé. Podcast – France Inter.",
                    content: <a href="https://www.radiofrance.fr/franceinter/podcasts/le-code-a-change/quand-le-numerique-colonise-la-ville-africaine-6270137" target="_blank" rel="noopener noreferrer" className="highlight-link">Quand le numérique colonise la ville africaine ! ?</a>
                },
                {
                    heading: "The Architectural Review Podcast",
                    content: <a href="https://www.architectural-review.com/podcasts/ar-ecologies/cca-x-ar-ecologies-how-to-do-no-harm" target="_blank" rel="noopener noreferrer" className="highlight-link">How to do no harm ?</a>
                },
                {
                    heading: "Podcast Demain & Durable – Comprendre l’écologie et agir ensemble !",
                    content: <a href="https://podcast.ausha.co/demain-et-durable-comprendre-l-ecologie/ep56-la-smartcity-peut-elle-etre-durable-avec-sename-koffi-agbodjinou-ecologie" target="_blank" rel="noopener noreferrer" className="highlight-link">La Smart City peut-elle être durable ?</a>
                },
                {
                    heading: "Radio Anthropocene – Les Conversations :",
                    content: <>
                        <a href="https://www.sondekla.com/user/event/12763" target="_blank" rel="noopener noreferrer" className="highlight-link">Faire de l’architecture un Commun !</a> <br />
                        avec Feda Wardak et Sénamé Koffi Agbodjinou par Jérémy Cheval
                    </>
                },
                {
                    heading: "Radio Anthropocene – Les jeunes en parlent :",
                    content: <a href="https://www.sondekla.com/user/event/12768" target="_blank" rel="noopener noreferrer" className="highlight-link">Architecture et Politique</a>
                },
                {
                    heading: "Mindful Entrepreneur :",
                    content: <a href="https://anchor.fm/mentrepreneurpodcast/episodes/Woelabs--le-hub-des-entrepreneurs-togolais-pour-dvelopper-des-solutions-africaines-e1dqdih" target="_blank" rel="noopener noreferrer" className="highlight-link">Woelabs : le hub des entrepreneurs togolais pour développer des solutions africaines</a>
                },
                {
                    heading: "We Love Green :",
                    content: <a href="https://soundcloud.com/we-love-green/sename-koffi-villes-du-futur" target="_blank" rel="noopener noreferrer" className="highlight-link">Villes du futur | Think Tank x Saison Africa 2020</a>
                },
                {
                    heading: "DW",
                    content: <a href="https://www.dw.com/fr/togo-graines-despoir-ville/a-58192704" target="_blank" rel="noopener noreferrer" className="highlight-link">Une cité pas comme les autres</a>
                },
                {
                    heading: "Kalimanjaro – Le Podcast des ambitieux",
                    content: <>
                        <a href="https://podcasts.apple.com/us/podcast/kalimanjaro-%C3%A9pisode-60-partie-1-avec-sename-koffi-agbodjinou/id1532619060?i=1000515488678" target="_blank" rel="noopener noreferrer" className="highlight-link">(part 1) Utiliser le potentiel africain pour résoudre la misère occidentale</a><br />
                        <a href="https://podcasts.apple.com/us/podcast/kalimanjaro-%C3%A9pisode-60-partie-1-avec-sename-koffi-agbodjinou/id1532619060?i=1000515488678" target="_blank" rel="noopener noreferrer" className="highlight-link">(part 2) Faire de l’architecture à l’africaine</a>
                    </>
                },
                {
                    heading: "Ablode, Mixtape, Elom 20ce",
                    content: <a href="https://elom20ce.bandcamp.com/track/d-coloniser-le-futur-s-nam-koffi-agbodjinou" target="_blank" rel="noopener noreferrer" className="highlight-link">Décoloniser le Futur</a>
                },
                {
                    heading: "La Forge Numérique de la Maison de la Recherche en Sciences Humaines",
                    content: <a href="https://www.franceculture.fr/conferences/maison-de-la-recherche-en-sciences-humaines/epistemicides-cosmogonies-computationnalites-primitives" target="_blank" rel="noopener noreferrer" className="highlight-link">Épistémicides – Cosmogonies : computationnalités primitives</a>
                },
                {
                    heading: "Les Mercredis de l’anthropocène : Podcast de L’Ecole urbaine de Lyon",
                    content: <a href="https://www.rue89lyon.fr/2020/06/24/podcast-penser-lurbain-anthropocene-depuis-les-suds/" target="_blank" rel="noopener noreferrer" className="highlight-link">Penser l’urbain anthropocène depuis les Suds</a>
                },
                {
                    heading: "Afrotopiques Podcast",
                    content: <a href="https://shows.acast.com/afrotopiques/episodes/621dd33cc9d2770012efb73c" target="_blank" rel="noopener noreferrer" className="highlight-link">Cosmo-éthiques africaines et nouvelles technologies pour habiter la Terre en commun</a>
                },
                {
                    heading: "RFI",
                    content: <a href="https://www.rfi.fr/fr/emission/20190611-afrofuturismes-podcast-episode-5-afrofuturisme-urbanisme-fab-lab" target="_blank" rel="noopener noreferrer" className="highlight-link">L’afrofuturisme en action(s) : les inventeurs de futurs africains</a>
                },
                {
                    heading: "Les Podcasts de l’École Pro- Centre Pompidou X L’ADN",
                    content: <>
                        <a href="https://www.ladn.eu/mondes-creatifs/art-entreprises-societe/podcast-numerique-du-nouvel-eldorado-au-cauchemar-contemporain/" target="_blank" rel="noopener noreferrer" className="highlight-link">Numérique, du nouvel eldorado au cauchemar contemporain ?</a><br />
                        Quatre regards croisés sur la transformation numérique.
                    </>
                },
                {
                    heading: "FUTUR.E.S (sondekla)",
                    content: <a href="https://www.sondekla.com/user/event/9891" target="_blank" rel="noopener noreferrer" className="highlight-link">2030 : innover en mode sans échec pour éviter le 404 Error !</a>
                },
                {
                    heading: "RFI",
                    content: <a href="https://www.rfi.fr/fr/emission/20190713-togo-lome-heure-villes-intelligentes-sename-koffi-agbodjinou" target="_blank" rel="noopener noreferrer" className="highlight-link">Togo: Lomé à l’heure des villes intelligentes</a>
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
                            alt="AUDIOS"
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
                        <h1 className="page-title">AUDIOS</h1>
                    </div>

                    <div className="content-wrapper">
                        {sections.map((section, index) => (
                            <div key={index} className="audio-list">
                                {section.items.map((item, idx) => (
                                    <div key={idx} className="audio-item">
                                        <h3 className="item-heading">{item.heading}</h3>
                                        <p className="item-content">{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .audio-item { margin-bottom: 30px; }
                .item-heading { font-size: 13px; font-weight: bold; margin: 0 0 5px 0; }
                .item-content { font-size: 11px; margin: 0 0 5px 0; font-style: italic; }
            `}</style>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #b1b1b1;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #000;
                }

                .highlight-link { color: #e6e600; text-decoration: none; transition: color 0.3s ease; cursor: pointer; }
                .highlight-link:hover { color: #bfbf00; text-decoration: underline; }

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
                    filter: grayscale(100%);
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
                
                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 5px;
                    width: 100%;
                }
                .grid-item { position: relative; width: 100%; padding-bottom: 100%; background: #ccc; overflow: hidden; }
                .grid-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: transform 0.3s; }
                .grid-img:hover { transform: scale(1.05); }

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
        </div >
    )
}
