
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Consulting() {
    const gridImages = [
        { id: 1, src: '/images/consulting/1-12-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/1-12-1000x800.jpg' },
        { id: 2, src: '/images/consulting/2-12-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/2-12-1000x800.jpg' },
        { id: 3, src: '/images/consulting/3-11-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/3-11-1000x800.jpg' },
        { id: 4, src: '/images/consulting/20190306_112009-1-1000x573.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/20190306_112009-1-1000x573.jpg' },
        { id: 5, src: '/images/consulting/sename_98504881_124339892606361_4529801261739714539_n-1-1000x719.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/sename_98504881_124339892606361_4529801261739714539_n-1-1000x719.jpg' },
        { id: 6, src: '/images/consulting/sename_101036021_609826619619545_6909935395864197571_n-1-1000x720.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/sename_101036021_609826619619545_6909935395864197571_n-1-1000x720.jpg' },
    ];

    const consultingData = [
        {
            org: "Partenariat français pour les villes et les territoires (PFVT)",
            detail: "Cycle de webinaires « Regards croisés entre l’Afrique et la France »",
            contribution: "Contribution à la thématique « Genre et ville »",
            meta: "Online, Décembre 2021"
        },
        {
            org: "FNAU : Fédération Nationale des Agences d’Urbanisme/ Partenariat Français pour la Ville et les Territoires (PFVT)",
            detail: "Participation au Groupe de travail « Nouvelles pratiques »",
            contribution: "Contribution française au flagship programme d’ONU-Habitat « Villes numériques inclusives »",
            meta: "Online, Octobre 2021"
        },
        {
            org: "Veolia/ L’ADN",
            detail: "High tech VS Low tech : faut-il choisir son camp ?",
            contribution: "Input session “ Is it the end of Tech as we know it ? “, Vivatech, Juin 2021",
            meta: ""
        },
        {
            org: "AFD/ CFI (Agence française de développement médias),",
            detail: "Mission de consultance individuelle",
            contribution: "Participation filmée au MOOC Civictech / projet CONNEXIONS CITOYENNES 2.",
            meta: "Abidjan, Mai 2021"
        },
        {
            org: "YUNUS Sports Hub",
            detail: <a href="http://yshplatform.org/mentors/" target="_blank" rel="noopener noreferrer" className="highlight-link">Mentor : Mentorship Program – Yunus “sport related incubation”</a>,
            contribution: "AFD/ Lancement Paris 2024",
            meta: "Feb- Sept 2021"
        },
        {
            org: "AFD/ Plurality University",
            detail: "Mission de consultance individuelle",
            contribution: "“Rencontre inspirante” avec le Pôle Innovation de l’Agence Française de Développement",
            meta: "Juillet 2020"
        },
        {
            org: "FNAU : Fédération Nationale des Agences d’Urbanisme/ Partenariat Français pour la Ville et les Territoires (PFVT)",
            detail: "Mission de consultation sur les enjeux de prospective en Afrique et les changements de modèle induits par la crise COVID 19",
            contribution: "Groupes de Travail « Maîtrise d’ouvrage urbaine Initiative pour les Services Essentiels à l’international” & “Transition numérique”",
            meta: "Juin 2020"
        },
        {
            org: "La Fabrique de la Cité- Vinci Group",
            detail: "For a cultural anthropology of urban uses of digital tech !",
            contribution: "“Eléments de tendances de la Smart City en Afrique “ – WORLD URBAN FORUM",
            meta: "Panel avec Cécile de Maisonneuve, Raphaël Languillon, Hugues Parent, Pushpa Arabindoo)\nAbu Dhabi, Février 2020"
        },
        {
            org: "SoCiété Générale",
            detail: "Penser la banque as a Plateforme- pour des villes africaine Durables/ FUTUR.E.S in Africa & Sommet Afrique -France 2020",
            contribution: "",
            meta: "Octobre 2019"
        },
        {
            org: "OCDE/ SWAC",
            detail: "Contribution au thème ‘Villes Africaines: Nouvelles interfaces du développement/ Penser l’avenir urbain de l’Afrique’.",
            contribution: <>Pour la Réunion du Groupe d’Orientation Politique du Club du Sahel –<br />Lancement de la plateforme <a href="http://www.africapolis.org/" target="_blank" rel="noopener noreferrer" className="highlight-link">Africapolis</a> –</>,
            meta: "Paris, Juin 2019"
        },
        {
            org: "Leonard – Vinci Group",
            detail: "Etude sur la “Paléo inspiration” (Avec Loïc Bertrand, Laboratoire IPANEMA) –",
            contribution: "",
            meta: "Paris, Juin 2019"
        },
        {
            org: "EFFY",
            detail: "Public Inspirational Speaking pour le 10e Anniversaire du Groupe –",
            contribution: "",
            meta: "Paris, décembre 2018\n(Contrat Brightness)"
        },
        {
            org: "Orange",
            detail: "Talk d’inspiration pour l’ Executive Meeting – COMEX d’entreprise –",
            contribution: "",
            meta: "Paris , janvier 2018 (Contrat Brightness)."
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
                            src="/images/consulting_portrait.png"
                            alt="CONSULTING"
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
                        <h1 className="page-title">CONSULTING</h1>
                    </div>

                    <div className="content-wrapper">

                        <div className="consulting-list">
                            {consultingData.map((item, index) => (
                                <div key={index} className="consulting-item">
                                    <h3 className="consulting-org">{item.org}</h3>
                                    <p className="consulting-detail">{item.detail}</p>
                                    <p className="consulting-contrib">{item.contribution}</p>
                                    <p className="consulting-meta">{item.meta}</p>
                                </div>
                            ))}
                        </div>
                        <div className="images-grid-container">
                            {gridImages.map((image) => (
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
                
                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 5px;
                    width: 100%;
                }
                .grid-item { position: relative; width: 100%; padding-bottom: 100%; background: #ccc; overflow: hidden; }
                .grid-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
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
                
                
            .consulting-item { margin-bottom: 30px; }
            .consulting-org { font-size: 13px; font-weight: bold; margin: 0 0 5px 0; text-transform: uppercase; color: #000; }
            
            .highlight-link { color: #e6e600; text-decoration: none; transition: color 0.3s ease; }
            .highlight-link:hover { color: #bfbf00; text-decoration: underline; }

            .consulting-detail { font-size: 11px; margin: 0 0 2px 0; }
            .consulting-contrib { font-size: 11px; font-style: italic; color: #555; margin: 0 0 2px 0; }
            .consulting-meta { font-size: 11px; color: #555; margin: 0; }
        
            `}</style>
        </div>
    )
}
