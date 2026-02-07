
"use client";
import Image from 'next/image';
import Link from 'next/link';


export default function Academic() {
    const gridImages = [
        { id: 1, src: '/images/academic/1-11-1000x721.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/1-11-1000x721.jpg' },
        { id: 2, src: '/images/academic/2-11-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/2-11-1000x800.jpg' },
        { id: 3, src: '/images/academic/3-10.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/3-10.jpg' },
        { id: 4, src: '/images/academic/4-9-1000x573.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/4-9-1000x573.jpg' },
        { id: 5, src: '/images/academic/5-10.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/5-10.jpg' },
        { id: 6, src: '/images/academic/6_Academic-1-1-1000x800.jpg', link: 'https://sename.lafricaine.org/wp-content/uploads/2021/11/6_Academic-1-1-1000x800.jpg' },
    ];

    const sections = [
        {
            title: "COLLOQUES",
            items: [
                {
                    heading: "Les États Généraux de L’Eco",
                    content: "Colloque International du Franc CFA à l’Éco : Quelle monnaie pour quel développement en Afrique de l’Ouest ? (Panel de Clôture)",
                    meta: "Lomé, Mai 2021"
                },
                {
                    heading: "“Redefining a New Cosmo-Ethics of the Inhabitation of the World”",
                    content: <>
                        <a href="https://materialtrajectories.dgtf.de/About" target="_blank" rel="noopener noreferrer" className="highlight-link">Material Trajectories. Designing with Care</a> – 17th Annual Conference of German Society for Design Theory & Research<br />
                        Cluster of Excellence » Matters of Activity | Humboldt-Universität zu Berlin | Weißensee Kunsthochschule Berlin
                    </>,
                    meta: "(online) Mai, 2021"
                },
                {
                    heading: "Les Colloques de Cerisy",
                    content: <>
                        <a href="https://cerisy-colloques.fr/numerique2020/" target="_blank" rel="noopener noreferrer" className="highlight-link">Les angles morts du numérique</a><br />
                        “Computationnalités Primitives”
                    </>,
                    meta: "Cerisy, Septembre 2020"
                },
                {
                    heading: "Les Ateliers de la Pensée",
                    content: <>
                        <a href="https://llcp.univ-paris8.fr/?les-ateliers-de-la-pensee-de-dakar-30-10-02-11-2019" target="_blank" rel="noopener noreferrer" className="highlight-link">Vulnérabilités écologiques, vulnérabilités symboliques</a> (Session : “Ontologies relationnelles”)<br />
                        Communication- Débat avec Felwine Sarr, Séverine Kodjo-Grandvaux, . Bado Ndoye, Nadine Machikou
                    </>,
                    meta: "Dakar, Octobre 2019"
                }
            ]
        },
        {
            title: "INVITATIONS COURS, SÉMINAIRES",
            items: [
                {
                    heading: "“How can Chinese Eco Architecture and Togolese Innovative Communities inform each other?”",
                    content: "Raefer Wallis in conversation with Sénamé Koffi Agbodjinou\nUniversity of Hong Kong\nIn the HKU Common Core taught by Cesar Jung-Harada called: « Our Response to Climate Change: Hong Kong 2100 », Course Code: CCGL9065",
                    meta: "online, mars 2022"
                },
                {
                    heading: "Comprendre l’architecture en Afrique noire : Ressources pour un néovernaculaire",
                    content: "CUAD Collège Universitaire d’Architecture de Dakar",
                    meta: "Dakar, Novembre 2021"
                },
                {
                    heading: "Fablab en Afrique : Innovation radicale ou exotisme technologique?",
                    content: "Faculté de géographie, UFR droit et sciences économiques et sociales de Tours",
                    meta: "Tours, Novembre 2021"
                },
                {
                    heading: "Transition Ecologique & architecture",
                    content: <a href="https://green-management-school.fr/" target="_blank" rel="noopener noreferrer" className="highlight-link">Green Management School</a>,
                    meta: "online, Oct 2021"
                },
                {
                    heading: "“3Dprinting, Future of the architecture in Africa”",
                    content: <>
                        Studio class ‘<a href="https://www.hybrid-plattform.org/en/education/detail/global-makerspaces-critical-perspectives-positions-and-practices" target="_blank" rel="noopener noreferrer" className="highlight-link">Global Makerspace(s) – Critical Perspectives, Positions and Practices</a>’<br />
                        (in close collaboration with the MA program at Habitat Unit (International Urbanism and Design at the TU Berlin)<br />
                        Udk -Université des Arts de Berlin
                    </>,
                    meta: "online, Jan 2021"
                },
                {
                    heading: "“Decolonize the future? A vernacular vision of the digital society”",
                    content: <>
                        <a href="https://www.drlab.org/2020/09/01/virtual-colloquium/" target="_blank" rel="noopener noreferrer" className="highlight-link">Virtual Colloquium “Between the New Dark Age and Tech-Utopia“</a><br />
                        Udk -Université des Arts de Berlin -Design Research Lab –
                    </>,
                    meta: "online, Nov 2020"
                },
                {
                    heading: "“#LowHighTech, Design Perspectives”",
                    content: <>
                        <a href="https://mdef.gitlab.io/mdef-2019/term3/S01.html" target="_blank" rel="noopener noreferrer" className="highlight-link">Design Dialogues/ Master in Design for Emergent Futures.</a><br />
                        IAAC Institute of Advanced Architecture of Catalonia – Barcelona,
                    </>,
                    meta: "online, Mai 2020"
                },
                {
                    heading: "“Critical Making”",
                    content: <a href="http://www.noschoolnevers.com/2019.html" target="_blank" rel="noopener noreferrer" className="highlight-link">NØ SCHOOL – International Critical Design Summer School</a>,
                    meta: "Nevers, Juillet 2019"
                }
            ]
        },
        {
            title: "PROGRAMMES DE RECHERCHE",
            items: [
                {
                    heading: "Projet WAZIUP",
                    content: "International Research Consortium for an Open Innovation Platform for IoT-Big Data in Sub-Sahara Africa\nUE H2020 ICT-2015, PROJECT 687607, 2015-2018\n(With L’A/ WoeLabs)",
                    meta: ""
                }
            ]
        },
        {
            title: "RESEARCH FELLOWSHIP",
            items: [
                {
                    heading: <a href="https://www.weizenbaum-institut.de/en/portrait/p/sename-koffi-agbodjinou/" target="_blank" rel="noopener noreferrer" className="highlight-link">Weizenbaum Institute Visiting Research</a>,
                    content: <>
                        Research Group : <a href="https://www.udk-berlin.de/en/research/research-projects/fakultaetsuebergreifende-forschungsprojekte/verbundprojekte-im-bereich-digitalisierung/die-udk-berlin-im-verbundprojekt-des-weizenbaum-instituts-fuer-die-vernetzte-gesellschaft/forschungsgruppen/critical-maker-culture/" target="_blank" rel="noopener noreferrer" className="highlight-link">Critical Maker Culture</a><br />
                        with UDK- OpenLab, Berlin, 06. 2020 – 12. 2020.
                    </>,
                    meta: ""
                }
            ]
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
                            src="/images/academic_portrait.png"
                            alt="ACADEMIC"
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
                        <h1 className="page-title">ACADEMIC</h1>
                    </div>

                    <div className="content-wrapper">

                        <div className="academic-list">
                            {sections.map((section, index) => (
                                <div key={index} className="section-block">
                                    <h3 className="section-title">{section.title}</h3>
                                    <div className="section-items">
                                        {section.items.map((item, idx) => (
                                            <div key={idx} className="academic-item">
                                                {item.heading && <h4 className="item-heading">{item.heading}</h4>}
                                                {item.content && <p className="item-content">{item.content}</p>}
                                                {item.meta && <p className="item-meta" style={{ whiteSpace: 'pre-line' }}>{item.meta}</p>}
                                            </div>
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

            <style jsx>{`
                .section-block { margin-bottom: 50px; }
                .section-title { font-size: 14px; font-weight: bold; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #000; padding-bottom: 5px; display: inline-block; }
                .academic-item { margin-bottom: 30px; }
                .item-heading { font-size: 13px; font-weight: bold; margin: 0 0 5px 0; }
                .item-content { font-size: 12px; margin: 0 0 5px 0; font-style: italic; }
                .item-meta { font-size: 11px; color: #555; margin: 0; line-height: 1.4; }
                .highlight-link:hover { color: #bfbf00; text-decoration: underline; }
            `}</style>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #b1b1b1;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #000;
                }
                .highlight-link { color: #e6e600; text-decoration: none; transition: color 0.3s ease; cursor: pointer; }
                .highlight-link:hover { color: #bfbf00; text-decoration: underline; }

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
