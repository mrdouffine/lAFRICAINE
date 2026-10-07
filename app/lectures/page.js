"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLightbox } from '../../components/Lightbox';


export default function Lectures() {
    const gridImages = [
        { id: 1, src: '/images/lectures/gallery_1.jpeg' },
        { id: 2, src: '/images/lectures/gallery_2.jpg' },
        { id: 3, src: '/images/lectures/gallery_3.jpg' },
        { id: 4, src: '/images/lectures/gallery_4.jpg' },
        { id: 5, src: '/images/lectures/gallery_5.jpg' },
        { id: 6, src: '/images/lectures/gallery_6.jpg' },
        { id: 7, src: '/images/lectures/gallery_7.jpg' },
        { id: 8, src: '/images/lectures/gallery_8.jpg' },
        { id: 9, src: '/images/lectures/gallery_9.jpg' },
        { id: 10, src: '/images/lectures/gallery_10.jpg' },
        { id: 11, src: '/images/lectures/gallery_11.jpg' },
        { id: 12, src: '/images/lectures/gallery_12.jpg' },
        { id: 13, src: '/images/lectures/gallery_13.jpg' },
        { id: 14, src: '/images/lectures/gallery_14.jpeg' },
        { id: 15, src: '/images/lectures/gallery_15.jpg' },
        { id: 16, src: '/images/lectures/gallery_16.jpg' },
        { id: 17, src: '/images/lectures/gallery_17.jpg' },
        { id: 18, src: '/images/lectures/gallery_18.jpg' },
        { id: 19, src: '/images/lectures/gallery_19.jpg' },
        { id: 20, src: '/images/lectures/gallery_20.jpg' },
        { id: 21, src: '/images/lectures/gallery_21.jpg' },
        { id: 22, src: '/images/lectures/gallery_22.jpeg' },
        { id: 23, src: '/images/lectures/gallery_23.jpg' },
        { id: 24, src: '/images/lectures/gallery_24.jpg' },
        { id: 25, src: '/images/lectures/gallery_25.jpg' },
        { id: 26, src: '/images/lectures/gallery_26.jpg' },
        { id: 27, src: '/images/lectures/gallery_27.png' },
        { id: 28, src: '/images/lectures/gallery_28.jpg' },
        { id: 29, src: '/images/lectures/gallery_29.jpg' },
        { id: 30, src: '/images/lectures/gallery_30.png' },
        { id: 31, src: '/images/lectures/gallery_31.png' },
        { id: 32, src: '/images/lectures/gallery_32.jpeg' },
        { id: 33, src: '/images/lectures/gallery_33.jpg' },
        { id: 34, src: '/images/lectures/gallery_34.jpg' },
        { id: 35, src: '/images/lectures/gallery_35.jpg' },
        { id: 36, src: '/images/lectures/gallery_36.jpeg' },
        { id: 37, src: '/images/lectures/gallery_37.jpg' },
        { id: 38, src: '/images/lectures/gallery_38.jpg' },
        { id: 39, src: '/images/lectures/gallery_39.jpg' }
    ];

    const lecturesData = [
        {
            title: "Spatial Cosmology Assembly – Act V",
            link: "https://csc.hcu-hamburg.de/news-24-25-26",
            meta: ["Assembly & Workshop", "Center for Spatial Cosmology", "HafenCity Universität Hamburg", "Hambourg, Juin 2026"]
        },
        {
            title: "Conférence inaugurale",
            link: "https://www.nantes.archi.fr/architectures-des-villes-et-des-iles-entre-lextra-et-lordinaire-heritages-et-bifurcations/",
            meta: ["Rencontres Internationales de Recherche « Architectures des villes et des îles, entre l’extra et l’ordinaire. Héritages et bifurcations »", "ENSA Nantes-Mauritius", "Maurice, Mars 2026"]
        },
        {
            title: "Décolonisation et Épigénétique",
            link: "https://report.az/en/foreign-politics/sename-koffi-agbodjinou-modern-technologies-taking-issue-of-colonialism-to-global-level",
            meta: ["Panel", "Conférence « Neocolonialism and Global Inequality »", "Baku Initiative Group", "Baku, Février 2026"]
        },
        {
            title: "Centenaire Frantz Fanon",
            link: "https://www.fabula.org/actualites/131555/colloque-international-centenaire-frantz-fanon-l-esperance-africaine-de-fanon.html",
            meta: ["Panel", "Colloque international « Une création continue de l'humanité »", "Musée des Civilisations Noires", "Dakar, Décembre 2025"]
        },
        {
            title: "Utopies urbaines et villes en devenir",
            link: "https://www.institutfrancais.com/en/magazine/debating-ideas/our-future-salvador-bahia-november-5-8-2025-sharing-our-places",
            meta: ["Panel avec AbdouMaliq Simone, Zineb Benabderrazik, Isaro Lise Katangulia, David Fontcuberta-Rubio, Thais Troncon Rosa. Mod. Tâmara Terso", "Forum « Notre futur : nos lieux en partage » – Institut français, Saison de la France au Brésil", "Salvador de Bahia, Novembre 2025"]
        },
        {
            title: "Cycle de Conversations Citoyennes",
            link: "https://luca.lu/evenements/festival-des-territoires-resilients",
            meta: ["Festival des Territoires Résilients", "Differdange, Octobre 2025"]
        },
        {
            title: "“La Chape, le Calque / États du Lieu”",
            link: "http://www.rawmaterialcompany.org/_4537",
            meta: ["Conférence publique", "RAW Académie – Session 11", "RAW Material Company", "Dakar, Juin 2025"]
        },
        {
            title: "L’art d’habiter nos territoires : Réinventer nos villes",
            link: "https://www.ut-inscription.com/intervenants/sename-koffi",
            meta: ["Université de la Terre – « Nature = Future »", "UNESCO", "Paris, Mars 2025"]
        },
        {
            title: "Unfolding space: Alternative spatial practices from Africa",
            link: "https://www.aaschool.ac.uk/public/whats-on/unfolding-space-alternative-spatial-practices-from-africa",
            meta: ["Conversation avec Khensani Jurczok-de Klerk et Nzinga Mboup", "Architectural Association", "Londres, Février 2025"]
        },
        {
            title: "index: Planetary coexistence",
            link: "https://www.gnration.pt/en/event/2024/index-sename-koffi-agbodjinou/",
            meta: ["Talk", "gnration", "Braga, Mai 2024"]
        },
        {
            title: "“Restaurer le réel”",
            link: "https://asso.abite.fr/event/rencontre/",
            meta: ["Une habitation décoloniale du monde", "Rencontre – assoabitē & association Permactivie, dans le cadre d’une résidence verte soutenue par la DAC Martinique", "Fort-de-France, Martinique, Avril 2024"]
        },
        {
            title: "Échange d'abondance",
            link: "https://www.mingiwingi.org/_files/ugd/d79913_b4ca022a6d204b6c8018b503de97bd6e.pdf",
            meta: ["« À quoi pourrait ressembler la ville idéale du futur, à Bruxelles, à Kinshasa ou ailleurs ? »", "Avec Olivier Bastin, Séverine Kodjo-Grandvaux, Anne Wetsi Mpoma. Mod. Etienne Minoungou", "Rencontres Mingi Wingi, avec le Master de Design d'innovation sociale de Saint-Luc", "Bruxelles, Mars 2024"]
        },
        {
            title: "Memory Space/s : Decolonial architectures",
            link: "https://dekoloniale.de/en/program/events/memory-space-s-decolonial-architectures",
            meta: ["Input & talk avec Tazalika M. te Reh. Mod. Renée Eloundou & Nadja Ofuatey-Alazard", "Dekoloniale [Re]visions – Each One Teach One (EOTO) e.V.", "Berlin, Février 2023"]
        },
        {
            title: "Decolonising the future",
            link: "https://humanities.uct.ac.za/huma/events/sename-koffi-agbodjinou-decolonising-future",
            meta: ["Ataya: HUMA Interdisciplinary Seminar Series", "University of Cape Town", "(online), Octobre 2022"]
        },
        {
            title: "“For communal digital platforms”",
            link: "https://web.archive.org/web/20230205141155/https://aston-network.org/fr/non-classifiee/rencontre-finale-du-reseau-aston-a-kumasi/",
            meta: ["Keynote at the ASTON Closing Event", "ASTON African Smart Town Network", "Kumasi, Novembre 2022"]
        },
        {
            title: "“L'approche néovernaculaire”",
            meta: ["Conférence", "Îlot Formation", "(online), Novembre 2022"]
        },
        {
            title: "Dialogue Cinema/ Architecture",
            link: "https://imagedeville.org/seances/table-ronde-daniel-kotter-et-sename-koffi/",
            meta: ["Daniel Kötter / Sename Koffi Agbodjinou", "Festival Images de Ville", "Marseille, Septembre 2022"]
        },
        {
            title: "“Du lien et de la liane”",
            link: "https://web.archive.org/web/20240420132104/https://www.marseille.archi.fr/actualites/agenda/sename-koffi-agbodjinou-du-lien-et-de-la-liane-une-ethique-de-modeles-intriques/",
            meta: ["Conférence", "Festival Images de Ville, avec le Conseil Régional de l'Ordre des Architectes PACA, la MAV PACA et l'École Nationale Supérieure d'Architecture de Marseille", "Marseille, Septembre 2022"]
        },
        {
            title: "“À la source”",
            link: "https://lamanufacturedidees.org/2022/05/17/agbodjinou-sename-koffi/",
            meta: ["Dialogue entre l’architecte et anthropologue togolais Sename Koffi Agbodjinou et la géographe et urbaniste Armelle Choplin", "La Manufacture d’Idées", "Hurigny, Août 2022"]
        },
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
            link: "https://cosmopolis.nantes.fr/podcast-civic-tech-en-afrique-citoyens-et-numerique-acteurs-de-la-democratie/",
            meta: ["Débat avec Rhida Tilli et Alexandre Guibert Lette. Mod. Myriam Mascarello", "Decryptages – Nantes", "Cosmopolis + la maison de l’Afrique", "Nantes, Septembre 2021"]
        },
        {
            title: "Afrofuturisme : La technologie peut- elle changer l’Afrique ?",
            link: "https://openagenda.com/toulouse/events/afro-futurisme",
            meta: ["Conférence magistrale", "Festival Africlap", "Cité de l’espace", "Toulouse, Juin 2021"]
        },
        {
            title: "Architecture en Afrique : les enjeux d’un continent entre patrimoine et ultra modernité",
            link: "https://www.quaibranly.fr/fr/visualisation-evenements/e/photographie-a-qui-appartient-le-regard-39027",
            meta: ["Conversation avec Guillaume Koffi et Issa Diabaté", "L’Université populaire du Musée du Quai Branly,", "par Something We Africans Got", "Online, Mai 2021"]
        },
        {
            title: "La ville cosmopolite",
            link: "https://web.archive.org/web/20220811195238/https://www.saisonafrica2020.com/fr/agenda/la-ville-cosmopolite",
            meta: ["Echange avec Patrick Bouchain", "Sommet de Septembre- Saison Africa2020, avec Le plus Petit Cirque du Monde", "Bagneux, Mars 2021"]
        },
        {
            title: "“ Decolonat ”",
            link: "https://globalinnovationgathering.org/critical-making/",
            meta: ["Critical Making Co-Ideation Workshop", "Global Innovation gathering", "Online, Mars 2021"]
        },
        {
            title: "Le “(Low) High Tech »",
            link: "https://web.archive.org/web/20230121103541/https://www.saisonafrica2020.com/en/agenda/le-lowhightech",
            meta: ["Débat avec Ludovic Duhem", "Sommet de Septembre- Saison Africa2020, avec le Musée de Confluences et l’Ecole Urbaine de Lyon", "Lyon, Mars 2021"]
        },
        {
            title: "Les villes africaines en mutation",
            link: "https://web.archive.org/web/20230121103541/https://www.saisonafrica2020.com/en/agenda/villes-africaines-en-mutation",
            meta: ["Débat avec Kuukuwa Manful", "Sommet de Septembre- Saison Africa2020, avec l’Institut des Cultures d’Islam, Bibliocité et ibliothèque Vaclav Havel", "Paris, Mars 2021"]
        },
        {
            title: "Tisser le temps,",
            link: "https://culturgest.pt/en/whats-on/jean-luc-raharimanana-sename-koffi-agbodjinou-weaving-time",
            meta: ["Conversation avec Jean-Luc Raharimanana", "Culturgest,", "Online, Novembre 2020"]
        },
        {
            title: "Futur des métropoles : une approche africaine et innovante des villes intelligentes",
            link: "https://www.gotostage.com/channel/db5d2825493e4345af89602d904a33b3/recording/9590387d862e440b869e32215e3177af/watch?source=CHANNEL",
            meta: ["Les webinaires de La Région Globale.", "Online, Novembre 2020"]
        },
        {
            title: "FABX Live",
            link: "https://fabxlive.fabevent.org/schedule",
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
            link: "https://www.arts-et-metiers.net/musee/la-nuit-des-idees-2020",
            meta: ["Être vivant : Devenir machinique !", "Dialogue avec Stephan-Eloïse Gras", "Paris, Janvier 2020"]
        },
        {
            title: "Festival Building Beyond – Léonard/ Groupe Vinci Biomimétisme, biodiversité et villes : greenwashing ou révolution verte ?",
            link: "https://futures.paris/evenement/biomimetisme-biodiversite-et-villes-greenwashing-ou-revolution-verte/",
            meta: ["Débat avec Philippe Clergeau, Anouck Legendre, Chloé Lequette", "Paris, Juin 2019"]
        },
        {
            title: "FUTUR.E.S",
            link: "https://futures.paris/evenement/2030-pour-eviter-le-404-error-comment-innover-en-mode-sans-echec/",
            meta: ["“2030 : innover en mode sans échec “", "Débat avec Marie Ekeland, Thanh Nghiem", "Paris, Juin 2019"]
        },
        {
            title: "Forum UNESCO- NetExplo Smart City Accelerator",
            link: "https://www.smartcitymag.fr/article/346/netexplo-accompagne-la-montee-en-competence-des-acteurs-des-smart-cities",
            meta: ["“La Civilisation contre le Systeme du Monde”", "Keynote", "Paris, Avril 2019"]
        },
        {
            title: "Journée d’étude Learn & Makers – UTT-Tech-CICO, Université de Nice, INRA/AgroParisTech",
            link: "https://makers.sciencesconf.org/",
            meta: ["“Internet of Food ! Cultiver la ville”", "(Partage d’expérience avec Jean-Pierre Cahier, Emmanuel Kessous)", "Paris, Février 2019"]
        }
    ];



    const { open, lightbox } = useLightbox(gridImages.map((img) => img.src));

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
                            {gridImages.map((image, index) => (
                                <div key={image.id} className="grid-item">
                                    <a href={image.src} onClick={open(index)}>
                                        <img src={image.src} className="grid-img" alt={`Gallery ${image.id}`} />
                                    </a>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {lightbox}

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #BEBEBE;
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
