
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Architecture() {
    const projects = [
        {
            title: "Village des Cases à Savoirs, Assome",
            url: "https://docs.google.com/presentation/d/1ATySHMJvkHjF-h98N6dUSrdRvmv4rILv-YWxGnEj_I4/edit?usp=sharing"
        },
        {
            title: "Maison des traditions « Gbegbe », Agouegan",
            url: "https://docs.google.com/presentation/d/1IHPkw9f5qGlFFjuvqoMkZxpKR-qI_HTXVWp56ilW07Q/edit?usp=sharing"
        },
        {
            title: "Ecole Essime, Lomé",
            url: "https://docs.google.com/presentation/d/1z88SAvhDITqSe9rg8N7lCW_q6rVrPybTk7G7sASLzXU/edit?usp=sharing"
        },
        {
            title: "Centre Culturel « Dekonou », Aklakou",
            url: "https://docs.google.com/presentation/d/1xZxP-cHxPm6OaOCCraUBIicsbXk7iiYmR7tGAb7SXyM/edit?usp=sharing"
        },
        {
            title: "Villa Essenam, Lomé",
            url: "https://docs.google.com/presentation/d/1qaTOlghVQLznxoxtgiLhUbT6_yz1_TOtzMfE6h8Vk90/edit?ts=60392b49#slide=id.p"
        },
        {
            title: "Les Ateliers, Lomé",
            url: "https://docs.google.com/presentation/d/1Y3P1pdiwd-aC2u7zvhv3wmJRI0qO57J7c_-oKU2VkJI/edit#slide=id.g231079b638_0_1"
        },
        {
            title: "LYSD Salle de Lecture",
            url: "https://docs.google.com/presentation/d/1scrTeDHNgEbnjZpe1RPWQHZOmEDHfGHjrWwD-NVJ_aI/edit#slide=id.g29fcc2d1f3_0_78"
        },
        {
            title: "Tech Park, Lomé",
            url: "https://docs.google.com/presentation/d/1K9I7V1FSzsDqBEyDn7uWMh3ekEi4mUKPD5A9sk3r0wI/edit#slide=id.g3480c907b_20"
        },
        {
            title: "CINA, Aneho (Programmation)",
            url: "https://docs.google.com/presentation/d/1_N5MrIJKnpTsrd9aOPE6p4_OtE9Vj5iB5TY72Uez8h0/edit#slide=id.g120790047c_0_7"
        },
        {
            title: "CINA, Aneho (Avant-projet)",
            url: "https://docs.google.com/presentation/d/1wSvypihrEnkHaPRiRQwxOhKzmoHkUwifQ32SVfNxziE/edit#slide=id.g344ab5a32_00"
        },
        {
            title: "Etudes diverses en Voûtes & Coupoles Nubiennes",
            url: "https://docs.google.com/presentation/d/1ifCosRSD8Q3OYUBx5P-TQNXhAICG2PcirKzDG2MIWwA/edit#slide=id.p"
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
                            src="/images/architecture_portrait.png" 
                            alt="ARCHITECTURE" 
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
                        <h1 className="page-title">ARCHITECTURE</h1>
                    </div>
                    
                    <div className="content-wrapper">
                        
            <p>Page in construction. Content will be added shortly.</p>
        

                        <div className="images-grid-container">
                            <div className="grid-item"><img src="/images/architecture_grid_1.jpg" className="grid-img"/></div>
                            <div className="grid-item"><img src="/images/architecture_grid_2.jpg" className="grid-img"/></div>
                            <div className="grid-item"><img src="/images/architecture_grid_3.jpg" className="grid-img"/></div>
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
                .grid-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;  transition: transform 0.3s; }
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
