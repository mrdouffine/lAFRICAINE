
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Photo() {
    const photos = [
        { id: 1, src: '/images/photo/MG_1010-1-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/MG_1010-1-scaled.jpg' },
        { id: 2, src: '/images/photo/MG_1039--scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/MG_1039--scaled.jpg' },
        { id: 3, src: '/images/photo/MG_1050--scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/MG_1050--scaled.jpg' },
        { id: 4, src: '/images/photo/MG_1075--scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/MG_1075--scaled.jpg' },
        { id: 5, src: '/images/photo/MG_1078--scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/MG_1078--scaled.jpg' },
        { id: 6, src: '/images/photo/MG_1096--scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/MG_1096--scaled.jpg' },
        { id: 7, src: '/images/photo/SCAL2208301015-1-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/SCAL2208301015-1-scaled.jpg' },
        { id: 8, src: '/images/photo/SCAL2208301024-1-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/SCAL2208301024-1-scaled.jpg' },
        { id: 9, src: '/images/photo/SCAL2208301027-1-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/SCAL2208301027-1-scaled.jpg' },
        { id: 10, src: '/images/photo/IMG_8576-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/04/IMG_8576-scaled.jpg' },
        { id: 11, src: '/images/photo/IMG_8586.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/04/IMG_8586.jpg' },
        { id: 12, src: '/images/photo/IMG_8582.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/04/IMG_8582.jpg' },
        { id: 13, src: '/images/photo/Sename-Koffi-Agbodjinou_small.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/Sename-Koffi-Agbodjinou_small.png' },
        { id: 14, src: '/images/photo/11-8.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/11-8.png' },
        { id: 15, src: '/images/photo/16-1.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/16-1.png' },
        { id: 16, src: '/images/photo/3-9.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/3-9.jpg' },
        { id: 17, src: '/images/photo/6_-1-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/6_-1-scaled.jpg' },
        { id: 18, src: '/images/photo/8-6.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/8-6.jpg' },
        { id: 19, src: '/images/photo/9-6.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/9-6.png' },
        { id: 20, src: '/images/photo/9-7.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/9-7.png' },
        { id: 21, src: '/images/photo/10-5.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/10-5.png' },
        { id: 22, src: '/images/photo/12-1.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/12-1.jpg' },
        { id: 23, src: '/images/photo/61462306_1547142795421194_399570209230290944_o-1.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/61462306_1547142795421194_399570209230290944_o-1.jpg' },
        { id: 24, src: '/images/photo/14-3.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/14-3.jpg' },
        { id: 25, src: '/images/photo/20-1-1-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/20-1-1-scaled.jpg' },
        { id: 26, src: '/images/photo/7-6-1000x800-2.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/7-6-1000x800-2.jpg' },
        { id: 27, src: '/images/photo/20-2.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/20-2.jpg' },
        { id: 28, src: '/images/photo/13-2-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/13-2-scaled.jpg' },
        { id: 29, src: '/images/photo/Katesi_0.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/Katesi_0.png' },
        { id: 30, src: '/images/photo/Sename-Koffi-Agbodjinou.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/Sename-Koffi-Agbodjinou.png' },
        { id: 31, src: '/images/photo/22-1.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/22-1.jpg' },
        { id: 32, src: '/images/photo/Capture-decran-2016-09-21-a-04.00.13.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/Capture-decran-2016-09-21-a-04.00.13.png' },
        { id: 33, src: '/images/photo/12628349_1030718446985346_1593670128379673247_o.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/12628349_1030718446985346_1593670128379673247_o.jpg' },
        { id: 34, src: '/images/photo/12513611_1030717736985417_4981972911708972975_o.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/12513611_1030717736985417_4981972911708972975_o.jpg' },
        { id: 35, src: '/images/photo/Sename-Koffi-Agbodjinou_Portrait.jpg.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/Sename-Koffi-Agbodjinou_Portrait.jpg.png' },
        { id: 36, src: '/images/photo/img_4609.jpeg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/img_4609.jpeg' },
        { id: 37, src: '/images/photo/15-1-scaled.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/15-1-scaled.jpg' },
        { id: 38, src: '/images/photo/sename.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/sename.jpg' },
        { id: 39, src: '/images/photo/7.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/7.jpg' },
        { id: 40, src: '/images/photo/10.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/10.jpg' },
        { id: 41, src: '/images/photo/16.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/16.jpg' },
        { id: 42, src: '/images/photo/6.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/6.jpg' },
        { id: 43, src: '/images/photo/EPPKChantier6.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/EPPKChantier6.jpg' },
        { id: 44, src: '/images/photo/30250_1422543170967_2791861_n.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/30250_1422543170967_2791861_n.jpg' },
        { id: 45, src: '/images/photo/30250_1422543050964_3612625_n.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/30250_1422543050964_3612625_n.jpg' },
        { id: 46, src: '/images/photo/10392178_1204772366833_2615913_n.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/10392178_1204772366833_2615913_n.jpg' },
        { id: 47, src: '/images/photo/10392178_1204071589314_8021967_n.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/10392178_1204071589314_8021967_n.jpg' },
        { id: 48, src: '/images/photo/0.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/0.jpg' },
        { id: 49, src: '/images/photo/530300_3506288703303_1946603310_n.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/530300_3506288703303_1946603310_n.jpg' },
        { id: 50, src: '/images/photo/285341621_726699948376407_5321727115586690048_n.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/285341621_726699948376407_5321727115586690048_n.jpg' },
        { id: 51, src: '/images/photo/284790006_517939913366361_6746658883517296081_n.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/284790006_517939913366361_6746658883517296081_n.jpg' },
        { id: 52, src: '/images/photo/324282_2420302794334_1089771841_o.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/324282_2420302794334_1089771841_o.jpg' },
        { id: 53, src: '/images/photo/333708_2420299314247_1184997561_o.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/333708_2420299314247_1184997561_o.jpg' },
        { id: 54, src: '/images/photo/228091_1932853088396_2700466_n.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/09/228091_1932853088396_2700466_n.jpg' },
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
                            src="/images/photo_portrait.png"
                            alt="PHOTO"
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
                        <h1 className="page-title">PHOTOS</h1>
                    </div>

                    <div className="content-wrapper">

                        <div className="images-grid-container">
                            {photos.map((photo) => (
                                <div key={photo.id} className="grid-item">
                                    <a href={photo.link} target="_blank" rel="noopener noreferrer">
                                        <img src={photo.src} className="grid-img" alt={`Photo Gallery ${photo.id}`} />
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
                
                
            `}</style>
        </div>
    )
}
