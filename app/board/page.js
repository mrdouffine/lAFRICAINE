
"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Board() {
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

            <div className="main-grid">

                <div className="left-panel">
                    <div className="image-wrapper">
                        <Image
                            src="/images/board_portrait.jpg"
                            alt="Sénamé Koffi AGBODJINOU"
                            width={500}
                            height={500}
                            className="main-image"
                        />
                    </div>

                    <div className="bio-section">
                        <h2 className="person-name">Sénamé Koffi AGBODJINOU</h2>
                        <div className="bio-text">
                            <p>Architect and Anthropologist by training,</p>
                            <p>Curator, Tech- activist, entrepreneur,</p>
                            <p>Founder of L 'Africaine d' Architecture,</p>
                            <p>Founder, funder, catalyst of WoeLab.</p>
                        </div>
                    </div>
                </div>

                <div className="right-panel">
                    <h1 className="page-title">NETWORKS . BOARDS</h1>
                    <div className="content-listing">
                        <div className="section-block">
                            <h3 className="section-header">BOARDS</h3>

                            <div className="listing-item">
                                <p><a href="https://www.bluemindfoundation.org/" target="_blank" rel="noopener noreferrer"><span className="highlight">Bluemind Foundation</span></a></p>
                                <p>Programme « Heal by Hair »</p>
                                <p>Comité des Parties Prenantes</p>
                                <p>2022 –</p>
                                <p>Afrique</p>
                            </div>

                            <div className="listing-item">
                                <p>Maison Gbèkè : Préfiguration Mission</p>
                                <p>Lead</p>
                                <p>2021 –</p>
                                <p>Togo</p>
                            </div>

                            <div className="listing-item">
                                <p><a href="https://2050.do/#/" target="_blank" rel="noopener noreferrer"><span className="highlight">2050 Capital</span></a></p>
                                <p>Advisor to the Board/ Garant de moralité</p>
                                <p>2021</p>
                                <p>France</p>
                            </div>

                            <div className="listing-item">
                                <p>Fédération togolaise de Muay Thai</p>
                                <p>Conseiller</p>
                                <p>2021</p>
                                <p>Togo</p>
                            </div>

                            <div className="listing-item">
                                <p>Hivos- African Crossroads community</p>
                                <p>Advisor</p>
                                <p>2018.</p>
                                <p>2021.</p>
                                <p>Africa</p>
                            </div>

                            <div className="listing-item">
                                <p>AMA 4 AFRICA</p>
                                <p>The LionHeart Initiative</p>
                                <p>Togo Coordinator</p>
                                <p>2019 –</p>
                            </div>
                        </div>

                        <div className="section-block">
                            <h3 className="section-header">MENTORSHIP – JURY</h3>

                            <div className="listing-item">
                                <p>Dekoloniale - Berlin Residency</p>
                                <p>Jury Residency : <a href="https://www.dekoloniale.de/de/program/events/dekoloniale-berlin-residency-2022" target="_blank" rel="noopener noreferrer"><span className="highlight">« Colonial Neighbors: Their ancestors and the Berlin » call</span></a></p>
                                <p className="quote">" Dekoloniale wants to encourage, support and enforce this budding transformation, and implement a memory culture in the city which honors and visualizes anti-colonial and anti-racist resistance fighters and empowers their descendants and related communities today. With the 2022 Berlin Residency we seek to unhide biographical presences in Berlin's South, to render their existences visible in the public space and to illuminate their resistance, heritage and survivance."</p>
                                <p>2022</p>
                            </div>

                            <div className="listing-item">
                                <p>The Prince Claus Fund for Culture and Development. Netherlands</p>
                                <p>Mentor : <a href="https://princeclausfund.org/prince-claus-mentorship-awards" target="_blank" rel="noopener noreferrer"><span className="highlight">« Building Beyond » Mentorship Programme 2022 –</span></a> Building Beyond</p>
                                <p className="quote">" Building Beyond is an invitation to imagine what the future could be. In this call, we invite you to define the future of public space, community and functionality on a growing continent by activating the imagined possibilities of your localland contextrealities. (...) Through Building Beyond, we are forming a space where you and your peers can reflect on the future of your communities. This is an alternative educational structure that aims at fostering thought leadership, promoting criticality, and reframing design-based practices. This programme is part of a longer conversation on how creative practices rooted in locality, community, queer theory, decoloniality and/or intersectional approaches can lead us toward new perspectives and fresher methodologies, as well as promote transformative urban agendas on how we inhabit the world and our continent. We invite creatives, designers, artists, thinkers, architects, and those working anywhere in-between to join us."</p>
                                <p>2022</p>
                            </div>

                            <div className="listing-item">
                                <p>YUNUS Sports Hub</p>
                                <p>Mentor : <a href="http://yshplatform.org/mentors/" target="_blank" rel="noopener noreferrer"><span className="highlight">Incubation Program - track "Sport Social Inclusion"</span></a></p>
                                <p>AFD/ Lancement Paris 2024</p>
                                <p>Feb- Sept 2021</p>
                            </div>
                        </div>

                        <div className="section-block">
                            <h3 className="section-header">FELLOW</h3>

                            <div className="listing-item">
                                <p>Plurality University <a href="https://www.plurality-university.org/team/sename-koffi-agbodjinou/" target="_blank" rel="noopener noreferrer"><span className="highlight">Network</span></a></p>
                                <p>Fellow</p>
                                <p>2018 –</p>
                                <p>Global</p>
                            </div>

                            <div className="listing-item">
                                <p>BMW Global table for Responsible Leaders</p>
                                <p>Fellow</p>
                                <p>2019.</p>
                                <p>Global</p>
                            </div>

                            <div className="listing-item">
                                <p>Ashoka Social Entrepreneurship</p>
                                <p>Fellow</p>
                                <p>2016 – 2019.</p>
                                <p>Global</p>
                            </div>

                            <div className="listing-item">
                                <p>GIG Global Innovation Gathering community</p>
                                <p>Member</p>
                                <p>Global</p>
                            </div>

                            <div className="listing-item">
                                <p>AfriLabs, The Largest Network of African Technology Hubs</p>
                                <p>Member</p>
                                <p>Africa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #BEBEBE;
                    font-family: 'Ubuntu', sans-serif;
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

                .main-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    align-items: start;
                }

                .left-panel {
                    display: flex;
                    flex-direction: column;
                    align-items: center; 
                    margin-top: 50px;
                }

                .right-panel {
                    display: flex;
                    flex-direction: column;
                    padding-top: 320px; /* Align with bottom of image */
                }

                .image-wrapper {
                    position: relative;
                    margin-bottom: 30px;
                    width: 320px; 
                    height: 320px;
                }

                .main-image {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    background-color: transparent;
                    filter: grayscale(100%);
                }

                .page-title {
                    font-size: 24px;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    margin: 0 0 40px 0;
                    padding-left: 0; /* Aligned left in right panel */
                    text-transform: uppercase;
                    text-align: left;
                    white-space: nowrap;
                }

                .bio-section {
                    text-align: center;
                    width: 320px; 
                }

                .person-name {
                    font-size: 11px;
                    font-weight: bold;
                    margin: 0 0 15px 0;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .bio-text p {
                    font-size: 10px;
                    margin: 0 0 2px 0;
                    line-height: 1.4;
                    font-weight: bold;
                }

                .content-listing {
                    width: 100%;
                    max-width: 1100px;
                    text-align: left;
                    padding-left: 0;
                }

                .section-header {
                    font-size: 11px;
                    font-weight: normal;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    letter-spacing: 0.05em;
                }

                .listing-item {
                    margin-bottom: 20px;
                    font-size: 10px;
                    line-height: 1.4;
                    font-weight: 500;
                }
                
                .listing-item p { margin: 0; }

                .highlight {
                    color: #ffff00; /* Yellow highlight text */
                    font-weight: bold;
                    text-decoration: none;
                    transition: opacity 0.2s;
                }
                
                a:hover .highlight {
                    opacity: 0.7;
                    text-decoration: underline;
                }
                
                /* Ensure links don't have default underline unless hovered */
                a {
                    text-decoration: none;
                }
                
                .quote {
                     margin-top: 5px !important;
                     font-style: italic;
                     font-weight: normal;
                     opacity: 0.8;
                }
                
                .section-block {
                    margin-bottom: 40px;
                }

                @media (max-width: 800px) {
                    .main-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .right-panel {
                        padding-top: 0;
                        align-items: center;
                    }
                    .page-title {
                        text-align: center;
                        margin-bottom: 30px;
                        white-space: normal;
                    }
                    .image-wrapper {
                         margin: 0 auto 30px auto;
                    }
                    .bio-section {
                        margin: 0 auto;
                    }
                    .content-listing {
                        text-align: left;
                        max-width: 400px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </div>
    )
}
