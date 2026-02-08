"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Tech() {
    const galleryImages = [
        { id: 1, src: '/images/tech/0-1.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/0-1.png' },
        { id: 2, src: '/images/tech/1-9-1000x720.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/1-9-1000x720.jpg' },
        { id: 3, src: '/images/tech/2-9.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/2-9.jpg' },
        { id: 4, src: '/images/tech/3-3.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/3-3.png' },
        { id: 5, src: '/images/tech/4-7.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/4-7.jpg' },
        { id: 6, src: '/images/tech/5-3-1000x764.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/5-3-1000x764.png' },
        { id: 7, src: '/images/tech/6-3.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/6-3.png' },
        { id: 8, src: '/images/tech/7-3.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/7-3.png' },
        { id: 9, src: '/images/tech/8-4.png', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/8-4.png' },
        { id: 10, src: '/images/tech/9-3-1000x720.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/9-3-1000x720.jpg' },
        { id: 11, src: '/images/tech/10-3-1000x720.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/10-3-1000x720.jpg' },
    ];

    const projects = [
        {
            icon: '/images/tech_icons/urbanattic.png',
            title: 'URBANATTIC',
            description: 'Plateforme qui vise à coordonner les activités d\'un réseau de "Greniers urbains" pour une production sur de petits espaces et le développement du réflexe de consommation de cultures bio. Vous pouvez créer un profil pour y acheter votre panier bio, proposer votre terrain à exploiter, votre force de travail pour la mise en valeur des potagers, "partager" votre recette, réserver pour votre entreprise ou école la cuisine partagée ou encore vous inscrire au prochain FoodHackathon, etc.'
        },
        {
            icon: '/images/tech_icons/syswoe.png',
            title: 'SYS\'WOE',
            description: 'Système créé spécialement pour l\'échange de biens et services dans la HubCity, ville idéale rêvée par les WoeLabs. Il se compose d\'une monnaie alternative « Woe », disponible à partir de l\'application « Sys » sur Google Play Store. Sys participe d\'un engagement, de bientôt une décennie, dans la relocalisation et la "déréalisation" de l\'économie. Dans la pratique, les utilisateurs de cette monnaie virtuelle, peuvent faire des achats chez tous les distributeurs intégrés du territoire HubCité.'
        },
        {
            icon: '/images/tech_icons/scope.png',
            title: 'SCOPE',
            description: 'Plateforme pour une collecte intelligente de déchets plastiques : système d\'alerte (ecobeep), suivi en temps réel de la collecte, information et sensibilisation des populations, mise à disposition de la Data, sont quelques fonctionnalités de la plateforme #Mizãmike. SCoPE permet aux ménages et instituts d\'intégrer petit à petit de bonnes pratiques de la gestion du cadre de vie en attendant un horizon où des poubelles smart seraient déployées dans le paysage urbain.'
        },
        {
            icon: '/images/tech_icons/woebots.png',
            title: 'WOEBOTS',
            description: 'est une startup qui fabrique, en open source, des imprimantes 3D #LowHighTech pour jeune public. La startup à l\'origine de la première imprimante 3D "Made in Africa" et entièrement conçue en e-déchet, pilote plusieurs initiatives sociales originales regroupées sous le programme mère 3DprintAfrica dont l\'objectif est de mettre cette technologie, dont tous disent qu\'elle sera à l\'origine de la prochaine Révolution industrielle; entre toutes les mains.'
        },
        {
            icon: '/images/tech_icons/plus.png',
            title: 'PLUS',
            description: 'Application mobile qui mappe et rend visible des figures, des lieux ou des événements des villes africaines. Elle recense et propose la découverte des acteurs influents et dynamiques des villes à travers leur biographie, leur activités, leurs actions et les liens vers leurs pages sur les réseaux sociaux, mais aussi fait un zoom sur leur évènement ou lieux qu\'ils ont créé. PLUS permet aussi de participer à des expositions, de visiter des galeries et tout autre centre culturel des villes qui sont mis sur l\'application.'
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
                            src="/images/tech_portrait.png"
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
                            <p>Autor, curator, tech- activist &amp; entrepreneur,</p>
                            <p>Founder : L'Africaine d'architecture,</p>
                            <p>Founder, funder, catalyst : WoeLab.</p>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="title-wrapper">
                        <h1 className="page-title">TECH</h1>
                    </div>

                    <div className="content-wrapper">
                        <h2 className="section-title">HUBCITY : 'REIMAGINING CITY LIFE ON THE BASIS OF COMMONS' !</h2>

                        <p>L'Africaine d'architecture teste depuis juillet 2012 sur Lomé, son utopie urbaine : « HubCités Africaines » qui a déclenché le déploiement du réseau d'incubateurs WoeLab(s), devenu le principal émulateur de la scène tech togolaise.</p>

                        <p>Le problème de l'urbanisation accélérée des villes africaines porte à croire que dans un horizon très proche les villes africaines rencontreront d'innombrables problèmes si elles continuent d'être organisées ou conçues selon la vision des décideurs (approche top down ou monopolistique). La solution à ces problèmes serait de construire ces dernières selon le contexte africain plutôt que d'importer les modèles des villes occidentales et chercher à les adapter aux réalités africaines. C'est dans cette optique qu'est né le programme hubcité/ silicon village, une critique de la smart city classique, qui vise à mettre en place un nouveau concept de la ville africaine.</p>

                        <p>Le projet HubCité se positionne en alternative aux projections officielles de la "Smart City", généralement élitistes et dont la dynamique est top-down. Il entend fournir aux citadins mêmes les moyens d'une reconquête de l'initiative urbaine grâce à la fréquentation d'open- lieux installés dans la proximité, dédiés à l'apprentissage et l'émulation autour des nouvelles technologies et de la culture startup. Ces lieux d'innovation partagée, ouverts librement à tous et dédiés au travail collaboratif, véritables "Espaces de Démocratie Technologique" visent l'innovation sociale par une appropriation responsable et éthique de la révolution digitale. Ils favorisent les usages à faible empreinte environnementale, les projets en source ouverte et la fabrication contributive au travers la culture fablab dont WoeLabs est pionnier en Afrique.</p>

                        <p>Il s'agit de "fabriquer" la smart city à caractère inclusive où toute la population participe à la construction de la cité de demain, une ville qui n'abandonne pas l'ancienne ville mais l'adapte plutôt aux nouvelles technologies. Cette approche démocratisée fonctionne grâce au déploiement dans la ville d'un réseau de lieux ou tech-hub ouverts à tous et promouvant l'esprit du partage. Ces lieux fonctionnent comme un smart grid qui a vocation de devenir à la fois le grenier, la centrale électrique… de son environnement. Chaque lieu résout un problème spécifique en recyclant grâce aux nouvelles technologies ses ressources locales (humaine, matérielle…) et lance des projets qui peuvent concrètement changer la ville.</p>

                        <p>Deux premiers espaces, à la fois fabLab, farmLab, centre de ressources numériques, coworking-space et startup- studio, ont été installés dans le cadre de HubCité Lomé : WoeLab Zéro et WoeLab Prime ! Ce sont aujourd'hui, deux institutions d'innovation partagée résolument inscrits dans leur territoire et atypiques qui rendent possible la mutualisation des intelligences, le brassage de populations diverses. Il s'y explore dans une logique #LowHighTech, les subtilités de la révolution digitale : Impression 3D, IoT, BigData, IA, blockchain etc. WoeLabs est depuis 2012, par sa présence systématique sur les plus grands événements, conférences et colloques (SXSW, Republica, World MakerFaire, VivaTech, etc.) à l'avant-garde du questionnement de ces bouleversements et leurs implications pour le continent. L'Africaine d'architecture / WoeLabs a ainsi développé une expertise reconnue et consacrée par les rassemblements internationaux majeurs, décrochant de nombreux prix d'innovation.</p>

                        <p style={{ marginTop: '30px', marginBottom: '20px', fontStyle: 'italic' }}>L'architecture du réseau s'appuie sur deux clusters tech à Lomé (WoeLab Zero et WoeLab Prime) et des projets emblématiques :</p>

                        <div className="projects-section">
                            {projects.map((project, index) => (
                                <div key={index} className="project-item">
                                    <div className="project-header">
                                        <img src={project.icon} alt={project.title} className="project-icon" />
                                        <h3 className="project-title">{project.title}.</h3>
                                    </div>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="section-title" style={{ marginTop: '50px' }}>#3Dprinting : Wafate + Tavio</h2>

                        <p>Initiée en 2012, Woebots #1 - Wafate est le projet de la première imprimante 3D "Made in Africa". La spécificité de cette machine est qu'elle est élaborée à partir de déchets informatiques. Il est à la base de plusieurs initiatives sociales originales dont l'objectif est de mettre entre toutes les mains une technologie dont on dit qu'elle sera à l'origine de la prochaine Révolution industrielle. Développée dans sa philosophie #LowHighTech, la Wafate est surtout pour la communauté des WoeLabs un engagement pour que l'Afrique ne soit pas décrochée sur les bouleversements à venir dans les systèmes de production. C'est aussi de fait, une contribution significative à la définition du mouvement de la consommation contributive et à l'Éthique Hacker !</p>

                        <p>Une Woebots semi- artisanale est en développement depuis 2017 pour le jeune public. Ce nouveau prototype s'appelle la Tavio.</p>

                        <p><strong>Awards :</strong> "Best Mission Concept" /NASA International Space Apps Challenge 2013, sacrée "Meilleure Innovation Africaine" au Africa Innovation Summit /Praia 2014, Global Fab Awards de la meilleure invention jamais sortie d'un FabLab /Barcelone 2014 et Prix de l'Observatoire NetExplo /Paris 2015.</p>

                        <div className="images-grid-container">
                            {galleryImages.map((image) => (
                                <div key={image.id} className="grid-item">
                                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                                        <img src={image.src} className="grid-img" alt={`Tech Gallery ${image.id}`} />
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
                
                .section-title {
                    font-size: 13px;
                    font-weight: bold;
                    margin: 30px 0 20px 0;
                    text-transform: uppercase;
                }

                .projects-section {
                    margin: 30px 0;
                }

                .project-item {
                    margin-bottom: 30px;
                }

                .project-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                }

                .project-icon {
                    width: 40px;
                    height: 40px;
                    object-fit: contain;
                }

                .project-title {
                    font-size: 13px;
                    font-weight: bold;
                    margin: 0;
                }

                .project-desc {
                    font-size: 11px;
                    margin: 0;
                    line-height: 1.5;
                    text-align: justify;
                }
                
                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 5px;
                    width: 100%;
                    margin-top: 50px;
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
