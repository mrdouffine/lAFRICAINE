"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Lectures() {
    const gridImages = [
        { id: 1, src: '/images/lectures/gallery_1.jpeg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/1662494407557.jpeg' },
        { id: 2, src: '/images/lectures/gallery_2.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/FYSbg5KXoAAN_xW.jpg' },
        { id: 3, src: '/images/lectures/gallery_3.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-1.jpg' },
        { id: 4, src: '/images/lectures/gallery_4.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/AFRICAN_UPDATED_MAP-scaled-1.jpg' },
        { id: 5, src: '/images/lectures/gallery_5.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/5b_Sename-Koffi-Agbodjinou-architecte_et-journaliste-du-Monde_33_IMG_8341_01_12_2021.jpg' },
        { id: 6, src: '/images/lectures/gallery_6.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/FGoaWDVXMAQAwnM.jpg' },
        { id: 7, src: '/images/lectures/gallery_7.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/sddefault-2.jpg' },
        { id: 8, src: '/images/lectures/gallery_8.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/numerique-et-la-citoyennete.jpg' },
        { id: 9, src: '/images/lectures/gallery_9.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-1-1.jpg' },
        { id: 10, src: '/images/lectures/gallery_10.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/fg.jpg' },
        { id: 11, src: '/images/lectures/gallery_11.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/f.jpg' },
        { id: 12, src: '/images/lectures/gallery_12.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/ESwNv-iXgAENxro.jpg' },
        { id: 13, src: '/images/lectures/gallery_13.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/sename_95667226_164903481581350_3787570402102819077_n-1.jpg' },
        { id: 14, src: '/images/lectures/gallery_14.jpeg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/EQGTNkqWAAAbm_b.jpeg' },
        { id: 15, src: '/images/lectures/gallery_15.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/senamekoffiagbodjinou-1.jpg' },
        { id: 16, src: '/images/lectures/gallery_16.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/i6462_18_l89_r_gp_xl_tangana_makersbrunch_1woelab.jpg' },
        { id: 17, src: '/images/lectures/gallery_17.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/27752327_10214784803881061_1631979578464263465_n-1.jpg' },
        { id: 18, src: '/images/lectures/gallery_18.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/DtmWEj_WwAARidh.jpg' },
        { id: 19, src: '/images/lectures/gallery_19.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/woelab-2.jpg' },
        { id: 20, src: '/images/lectures/gallery_20.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/DqR3FoNXcAAnCmv.jpg' },
        { id: 21, src: '/images/lectures/gallery_21.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/sddefault.jpg' },
        { id: 22, src: '/images/lectures/gallery_22.jpeg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/WhatsApp-Image-2019-06-13-at-12.37.46-1024x682-1-1.jpeg' },
        { id: 23, src: '/images/lectures/gallery_23.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/sename_61822584_100993714540340_2236663795268420619_n-1.jpg' },
        { id: 24, src: '/images/lectures/gallery_24.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/11-2.jpg' },
        { id: 25, src: '/images/lectures/gallery_25.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/176907729_10226753454720699_7630062748010789327_n-1.jpg' },
        { id: 26, src: '/images/lectures/gallery_26.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/46847387_501890176963557_9115443056349282304_n.jpg' },
        { id: 27, src: '/images/lectures/gallery_27.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/Capture-decran-2016-09-23-a-13.02.57.png' },
        { id: 28, src: '/images/lectures/gallery_28.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/hubcite-modele-africain-smart-city-Les-Smart-Grids-4-1.jpg' },
        { id: 29, src: '/images/lectures/gallery_29.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault.jpg' },
        { id: 30, src: '/images/lectures/gallery_30.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/Capture-decran-2016-09-18-a-15.51.38-1000x458-1.png' },
        { id: 31, src: '/images/lectures/gallery_31.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/4_Lectures-1-1.png' },
        { id: 32, src: '/images/lectures/gallery_32.jpeg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/11221521_1050973144914522_1108989281455353354_n-1.jpeg' },
        { id: 33, src: '/images/lectures/gallery_33.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/11412266_10206561376740522_5162404157653836536_n.jpg' },
        { id: 34, src: '/images/lectures/gallery_34.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/60.jpg' },
        { id: 35, src: '/images/lectures/gallery_35.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/P1150862-scaled.jpg' },
        { id: 36, src: '/images/lectures/gallery_36.jpeg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/C0saXgIXAAAZMUO.jpeg' },
        { id: 37, src: '/images/lectures/gallery_37.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/11169775_10206205935534714_7140447124705382023_o.jpg' },
        { id: 38, src: '/images/lectures/gallery_38.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-3.jpg' },
        { id: 39, src: '/images/lectures/gallery_39.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2022/11/226036_4260300353123_371144000_n.jpg' }
    ];

    const lecturesData = [
        {
            title: "La Cosmogonie comme nouveau paradigme du design : Une approche décoloniale",
            link: "https://ecoleanthropocene.universite-lyon.fr/la-cosmogonie-comme-nouveau-paradigme-du-design-250080.kjsp?RH=1633680335198",
            meta: ["Conférence", "A l’Ecole de l’Anthropocène", "L’Ecole Urbaine de Lyon", "Villeurbane, janvier 2022"]
        },
        {
            title: "Quelle Ville en 2040 ?",
            link: "https://afrique-cities.lemonde.fr/cycle/demain-la-ville-africaine",
            meta: ["Interview avec Laetitia Van Eechout", "Cycle de débats “Demain, la ville Africaine”", "De Rabat au cap, L’Afrique continent durable du 22e siècle", "Le Monde", "Paris, Décembre 2021"]
        },
        {
            title: "De l’art, de la pensée, de la cosmogonie",
            link: "https://www.plumesdafrique37.fr/temps-forts-2021/",
            meta: ["Mohamed Mbougar SARR, prix Goncourt 2021, invite Sénamé Koffi Agbodjinou, Ananda Devi, Séverine Kodjo-Grandvaux", "Festival plumes d’Afrique 2021", "Tours, Novembre 2021"]
        },
        {
            title: "Villes du Futur",
            link: "https://www.welovegreen.fr/think-tank-2021/",
            meta: ["Conférence", "Le Think Tank We Love Green/ Wonderland", "We Love Green", "Paris, Septembre 2021"]
        },
        {
            title: "Civic Tech en Afrique : Citoyens et numérique, acteurs de la démocratie",
            meta: ["Débat avec Rhida Tilli et Alexandre Guibert Lette. Mod. Myriam Mascarello", "Decryptages – Nantes", "Cosmopolis + la maison de l’Afrique", "Nantes, Septembre 2021"]
        },
        {
            title: "Afrofuturisme : La technologie peut- elle changer l’Afrique ?",
            meta: ["Conférence magistrale", "Festival Africlap", "Cité de l’espace", "Toulouse, Juin 2021"]
        },
        {
            title: "Architecture en Afrique : les enjeux d’un continent entre patrimoine et ultra modernité",
            meta: ["Conversation avec Guillaume Koffi et Issa Diabaté", "L’Université populaire du Musée du Quai Branly,", "par Something We Africans Got", "Online, Mai 2021"]
        },
        {
            title: "La ville cosmopolite",
            meta: ["Echange avec Patrick Bouchain", "Sommet de Septembre- Saison Africa2020, avec Le plus Petit Cirque du Monde", "Bagneux, Mars 2021"]
        },
        {
            title: "“ Decolonat ”",
            meta: ["Critical Making Co-Ideation Workshop", "Global Innovation gathering", "Online, Mars 2021"]
        },
        {
            title: "Le “(Low) High Tech »",
            meta: ["Débat avec Ludovic Duhem", "Sommet de Septembre- Saison Africa2020, avec le Musée de Confluences et l’Ecole Urbaine de Lyon", "Lyon, Mars 2021"]
        },
        {
            title: "Les villes africaines en mutation",
            meta: ["Débat avec Kuukuwa Manful", "Sommet de Septembre- Saison Africa2020, avec l’Institut des Cultures d’Islam, Bibliocité et ibliothèque Vaclav Havel", "Paris, Mars 2021"]
        },
        {
            title: "Tisser le temps,",
            meta: ["Conversation avec Jean-Luc Raharimanana", "Culturgest,", "Online, Novembre 2020"]
        },
        {
            title: "Futur des métropoles : une approche africaine et innovante des villes intelligentes",
            meta: ["Les webinaires de La Région Globale.", "Online, Novembre 2020"]
        },
        {
            title: "FABX Live",
            meta: ["Keynote, Août 2020"]
        },
        {
            title: "Semaine Africaine de Sciences Po – ASPA",
            meta: ["“Une vision vernaculaire de la société numérique”", "(Masterclass )", "Paris, Mars 2020"]
        },
        {
            title: "« La nature peut-elle humaniser la ville ? » Une conférence Le Monde Cities et « Le Temps »",
            link: "https://www.hesge.ch/head/evenement/2020/monde-cities-head",
            meta: ["Vers l’urbanocène : la ville comme organisme”", "Dialogue avec Philippe Chiambaretta/ mod Francis Pisani", "Le Monde", "Genève, HEAD- Haute Ecole d’art et de design de Genève 20 Février 2020"]
        },
        {
            title: "Nuit des Idées – CNAM, École Polytechnique, Arts Déco",
            meta: ["Être vivant : Devenir machinique !", "Dialogue avec Stephan-Eloïse Gras", "Paris, Janvier 2020"]
        },
        {
            title: "Festival Building Beyond – Léonard/ Groupe Vinci Biomimétisme, biodiversité et villes : greenwashing ou révolution verte ?",
            meta: ["Débat avec Philippe Clergeau, Anouck Legendre, Chloé Lequette", "Paris, Juin 2019"]
        },
        {
            title: "FUTUR.E.S",
            meta: ["“2030 : innover en mode sans échec “", "Débat avec Marie Ekeland, Thanh Nghiem", "Paris, Juin 2019"]
        },
        {
            title: "Forum UNESCO- NetExplo Smart City Accelerator",
            meta: ["“La Civilisation contre le Systeme du Monde”", "Keynote", "Paris, Avril 2019"]
        },
        {
            title: "Journée d’étude Learn & Makers – UTT-Tech-CICO, Université de Nice, INRA/AgroParisTech",
            meta: ["“Internet of Food ! Cultiver la ville”", "(Partage d’expérience avec Jean-Pierre Cahier, Emmanuel Kessous)", "Paris, Février 2019"]
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
                            src="/images/lectures_portrait.png"
                            alt="LECTURES . TALKS . KEYNOTES . PANELS"
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
                        <h1 className="page-title">LECTURES . TALKS . KEYNOTES . PANELS</h1>
                    </div>

                    <div className="content-wrapper">

                        <div className="lectures-list">
                            {lecturesData.map((lecture, index) => (
                                <div key={index} className="lecture-item">
                                    {lecture.link ? (
                                        <a href={lecture.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            <h3 className="item-title linked">{lecture.title}</h3>
                                        </a>
                                    ) : (
                                        <h3 className="item-title unlinked">{lecture.title}</h3>
                                    )}
                                    <div className="item-meta">
                                        {lecture.meta && lecture.meta.map((line, idx) => (
                                            <p key={idx} className="meta-line">{line}</p>
                                        ))}
                                    </div>
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
                    background-color: #ffffff;
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
                    margin-top: 60px;
                }
                .grid-item { position: relative; width: 100%; padding-bottom: 100%; background: #ccc; overflow: hidden; }
                /* Removed grayscale filter */
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
                
                
                .lecture-item { margin-bottom: 30px; }
                
                .item-title { font-size: 13px; font-weight: bold; margin: 0 0 5px 0; text-transform: uppercase; transition: color 0.3s ease; }
                
                /* Only linked items are yellow and point cursor */
                .item-title.linked { color: #e6e600; cursor: pointer; }
                .item-title.linked:hover { color: #bfbf00; text-decoration: underline; }
                
                /* Unlinked items are black and default cursor */
                .item-title.unlinked { color: #000; cursor: default; }

                .item-meta { font-size: 11px; color: #000; }
                .meta-line { margin: 0 0 2px 0; line-height: 1.4; color: #555; }
            `}</style>
        </div>
    )
}
