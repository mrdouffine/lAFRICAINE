
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLightbox } from '../../components/Lightbox';



export default function Press() {
    const pressItems = [
        {
            org: "Forbes Afrique",
            title: "Sénamé Koffi Agbodjinou, l’architecte qui bâtit les consciences",
            url: "https://forbesafrique.com/sename-koffi-agbodjinou-larchitecte-qui-batit-les-consciences/"
        },
        {
            org: "Forbes Afrique",
            title: "Architecture : les bâtisseurs stars du continent",
            url: "https://forbesafrique.com/architecture-les-batisseurs-stars-du-continent/"
        },
        {
            org: "Le Point",
            title: "« Une gouvernance sans limite, ni légale ni temporelle » : deux intellectuels togolais alertent",
            url: "https://www.lepoint.fr/afrique/une-gouvernance-sans-limite-ni-legale-ni-temporelle-deux-intellectuels-togolais-alertent-25-06-2025-2592979_3826.php"
        },
        {
            org: "Brennpunkt",
            title: "Habiter la terre et faire monde en commun",
            url: "https://www.brennpunkt.lu/article/habiter-la-terre-et-faire-monde-en-commun/"
        },
        {
            org: "Brennpunkt",
            title: "Regards croisés sur : la révolution digitale",
            url: "https://www.brennpunkt.lu/article/regards-croises-sur-la-revolution-digitale/"
        },
        {
            org: "L’Echo",
            title: "Sénamé Koffi Agbodjinou : « L'architecture occidentale en Afrique n'est pas moderne »",
            url: "https://www.lecho.be/culture/architecture/sename-koffi-agbodjinou-l-architecture-occidentale-en-afrique-n-est-pas-moderne/10538005.html"
        },
        {
            org: "Jeune Afrique",
            title: "Kéré, Koffi et Diabaté, Adjaye… Cinq architectes de l’Afrique de demain",
            url: "https://www.jeuneafrique.com/1597328/culture/kere-koffi-et-diabate-adjaye-cinq-architectes-de-lafrique-de-demain/"
        },
        {
            org: "Air Côte d'Ivoire – Le MAG #55",
            title: "Sename Koffi A. relie la ville à la nature",
            url: "https://trcp.fr/lemag55/"
        },
        {
            org: "2050",
            title: "Sénamé Koffi: Taking Control of Destiny to Impose a Pan-African Vision of the Smart City",
            url: "https://2050.do/sename-koffi-taking-control-of-destiny-to-impose-a-pan-african-vision-of-the-smart-city/"
        },
        {
            org: "Le Courrier de l’UNESCO – Entretien par Laetitia Kaci",
            title: "Sénamé Koffi Agbodjinou : “Today's African city is the product of a rupture with nature”",
            url: "https://courier.unesco.org/en/articles/sename-koffi-agbodjinou-todays-african-city-product-rupture-nature"
        },
        {
            org: "Le Courrier de l’UNESCO",
            title: "Construire demain : vers un habitat durable",
            url: "https://unesdoc.unesco.org/ark:/48223/pf0000388425"
        },
        {
            org: "AOC Media – Armelle Choplin",
            title: "Repenser l’habitabilité planétaire depuis les villes africaines",
            url: "https://aoc.media/analyse/2023/02/01/repenser-lhabitabilite-planetaire-depuis-les-villes-africaines/"
        },
        {
            org: "Revista Código",
            title: "4 arquitectos africanos : una nueva visión",
            url: "https://revistacodigo.com/lista-4-arquitectos-africanos-una-nueva-vision/"
        },
        {
            org: "Chroniques d’Architecture",
            title: "L’architecture vernaculaire comme remède au capitalisme urbain",
            url: "https://chroniques-architecture.com/architecture-vernaculaire-remede-au-capitalisme-urbain-sename-koffi-agbodjinou/"
        },
        {
            org: "Mediapart",
            title: "Sénamé Koffi Agbodjinou : « Les villes africaines sont un terrain d’expérimentation pour les Gafam »",
            url: "https://www.mediapart.fr/journal/culture-idees/040922/sename-koffi-agbodjinou-les-villes-africaines-sont-un-terrain-d-experimentation-pour-les-gafam"
        },
        {
            org: "Lien Multimedia",
            title: "Senamé Koffi Agbodjinou veut concevoir les villes africaines de demain par l’intelligence collective",
            url: "http://www.lienmultimedia.com/spip.php?article89718"
        },
        {
            org: "WIRED",
            title: "土着の知恵と近代都市が結びつく「ネオ・ヴァナキュラー・シティ」の出現：アフリカにおける都市開発の現在地を考える",
            url: "https://wired.jp/article/neo-vanacular-city/"
        },
        {
            org: "Le Monde",
            title: "Sénamé Koffi Agbodjinou, un utopiste dans sa ville",
            url: "https://www.lemonde.fr/afrique/article/2021/12/05/sename-koffi-agbodjinou-un-utopiste-dans-sa-ville_6104793_3212.html"
        },
        {
            org: "Ville de demain",
            title: "Sys’Woe : HubCité, l’alternative africaine à la smart city se dote d’un système financier et d’une monnaie locale",
            url: "https://villededemain.wordpress.com/2020/11/07/syswoe-hubcite-lalternative-africaine-a-la-smart-city-se-dote-dun-systeme-financier-et-dune-monnaie-locale/"
        },
        {
            org: "France 24",
            title: "Sénamé Koffi Agbodjinou : « Ce que sera la ville demain, c’est l’Afrique qui en décidera »",
            url: "https://www.france24.com/fr/afrique/20200817-s%C3%A9nam%C3%A9-koffi-agbodjinou-ce-que-sera-la-ville-demain-c-est-l-afrique-qui-en-d%C3%A9cidera"
        },
        {
            org: "Wall Paper",
            title: "Togo arts centre reopens with show that honours the West African country’s capital",
            url: "https://www.wallpaper.com/architecture/palais-de-lome-archipat-segond-guyon--sara-consult-reopening-exhibition-togo"
        },
        {
            org: "Art Collection+ Design",
            title: "How to Build an African Smart City?",
            url: "http://www.heath.tw/nml-article/how-to-build-an-african-smart-city-interview-with-sename-koffi-agbodjinou/"
        },
        {
            org: "Société Générale",
            title: "The architect and anthropologist designing the African Smart City",
            url: "https://instantsafricains.com/2017/05/18/larchitecte-et-anthropologue-qui-pense-la-smart-city-africaine/"
        },
        {
            org: "Design Indaba",
            title: "On building African smart cities",
            url: "https://www.designindaba.com/articles/creative-work/building-african-smart-cities"
        },
        {
            org: "C&",
            title: "Mapping Lomé From Within",
            url: "https://contemporaryand.com/fr/magazines/mapping-lome-from-within/"
        },
        {
            org: "Usbek & Rica",
            title: "La Smart City sera civilisée par l’Afrique",
            url: "https://usbeketrica.com/fr/article/sename-koffi-agbodjinou-la-smart-city-sera-civilisee-par-l-afrique"
        },
        {
            org: "Futur(e)s – CAP DIGITAL",
            title: "Les Futur.e.s des territoires s’inventent en Afrique",
            url: "https://blog.futuresfestivals.com/edito-les-futur-e-s-de-la-ville-sinventent-en-afrique/"
        },
        {
            org: "LEONARD",
            title: "Paléo-inspiration, socle des constructions du futur?",
            url: "https://leonard.vinci.com/la-paleo-inspiration-socle-des-constructions-du-futur/"
        },
        {
            org: "Les Smart Grids",
            title: "HubCité : un modèle africain de la smart city ?",
            url: "https://les-smartgrids.fr/hubcite-modele-africain-smart-city/"
        },
        {
            org: "L’ADN",
            title: "Pour innover, une nation doit puiser dans ses traditions",
            url: "https://www.ladn.eu/entreprises-innovantes/transparence/pour-innover-une-nation-doit-puiser-dans-ses-traditions/"
        },
        {
            org: "Techpoint",
            title: "Malgré les défis territoriaux, le premier laboratoire d’incubation du Togo, WoeLab, progresse avec détermination",
            url: "https://techpoint.africa/2018/09/26/woelab-lome-togo-fr/"
        },
        {
            org: "French Web",
            title: "Sénamé Koffi Agbodjinou, l’architecture et anthropologue",
            url: "https://www.frenchweb.fr/sename-koffi-agbodjinou-larchitecte-et-anthropologue-qui-pense-la-smart-city-africaine/332436"
        },
        {
            org: "CNN",
            title: "How a West African lab made a 3D printer from toxic e-waste",
            url: "https://edition.cnn.com/2017/11/28/africa/3d-printer-electronic-waste/index.html"
        },
        {
            org: "Le Monde Afrique",
            title: "A Lomé, l’architecte Sénamé Koffi veut transposer les vertus du village africain à la ville",
            url: "https://www.lemonde.fr/afrique/article/2017/08/11/a-lome-sename-koffi-agbodjinou-veut-transposer-les-codes-du-village-a-la-ville_5171569_3212.html"
        },
        {
            org: "Primante 3D",
            title: "8 mois plus tard WoeLab inaugurait la première imprimante 3D africaine",
            url: "http://www.primante3d.com/wafate-28072017/"
        },
        {
            org: "MediaLibre",
            title: "À Lomé, les makers se réapproprient la ville",
            url: "https://atavist.com/"
        },
        {
            org: "Jeune Afrique",
            title: "Afrique de l’Ouest : des architectes… archidoués",
            url: "https://www.jeuneafrique.com/mag/311422/societe/afrique-de-louest-architectes-archidoues/"
        },
        {
            org: "Jeune Afrique",
            title: "« Ce mélange social, vous ne le trouverez nulle part ailleurs »",
            url: "https://www.jeuneafrique.com/mag/363595/economie/sename-koffi-agbodjinou-createur-dun-fablab-a-lome-melange-social-ne-trouverez-nulle-part-ailleurs/"
        },
        {
            org: "Le Point Afrique",
            title: "Diaspora : Sénamé Koffi Agbodjinou, un pionnier du numérique",
            url: "https://www.lepoint.fr/economie/diaspora-sename-koffi-agbodjinou-un-pionnier-du-numerique-21-07-2015-1950376_28.php"
        },
        {
            org: "Afrique Méditerranée Business",
            title: "SÉNAMÉ KOFFI AGBODJINOU Le bâtisseur",
            url: "http://www.ambusinessmagazine.com/posts/post/362"
        },
        {
            org: "Forbes Afrique",
            title: "Togo : La technologie à portée de tous",
            url: "https://forbesafrique.com/Togo-La-technologie-a-portee-de-tous_a3317.html"
        },
        {
            org: "Orange Entrepreneurs",
            title: "Silicon Villa, une fabrique de start-up au cœur de Lomé",
            url: "https://entrepreneurclub.orange.com/fr/actualites/togo-siliconvilla-une-fabrique-de-startup-au-coeur-de-lome.html"
        },
        {
            org: "UNESCO.org",
            title: "Génération afropreneurs",
            url: "https://fr.unesco.org/courier/2017-avril-juin/generation-afropreneurs"
        },
        {
            org: "BBC",
            title: "Woelab, le laboratoire qui recycle les déchets électroniques",
            url: "https://www.bbc.com/afrique/monde-38577228"
        },
        {
            org: "Land of African Business",
            title: "Sénamé Koffi Agbodjinou – founder of L’Africaine d’Architecture",
            url: "https://lelab.info/sename-koffi-agbodjinou-founder-of-lafricaine-darchitecture-and-woelab/"
        },
        {
            org: "Les echos",
            title: "Une imprimante 3D fabriquée à partir de rebuts",
            url: "https://www.lesechos.fr/2015/03/une-imprimante-3d-fabriquee-a-partir-de-rebuts-245802"
        },
        {
            org: "The Veolia Institute Review",
            title: "Horizon 2030 pour les « Smart Cités » africaines",
            url: "https://www.institut.veolia.org/fr/horizon-2030-smart-cites-africaines"
        }
    ];

    const additionalMentions = [
        {
            title: "Magazine K-World N°0002",
            text: "“L’architecture africaine, un potentiel économique sous-estimé.” (Jan-Feb 2021)"
        },
        {
            title: "Technologies partout, démocratie nulle part",
            text: "Plaidoyer pour que les choix technologiques deviennent l’affaire de tous (Irénée Régnauld, Yaël Benayoun, FYP Éditions, 2020)"
        },
        {
            title: "Makan – “Informal Utopias”",
            text: "“ L’informel, une technologie en soi ? ” (Interview) (Think Tanger, 2020)"
        },
        {
            title: "L’ADN 07 2018",
            text: "“Made in Africa\" (Laura Dubé)"
        },
        {
            title: "Magazine Calebasse N°32",
            text: "“Il connecte le Togo” (June-July 2016)"
        }
    ];

    const galleryImages = [
        "/images/press/mc_mag_single_1_5_80_80-724x1024-1-724x800.jpeg",
        "/images/press/002_50-724x1024-1-724x800.jpeg",
        "/images/press/A98A3B43-7303-4699-A110-498D3048CF56-724x1024-1-724x800.jpeg",
        "/images/press/0F2BFD4F-0695-44FF-8D63-B421907D3ACE-724x1024-1-724x800.jpeg",
        "/images/press/11-2.png",
        "/images/press/11-3.png",
        "/images/press/11-4-1000x698.png",
        "/images/press/11-5-1000x698.png",
        "/images/press/a-1-1000x800.jpeg",
        "/images/press/a-1000x800.jpeg",
        "/images/press/5-3-1000x800.jpg",
        "/images/press/5-4-1000x800.jpg",
        "/images/press/5-5-1000x800.jpg",
        "/images/press/8-2-1000x800.jpg",
        "/images/press/8-3-1000x800.jpg",
        "/images/press/8-4-1000x800.jpg",
        "/images/press/4-1000x800.jpeg",
        "/images/press/4-1-1000x800.jpeg",
        "/images/press/4-2-1000x800.jpeg",
        "/images/press/4-3-1000x800.jpeg",
        "/images/press/sename_117619518_783890852353608_7216961914847536695_n-1000x720.jpg",
        "/images/press/thinktanger_117357672_773635446774795_4107940254392304889_n-1000x720.jpg",
        "/images/press/1039_multi_3ukll_sename-koffi-agbodjinou-ce-que-sera-la-ville-demain-c-est-l-afrique-qui-en-deciderafvzkuv-H.jpg",
        "/images/press/19113792_1474607945929725_1257276769686169594_n.jpg",
        "/images/press/sename_ladneu-1.png",
        "/images/press/Capture-ecran-2022-02-20-21.10.09-1.png",
        "/images/press/tumblr_njyekojvfg1u8b26vo4_640.jpg",
        "/images/press/3-2.png"
    ];

    const { open, lightbox } = useLightbox(galleryImages);

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
                            src="/images/press_portrait.png"
                            alt="Sename Koffi Agbodjinou"
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
                    <div className="title-section">
                        <h1 className="page-title">PRESS . MEDIAS . MENTIONS</h1>
                    </div>

                    <div className="press-list">
                        {pressItems.map((item, index) => (
                            <div key={index} className="press-item">
                                <span className="org-name">{item.org}</span>
                                <Link href={item.url} target="_blank" className="article-link">
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="additional-section">
                        <p className="section-divider">. . . . . . . . . . . . . . . . . . . . . .</p>
                        <h3 className="mentions-title">PRINT : </h3>
                        {additionalMentions.map((item, index) => (
                            <div key={index} className="mention-item">
                                <strong>{item.title}</strong>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="gallery-section">
                        <div className="images-grid-container">
                            {galleryImages.map((src, index) => (
                                <div key={index} className="grid-item">
                                    <a href={src} onClick={open(index)}>
                                        <img src={src} alt={`Press gallery ${index}`} className="grid-img" />
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
                    margin-bottom: 20px;
                }

                .nav-link {
                    color: #000;
                    text-decoration: none;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }
                .nav-link:hover { opacity: 1; }

                .main-layout {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 320px 1fr; 
                    gap: 60px; 
                }

                .left-column {
                    display: flex;
                    flex-direction: column;
                    width: 320px;
                    position: sticky;
                    top: 30px;
                    height: fit-content;
                }

                .photo-container {
                    width: 320px;
                    height: 380px; 
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
                    margin: 0 0 10px 0;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .short-bio-text {
                    font-size: 10px;
                    line-height: 1.6;
                    letter-spacing: 0.01em;
                }
                .short-bio-text p { margin: 0; }

                .right-column {
                    display: flex;
                    flex-direction: column;
                }

                .title-section {
                    margin-bottom: 40px;
                    padding-top: 340px; /* Align with bottom of photo */
                }

                .page-title {
                    font-size: 28px;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    margin: 0;
                    text-transform: uppercase;
                }

                .press-list {
                    margin-bottom: 50px;
                }

                .press-item {
                    margin-bottom: 22px;
                }

                .org-name {
                    display: block;
                    font-size: 11px;
                    font-weight: bold;
                    margin-bottom: 4px;
                }

                .article-link {
                    font-size: 12px;
                    color: #e2be00; /* Yellow from reference */
                    text-decoration: none;
                }
                .article-link:hover { text-decoration: underline; }

                .additional-section {
                    margin-top: 30px;
                    margin-bottom: 50px;
                }

                .section-divider {
                    font-size: 14px;
                    letter-spacing: 5px;
                    margin-bottom: 30px;
                }

                .mentions-title {
                    font-size: 11px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }

                .mention-item {
                    margin-bottom: 18px;
                    font-size: 11px;
                    line-height: 1.5;
                }
                .mention-item strong { display: block; margin-bottom: 2px; }
                .mention-item p { margin: 0; color: #e2be00; }

                .gallery-section {
                    margin-top: 40px;
                }

                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 15px;
                    width: 100%;
                }
                .grid-item { 
                    position: relative; 
                    width: 100%; 
                    padding-bottom: 125%; /* Taller aspect ratio as seen in gallery */
                    background: #c0c0c0; 
                    overflow: hidden; 
                }
                .grid-img { 
                    position: absolute; 
                    top: 0; 
                    left: 0; 
                    width: 100%; 
                    height: 100%; 
                    object-fit: cover; 
                    transition: transform 0.4s ease, filter 0.4s ease; 
                }
                .grid-img:hover { 
                    transform: scale(1.05); 
                }

                @media (max-width: 900px) {
                    .main-layout {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .left-column {
                        position: relative;
                        top: 0;
                        width: 100%;
                        align-items: center;
                    }
                    .title-section {
                        padding-top: 0;
                        text-align: center;
                    }
                    .images-grid-container {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </div>
    );
}
