
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Video() {
    const videoItems = [
        {
            title: "The Turtle of the Yellow Sea",
            year: "2022",
            embedUrl: "https://www.youtube.com/embed/lcZL3ATJ9gk"
        },
        {
            title: "La Cosmogonie comme nouveau paradigme du design : Une approche decoloniale",
            year: "Ecole de l’Anthropocène, Lyon, 2022",
            embedUrl: "https://www.youtube.com/embed/boD7n2ApvIk"
        },
        {
            title: "‘Je est un autre’ – Sename",
            year: "Soirée « Urgence » École de l’Anthropocène, Lyon, 2022",
            embedUrl: "https://www.youtube.com/embed/crQA0n4ltVw"
        },
        {
            title: "Demain, la ville africaine",
            year: "Le Monde Afrique",
            embedUrl: "https://www.youtube.com/embed/jzOItUiGu7M"
        },
        {
            title: "Smart-City : l’Afrique a-t-elle besoin de modèles importés ?",
            year: "Le Monde Afrique",
            embedUrl: "https://www.youtube.com/embed/XzSrtuS3Lks"
        },
        {
            title: "L’Afrique peut-elle inventer la ville de demain ?",
            year: "Le Monde Afrique",
            embedUrl: "https://www.youtube.com/embed/rsq_yAnk-k8"
        },
        {
            title: "Conférence ‘THE CURRENCY LAB’ Amzat Boukari- Yabara – Sename Koffi A.",
            year: "‘THE CURRENCY LAB’- Les Etats Généraux de l’Eco side event",
            embedUrl: "https://www.youtube.com/embed/DPvebQCUySY"
        },
        {
            title: "»Restitution, Afrikanische Erinnerungskulturen und das ›Neue Museum‹«",
            year: "Dekoloniale [Re]visionen",
            embedUrl: "https://player.vimeo.com/video/569763160"
        },
        {
            title: "High tech VS Low tech : faut-il choisir son camp ?",
            year: "L’ADN Studio x Veolia – Tech 4 Planet – Vivatech, Juin 2021",
            embedUrl: "https://player.vimeo.com/video/566065021?h=66f631eb50"
        },
        {
            title: "Hucité Virtual Visit",
            year: "THE FUTURE SUMMIT 2021, Segal family foundation",
            embedUrl: "https://www.youtube.com/embed/v9lTPsecFZY"
        },
        {
            title: "Vaccins, Aspects marchands",
            year: "#SusuDede : Think Tank Vision et Action pour le Togo, May 2021",
            embedUrl: "https://www.youtube.com/embed/QCk2_sEYLL8"
        },
        {
            title: "Architecture en Afrique : les enjeux d’un continent entre patrimoine et ultra modernité",
            year: "L’Université Populaire du Musée du Quai Branly, Mai 2021",
            embedUrl: "https://www.youtube.com/embed/637aFqZcSf8"
        },
        {
            title: "La ville cosmopolite – Dialogue Patrick Bouchain, Sename Koffi A.",
            year: "Sommet de Septembre – Saison Africa2020, Mars 2021",
            embedUrl: "https://www.youtube.com/embed/BZAwYce8YOg"
        },
        {
            title: "Critical Making Hands-On Methods: Tech-Hubs as Radical Devices of Critique",
            year: "Interactive Workshop: Exploring Critical Making, Mars 2021",
            embedUrl: "https://www.youtube.com/embed/266WczkrYg0"
        },
        {
            title: "Le (Low) High Tech » , Ludovic Duhem & Sename Koffi A.",
            year: "Sommet de Septembre – Saison Africa2020, Mars 2021",
            embedUrl: "https://www.youtube.com/embed/u1DWDZW5Z0A"
        },
        {
            title: "Les villes africaines en mutation: Kuukuwa Manful & Sename Koffi A.",
            year: "Sommet de Septembre – Saison Africa2020, Mars 2021",
            embedUrl: "https://www.youtube.com/embed/W6Zo7FDl4ms"
        },
        {
            title: "Tisser le temps, Jean-Luc Raharimanana & Sename Koffi",
            year: "Culturgest, Novembre 2020",
            embedUrl: "https://www.youtube.com/embed/3abGQ9ooq0M"
        },
        {
            title: "Computationnalités Primitives",
            year: "Interview NETEXPLO Smart Cities A. Septembre 2020",
            embedUrl: "https://www.youtube.com/embed/EUtpp2wG5lU"
        },
        {
            title: "Décryptage des tendances technologiques 2020",
            year: "Interview NETEXPLO Innovation, Septembre 2020",
            embedUrl: "https://www.youtube.com/embed/TKmQWVzfHlE"
        },
        {
            title: "Vers l’urbanocène : la ville comme organisme” Dialogue avec Philippe Chiambaretta",
            year: "« La nature peut-elle humaniser la ville ? » Une conférence Le Monde Cities et « Le Temps », Février 2020",
            embedUrl: "https://www.youtube.com/embed/9Q5eByIwHsI"
        },
        {
            title: "2038 surfin’ ONE",
            year: "teaser “2038. -Die Neue Gelassenheit– Geschichte” Deutscher Pavillon auf der 17. Architekturbiennale Venedig 2020",
            embedUrl: "https://www.youtube.com/embed/hlTRTlQfORs"
        },
        {
            title: "La Smart City sera civilisée par l’Afrique",
            year: "Interview Usbek & Rica 2019",
            embedUrl: "https://www.youtube.com/embed/SwCDVCx4mDQ"
        },
        {
            title: "La Civilisation contre le Système du Monde",
            year: "NetExplo Smart City Accelerator 2019",
            embedUrl: "https://www.youtube.com/embed/Skz-jDpBchg"
        },
        {
            title: "Débat “ Comment l’Afrique questionne-t-elle « notre » innovation ? ”",
            year: "Le Mouton Numérique, France Culture Conférences, Socialter. FGO Barbara, Paris 2018",
            embedUrl: "https://www.youtube.com/embed/_VUso7hKb1g"
        },
        {
            title: "Des algorithmes vernaculaires à la smart cité africaine",
            year: "Boma France 2018",
            embedUrl: "https://www.youtube.com/embed/vC1KOm4GiYE"
        },
        {
            title: "Towards the Vernacular City",
            year: "I4Policy, Smart Africa Summit, Kigali, 2017",
            embedUrl: "https://www.youtube.com/embed/uIP4OfHhPNU"
        },
        {
            title: "La Low High Tech avec Sename Koffi de WoeLab",
            year: "Dakar, 2017",
            embedUrl: "https://www.youtube.com/embed/6PByf53J8H0"
        },
        {
            title: "Interview de Sénamé Koffi Agbodjinou",
            year: "Sénart, 2017",
            embedUrl: "https://www.youtube.com/embed/5z1R9Q0c9e0"
        },
        {
            title: "Débat “La frontière où on ne l’attend pas”",
            year: "Les Voix d’Orleans, Orleans, 2017",
            embedUrl: "https://www.youtube.com/embed/ybGoBWqnSs0"
        },
        {
            title: "Entreprendre avec le Peuple",
            year: "Forum -GID FastDev, Dakar, 2016",
            embedUrl: "https://player.vimeo.com/video/159214297"
        },
        {
            title: "La prochaine Révolution Industrielle sera Vernaculaire ou ne sera pas !",
            year: "World Forum for a Responsible Economy, Lille, 2015",
            embedUrl: "https://www.youtube.com/embed/8-KBn8Q6aNs"
        },
        {
            title: "‘OpenSource Heroes’",
            year: "FoSSa, Rennes, 2014",
            embedUrl: "https://www.youtube.com/embed/yGYafiq0SUs"
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
                            src="/images/video_portrait.png"
                            alt="VIDÉOS"
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
                        <h1 className="page-title">VIDÉOS</h1>
                    </div>

                    <div className="content-wrapper">

                        <div className="video-grid">
                            {videoItems.map((video, index) => (
                                <div key={index} className="video-item">
                                    <div className="video-wrapper">
                                        <iframe
                                            src={video.embedUrl}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="video-info">
                                        <h3 className="item-title">{video.title}</h3>
                                        <p className="item-meta">{video.year}</p>
                                    </div>
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
                    object-fit: contain; 
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
                
                
            .video-item { margin-bottom: 40px; }
            .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background: #000; margin-bottom: 10px; }
            .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
            .item-title { font-size: 12px; font-weight: bold; margin: 0 0 5px 0; text-transform: uppercase; }
            .item-meta { font-size: 11px; color: #444; margin: 0; }
        
            `}</style>
        </div>
    )
}
