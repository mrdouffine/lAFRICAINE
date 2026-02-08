
"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Commitment() {
    const opencodeImages = [
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/1-8.jpg',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/2-8.jpg',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/3-7.jpg',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/4-6.jpg',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/5-8.jpg',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/6-3.jpg',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/7-4.jpg',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/8-5.jpg',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/9-2.jpg'
    ];

    const girlbossImages = [
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/10.png',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/9.png',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/8-1.png',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/7-1.png',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/6-1.png',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/5-1.png',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/4.png',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/3-1.png',
        'https://sename.lafricaine.org/wp-content/uploads/2021/11/2.png'
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
                            src="https://sename.lafricaine.org/wp-content/uploads/2021/11/12_Commitments.png"
                            alt="COMMITMENTS"
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
                        <h1 className="page-title">COMMITMENTS</h1>
                    </div>

                    <div className="content-wrapper">

                        <div className="section">
                            <h2 className="section-title">HUBCITÉ / WOELAB</h2>
                            <p>Installé en Août 2012, WoeLab est le premier laboratoire libre d’innovation sociale et technologique du Togo, mis en place dans le cadre de l’utopie urbaine « Lomé HubCité africaine » développée par la plate-forme L’Africaine d’Architecture et son créateur Sénamé Koffi Agbodjinou.</p>

                            <p>HubCité est un projet d’urbanisme alternatif et participatif qui questionne les approches classiques réglementaires et élitistes en proposant un modèle où les citadins-mêmes prennent en charge le destin de leur quartier. Ceci grâce à l’installation dans un territoire donné d’un réseau de tech-hubs de proximité, facilement réplicables, ouverts à tous, promouvant l'esprit du partage et incubant une technologie #LowHighTech. Les habitants se sentent les coachs les plus modestes de la population. Les petits pas après l’autre, grâce à la fréquentation de ces lieux, les apprentis de la modification collective, s’approprient par la main, la faculté de penser, projeter et fabriquer par elles-mêmes la cité de demain.</p>

                            <p>L'ambition est de faire « fabriquer » la ville par des entreprises qui en sortiraient. Les 11 startups collaboratives créées et incubées à WoeLab dans le cadre du programme SiliconVillage sont construites sur l'intuition que l'entrepreneur est amené à remplacer l'architecte, l'urbaniste ou le décideur dans la production de la ville. Elles travaillent toutes sur des thématiques urbaines : gestion des déchets, mobilité, question des ressources etc.</p>

                            <p>WoeLab Zero est le premier espace configuré pour tester cette utopie et concevoir tout le système-mère du projet HubCité.</p>

                            <p>« Petite république numérique » au quartier Djidjolé, historiquement « WoeLab : réseau de rien », maintenant « Silicon Village », WoeLab est un espace d’innovation partagée où s’élabore au quotidien de nouvelles approches de la collaboration productive et urbaine en contexte africain, suivant les codes-usagers : #LowHighTech. Ses prérogatives sont : – Centre de Ressources Numériques, incubateur de Technologie. Le lieu héberge en cadence du potentiel technologique qui ne demande qu'à être extériorisé sous la double condition du libre et de la transparence ; – Pépinière de structures des domaines web, numérique et TIC ; – Espace d’expression privilégiée de la Démocratie Technologique ; – Diffuseur d’une connaissance (Tech/Agric/Eco) accessible à tous : assistance mutuelle bénévole, accompagnement technologique gratuit pour les artisans de quartier, reconquête du pouvoir de faire, rencontre dans l'intelligence Sociale, Collaboration Universitaire et Volet Recherche. Partenariats avec les centres de recherche et les écoles de design. Appui aux institutions dans la démarche de coconstrucion de leurs propre politique.</p>

                            <p>C’est devenu un lieu sociologique, le seul dans le pays, qui rend possible la mutualisation des ressources et le brassage de populations diverses, prônant un atypisme des usages à faible empreinte écologique. Sa mission est entre autre de susciter, encourager, supporter et vulgariser des technologies de rupture. Ce qui distingue WoeLab de tous les autres laboratoires d’innovation classiques réside aussi bien que son inscription dans les amitiés traditionnelles africaines et fait la part belle à l’esprit de communauté. WoeLab est aujourd’hui une trentaine de pensionnaires, avec une moyenne d’âge de 19 ans et 30 cent par mois.</p>

                            <p>Le meilleur ambassadeur de cette vision de société est incidemment devenu la Woebots1 – Wafate, première imprimante 3D africaine et entièrement développée en rebuts informatiques recyclés.</p>

                            <p className="item-meta">(Faire la part aussi à WoeLab Prime)</p>
                        </div>

                        <div className="section" style={{ marginTop: '60px' }}>
                            <h2 className="section-title">#OPENCODEACADEMY / #3DprintAfrica Educativ</h2>
                            <p>
                                <a href="https://docs.google.com/presentation/d/1GrpICcLuY-mSofpFKoRdzTd_aOB3C4mZH2qj0-ePU4k/edit#slide=id.gba7ef0bfa2_0_0" target="_blank" rel="noopener noreferrer" className="highlight-link">
                                    https://docs.google.com/presentation/d/1GrpICcLuY-mSofpFKoRdzTd_aOB3C4mZH2qj0-ePU4k/edit#slide=id.gba7ef0bfa2_0_0
                                </a>
                            </p>

                            <div className="images-grid-container">
                                {opencodeImages.map((src, index) => (
                                    <div key={index} className="grid-item">
                                        <a href={src} target="_blank" rel="noopener noreferrer">
                                            <img src={src} className="grid-img" alt={`OpenCode ${index}`} />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="large-image-wrapper">
                                <a href="https://sename.lafricaine.org/wp-content/uploads/2021/11/10-2.jpg" target="_blank" rel="noopener noreferrer">
                                    <img src="https://sename.lafricaine.org/wp-content/uploads/2021/11/10-2.jpg" className="large-img" alt="OpenCode Large" />
                                </a>
                            </div>
                        </div>

                        <div className="section" style={{ marginTop: '80px' }}>
                            <h2 className="section-title">#GIRLBOSS</h2>

                            <div className="images-grid-container">
                                {girlbossImages.map((src, index) => (
                                    <div key={index} className="grid-item">
                                        <a href={src} target="_blank" rel="noopener noreferrer">
                                            <img src={src} className="grid-img" alt={`GirlBoss ${index}`} />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="large-image-wrapper">
                                <a href="https://sename.lafricaine.org/wp-content/uploads/2021/11/1-2.jpg" target="_blank" rel="noopener noreferrer">
                                    <img src="https://sename.lafricaine.org/wp-content/uploads/2021/11/1-2.jpg" className="large-img" alt="GirlBoss Large" />
                                </a>
                            </div>
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
                
                .section {
                    margin-bottom: 40px;
                }

                .section-title {
                    font-size: 13px;
                    font-weight: bold;
                    margin: 0 0 20px 0;
                    text-transform: uppercase;
                }

                p { margin-bottom: 15px; font-size: 11px; line-height: 1.6; }
                a { color: #000; text-decoration: none; }
                a:hover { text-decoration: underline; }
                
                .highlight-link {
                    color: #eeee00;
                    font-weight: bold;
                    word-break: break-all;
                }
                
                .item-meta {
                    font-size: 10px;
                    font-style: italic;
                    color: #555;
                    margin-top: 20px;
                }

                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 5px;
                    width: 100%;
                    margin: 25px 0 5px 0;
                }
                .grid-item { position: relative; width: 100%; padding-bottom: 66%; background: #eee; overflow: hidden; }
                .grid-item a { display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 2; }
                .grid-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
                .grid-img:hover { transform: scale(1.05); }

                .large-image-wrapper {
                    width: 100%;
                    margin-top: 0px;
                }
                .large-img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

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
