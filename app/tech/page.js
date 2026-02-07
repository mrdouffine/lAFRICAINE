
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Tech() {
    const techProjects = [
        {
            title: "HubCités Africaines (HubCité / Silicon Village)",
            description: "Une utopie urbaine testée à Lomé depuis 2012, visant à construire la ville sur la base des \"biens communs\" (commons) comme alternative aux \"Smart Cities\" élitistes."
        },
        {
            title: "WoeLab(s)",
            description: "Un réseau d’incubateurs et de fablabs à Lomé, pionnier du mouvement maker en Afrique, dédié au travail collaboratif et à l'innovation sociale."
        },
        {
            title: "UrbanAttic",
            description: "Une plateforme de coordination de \"greniers urbains\" pour promouvoir la production et la consommation bio en circuit court."
        },
        {
            title: "Sys’Woe",
            description: "Un système d'échange local comprenant une application (\"Sys\") et une monnaie alternative (\"Woe\") pour relocaliser l'économie au sein de la HubCity."
        },
        {
            title: "SCoPE (#Mizãmike)",
            description: "Une plateforme de collecte intelligente des déchets plastiques utilisant des systèmes d'alerte (ecobeep) et le suivi en temps réel des données."
        },
        {
            title: "Wafate (Woebots #1)",
            description: "La première imprimante 3D \"Made in Africa\" construite entièrement à partir de déchets informatiques. Elle a reçu de nombreux prix internationaux (NASA, NetExplo)."
        },
        {
            title: "Tavio",
            description: "Un prototype d'imprimante 3D semi-artisanale développé spécifiquement pour sensibiliser le jeune public."
        },
        {
            title: "L’Africaine d’architecture",
            description: "L'organisation fondatrice qui encadre ces recherches urbaines et technologiques."
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
                            alt="TECH"
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
                        <h1 className="page-title">TECH</h1>
                    </div>

                    <div className="content-wrapper">

                        <div className="tech-list">
                            {techProjects.map((project, index) => (
                                <div key={index} className="tech-item">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="images-grid-container">
                            <div className="grid-item"><img src="/images/tech_grid_1.png" className="grid-img" /></div>
                            <div className="grid-item"><img src="/images/tech_grid_2.jpg" className="grid-img" /></div>
                            <div className="grid-item"><img src="/images/tech_grid_3.png" className="grid-img" /></div>
                        </div>
                        <style jsx>{`
                            .tech-item { margin-bottom: 30px; }
                            .project-title { font-size: 13px; font-weight: bold; margin: 0 0 5px 0; }
                            .project-desc { font-size: 11px; margin: 0; line-height: 1.5; color: #000; text-align: justify; }
                            .images-grid-container { margin-top: 50px; }
                        `}</style>

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
        </div>
    )
}
