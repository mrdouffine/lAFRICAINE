"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Architecture() {
    const projects = [
        {
            title: "Village des Cases à Savoirs, Assome",
            link: "https://docs.google.com/presentation/d/1ATySHMJvkHjF-h98N6dUSrdRvmv4rILv-YWxGnEj_I4/edit?usp=sharing"
        },
        {
            title: "Maison des traditions « Gbegbe », Agouegan",
            link: "https://docs.google.com/presentation/d/1IHPkw9f5qGlFFjuvqoMkZxpKR-qI_HTXVWp56ilW07Q/edit?usp=sharing"
        },
        {
            title: "Ecole Essime, Lomé",
            link: "https://docs.google.com/presentation/d/1z88SAvhDITqSe9rg8N7lCW_q6rVrPybTk7G7sASLzXU/edit?usp=sharing"
        },
        {
            title: "Centre Culturel « Dekonou », Aklakou",
            link: "https://docs.google.com/presentation/d/1xZxP-cHxPm6OaOCCraUBIicsbXk7iiYmR7tGAb7SXyM/edit?usp=sharing"
        },
        {
            title: "Villa Essenam, Lomé",
            link: "https://docs.google.com/presentation/d/1qaTOlghVQLznxoxtgiLhUbT6_yz1_TOtzMfE6h8Vk90/edit?ts=60392b49#slide=id.p"
        },
        {
            title: "Les Ateliers, Lomé",
            link: "https://docs.google.com/presentation/d/1Y3P1pdiwd-aC2u7zvhv3wmJRI0qO57J7c_-oKU2VkJI/edit#slide=id.g231079b638_0_1"
        },
        {
            title: "LYSD Salle de Lecture",
            link: "https://docs.google.com/presentation/d/1scrTeDHNgEbnjZpe1RPWQHZOmEDHfGHjrWwD-NVJ_aI/edit#slide=id.g29fcc2d1f3_0_78"
        },
        {
            title: "Tech Park, Lomé",
            link: "https://docs.google.com/presentation/d/1K9I7V1FSzsDqBEyDn7uWMh3ekEi4mUKPD5A9sk3r0wI/edit#slide=id.g3480c907b_20"
        },
        {
            title: "CINA, Aneho",
            sublinks: [
                { label: "Programmation :", link: "https://docs.google.com/presentation/d/1_N5MrIJKnpTsrd9aOPE6p4_OtE9Vj5iB5TY72Uez8h0/edit#slide=id.g120790047c_0_7" },
                { label: "Avant-projet :", link: "https://docs.google.com/presentation/d/1wSvypihrEnkHaPRiRQwxOhKzmoHkUwifQ32SVfNxziE/edit#slide=id.g344ab5a32_00" }
            ]
        },
        {
            title: "Etudes diverses en Voûtes & Coupoles Nubiennes",
            link: "https://docs.google.com/presentation/d/1ifCosRSD8Q3OYUBx5P-TQNXhAICG2PcirKzDG2MIWwA/edit#slide=id.p"
        }
    ];

    const galleryImages = [
        "1-7-1000x720.jpg", "2-1.png", "3-6.jpg", "4-2-1000x767.png", "5-7.jpg", "6-2.png", "7-2.png", "8-3.png", "9-4.png", "10-3.png",
        "11-6.png", "12-2.png", "20-04-06_1119.jpg", "20-04-06_1121.jpg", "27-28-1000x585.png", "2728.png", "Agoe-1000x667.jpg", "Agoe0-1000x651.jpg",
        "Agoe1-1000x658.jpg", "Agoe2-1000x679.jpg", "Agoe3-1000x632.jpg", "Aklakou-1000x699.jpg", "Aklakou0.jpg", "Aklakou1-1000x707.jpg",
        "Aklakou2-1000x673.jpg", "Aklakou3-1000x669.jpg", "Aklakou4-1000x698.jpg", "Aklakou5-1000x667.jpg", "Aklakou8.jpg", "Aklakou9-1000x691.jpg",
        "Aklakou10-1000x714.jpg", "Aklakou11-1000x704.jpg", "C0-1000x767.png", "C2-1000x767.png", "C3-1000x768.png", "C4-1000x764.png",
        "C5-1000x765.png", "C6-1000x768.png", "C7-1000x767.png", "C8-1000x767.png", "C9-1000x768.png", "C10-1000x767.png",
        "C11-1000x768.png", "C12-1000x766.png", "C13-1000x768.png", "EC1-960x800.jpg", "EC2-1000x800.jpg", "EC3-1000x800.jpg",
        "EC4-1000x800.jpg", "EC5-1000x800.jpg", "EC6-1000x800.jpg", "EC7-1000x800.jpg", "EC8-1000x800.jpg", "kouve-1.jpg",
        "Kouve-2-1000x800.jpg", "Kouve-3-1000x800.jpg", "Low0-1000x800.jpeg", "Low1.png", "Low2-1000x800.jpg",
        "Principes-dune-Cosmo-Architecture-_-Projet-pour-la-biennale-darchitecture-de-Venise-2020-1.jpg",
        "Principes-dune-Cosmo-Architecture-_-Projet-pour-la-biennale-darchitecture-de-Venise-2020-2.jpg",
        "Principes-dune-Cosmo-Architecture-_-Projet-pour-la-biennale-darchitecture-de-Venise-2020-3.jpg",
        "Principes-dune-Cosmo-Architecture-_-Projet-pour-la-biennale-darchitecture-de-Venise-2020-4.png",
        "Principes-dune-Cosmo-Architecture-_-Projet-pour-la-biennale-darchitecture-de-Venise-2020.jpg",
        "S1-1000x720.jpg", "S2-720x800.jpg", "S3-864x800.jpg", "S4.jpg", "S5-864x800.jpg", "S6-1000x720.jpg", "S7-1000x720.jpg",
        "S9-1000x720.jpg", "S10-1000x720.jpg", "S11-864x800.jpg", "S13-1000x720.jpg", "S14-1000x720.jpg", "S15-1000x720.jpg",
        "sename_39519319_326711021234916_2347295736674370320_n-1000x800.jpg",
        "sename_39824531_525376814559278_8023936152526011383_n-960x800.jpg",
        "sename_94104000_1016418425420142_7474847611943821805_n.jpg",
        "sename_94580718_279917183007136_39539805397331975_n.jpg",
        "sename_106719685_297955078078354_5099889557149097430_n.jpg",
        "sename_107083070_2670100789873124_3729719738767527886_n.jpg",
        "sename_107567364_286186256010400_5362790856662871297_n.jpg",
        "sename_107870615_275412727117914_8331963730798321172_n.jpg",
        "Tic0.jpeg", "Tic1-1000x768.png", "Tic2-1000x761.png", "TP1.png", "TP2-1000x764.png", "TP3-1000x752.png",
        "TP4-1000x738.png", "TP5-1000x766.png", "TP6-1000x762.png", "TP7-1000x765.png", "TP8-1000x763.png", "TP9-1000x766.png",
        "TP10-1000x763.png", "TP11-1000x766.png", "TP12-1000x762.png", "TP13-1000x763.png", "TP14-1000x761.png",
        "TP15-1000x764.png", "TP16-1000x765.png", "TP17-1000x767.png", "TP18-1000x765.png", "TP19-1000x765.png",
        "TP20-1000x767.png", "TP21-1000x764.png", "TP22.png", "TP23.png", "TP24.png", "TP25-1000x761.png",
        "TP26-1000x766.png", "TP27-1000x767.png", "TP28-1000x766.png", "TP29-1000x767.png", "TP30-1000x767.png",
        "U0-1000x800.jpg", "U1-1000x800.jpg", "U2-1000x800.jpg", "U3-1000x800.jpg", "U4-1000x800.jpg", "U6-1000x800.jpg",
        "U7-1000x800.jpg", "U9-1000x800.jpg", "Z1-1000x766.png", "Z2-1000x760.png", "Z3-1000x749.png", "Z4-1000x761.png",
        "271190649_3151752651769622_6487387870295987645_n-1000x800.jpg",
        "271189643_3151752855102935_5764423264373502719_n-1000x800.jpg"
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
                            width={1024}
                            height={1024}
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
                        <div className="projects-list">
                            {projects.map((project, index) => (
                                <div key={index} className="project-group">
                                    <div className="project-title-text">{project.title}</div>
                                    {project.link && (
                                        <div className="project-link-wrapper">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-external-link">
                                                {project.link}
                                            </a>
                                        </div>
                                    )}
                                    {project.sublinks && (
                                        <div className="sublinks-container">
                                            {project.sublinks.map((sublink, idx) => (
                                                <div key={idx} className="sublink-item">
                                                    <div className="sublink-label">{sublink.label}</div>
                                                    <div className="sublink-link-wrapper">
                                                        <a href={sublink.link} target="_blank" rel="noopener noreferrer" className="project-external-link">
                                                            {sublink.link}
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="images-grid-container">
                            {galleryImages.map((filename, index) => (
                                <div key={index} className="grid-item">
                                    <a href={`/images/architecture/${filename}`} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={`/images/architecture/${filename}`}
                                            className="grid-img"
                                            alt={`Architecture ${index + 1}`}
                                            loading="lazy"
                                        />
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
                }

                .projects-list {
                    margin-bottom: 40px;
                }

                .project-group {
                    margin-bottom: 25px;
                }

                .project-title-text {
                    font-size: 13px;
                    font-weight: bold;
                    margin-bottom: 5px;
                    color: #000;
                }

                .project-link-wrapper {
                    margin-bottom: 5px;
                }

                .project-external-link {
                    color: rgb(255, 223, 0);
                    text-decoration: none;
                    font-size: 13px;
                    word-break: break-all;
                    line-height: 1.4;
                }

                .project-external-link:hover {
                    text-decoration: underline;
                }

                .sublinks-container {
                    margin-top: 5px;
                }

                .sublink-item {
                    margin-bottom: 8px;
                }

                .sublink-label {
                    font-size: 13px;
                    margin-bottom: 3px;
                    color: #000;
                    font-weight: normal;
                }
                
                .images-grid-container { 
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 5px;
                    width: 100%;
                    margin-top: 30px;
                }
                
                .grid-item { 
                    position: relative; 
                    width: 100%; 
                    padding-bottom: 100%; 
                    background: #ccc; 
                    overflow: hidden; 
                    cursor: pointer;
                }
                
                .grid-img { 
                    position: absolute; 
                    top: 0; 
                    left: 0; 
                    width: 100%; 
                    height: 100%; 
                    object-fit: cover; 
                    transition: transform 0.33s ease; 
                }
                
                .grid-item:hover .grid-img { 
                    transform: scale(1.05); 
                }

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
