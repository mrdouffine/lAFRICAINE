"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Biography() {
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
        {/* Colonne Gauche : Photo + Nom + Petite Bio */}
        <div className="left-column">
          <div className="photo-container">
            <Image
              src="/images/bio_portrait.png"
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

        {/* Colonne Droite : Titre + Grande Bio */}
        <div className="right-column">
          <div className="title-wrapper">
            <h1 className="page-title">BIOGRAPHY</h1>
          </div>

          <div className="content-wrapper">
            <div className="long-bio-text">
              <p>Sename Koffi Agbodjinou est promoteur de la pensée néovernaculaire qu’il décline concrètement en tant que designer, architecte, entrepreneur aux différentes échelles du produit, du bâtiment et de la ville. Il est le créateur de L’Africaine d’architecture, une plateforme d’expérimentations sur les questions de l’architecture et de la ville africaines et des WoeLabs : réseau de tech-hubs togolais dont l’ambition est de “rendre tout le monde égal en face de la technologie” ! Avec sa communauté, il contribue à prototyper un collectivisme digital qui a permis de lancer la demi-douzaine de startups du Groupe HubCity. Sa vision prospective éclaire plusieurs conférences, institutions et grands groupes.</p>

              <p>Né en 1980 à Lomé, Sename Koffi Agbodjinou est principalement architecte et anthropologue de formation (ENSAPLV, EHESS -Paris). Il crée en 2010 la plateforme L’Africaine d’architecture sur la ligne “Modernité ancrée », avec l’objectif de fournir les moyens conceptuels d’une alternative architecturale valorisant les canons, dynamiques et ressources du cru.</p>

              <p>Il devient défenseur d’un vernaculaire numérique, en 2012, quand il croit identifier une correspondance entre l’éthique hacker et celles les sociétés de tradition. Le concept #LowHighTech voit le jour pour souligner cette proximité et envisager une approche originale des questions d’innovation impliquant les couches les plus modestes.</p>

              <p>L’utopie urbaine HubCités Africaines, les Espaces de Démocratie Technologique WoeLab et la “first made in Africa” imprimante 3D Wafate sont les meilleurs ambassadeurs de cette vision de société pionnière dans la critique de la Smart City.</p>

              <p>Sénamé dirige les WoeLab, lieux atypiques, entièrement autofinancés, qui rendent possibles la mutualisation des intelligences et le brassage de populations diverses adoptant des usages à faible empreinte environnementale. Il y incube une communauté de jeunes pensionnaires, co-sociétaires de la demi- douzaine de startups du groupe HubCity.</p>

              <p>En qualité de curateur et de scénographe, il a conçu diverses installations et exposé au ZKM ou encore au siège du Parlement Européen. Il a doublement été sollicité en 2020 pour présenter dans l’exposition centrale et collaborer au pavillon allemand de la Biennale d’Architecture de Venise.</p>

              <p>Sénamé est régulièrement keynote speaker dans de grandes conférences comme SXSW- Austin, Republica- Berlin, WORLD FORUM FOR A RESPONSIBLE ECONOMY- Lille, UNESCO/Netexplo -Paris, World maker faire – NYC, etc.</p>

              <p>Son intérêt embrasse des champs aussi divers que le design et l’architecture durables, la transformation digitale intégrée, l’économie collaborative, le mouvement maker, etc.</p>

              <p>Il a été élu en 2017 au prestigieux programme pour entrepreneurs sociaux de la Fondation Ashoka.</p>

              <p>Sename Koffi Agbodjinou est candidat aux élections présidentielles du Togo en 2025 avec un programme dit d’abolition de la fonction présidentielle.</p>

              <br />
              <br />

              <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '0.05em' }}>BIO ARCHITECTURE</h3>

              <p>Designer, architecte et anthropologue (Creapole-Esdi, ENSA- Paris La Villette, EHESS) Sénamé Koffi Agbodjinou se targue de n’avoir l’estampille d’aucune académie. Il manifeste un intérêt précoce aux matériaux disponibles localement et se spécialise dans les architectures anciennes africaines. Il y explore depuis 2002, en chercheur indépendant, la possibilité d’un fonds commun symbolique et son potentiel de questionnement de notre contemporanéité. Sous la direction de Klaus Hamberger, il s’intéresse à la relation Feminin- Espace dans les sociétés du Togo du Nord.</p>

              <p>Après une longue expérience dans la construction écologique et humanitaire notamment comme chef de projet chez l’Association de la Voûte Nubienne au Burkina ou sur les chantiers d’été du maître italien Fabrizio Carola, il fonde la plateforme ‘L’Africaine d’architecture’ sur la ligne « modernité ancrée » dont l’ambition est de fournir les moyens conceptuels d’une alternative architecturale valorisant des canons, esthétiques, ressources et dynamiques du cru. Il est le maître d’oeuvre (2006) du projet de l’École Tammari, complexe scolaire pour 200 enfants réalisé en terre crue et techniques mixtes avec les bâtisseurs traditionnels et la communauté du village de Koulangou (Pays tamberma, Nord Togo) sur un site classé au patrimoine mondial de l’UNESCO.</p>

              <p>En 2020, il est sélectionné par Hashim Sarkis, le commissaire de la 17e Biennale d’Architecture de Venise pour présenter dans l’exposition centrale malheureusement annulée en raison de la crise sanitaire. Il avait proposé une microarchitecture en terre imprimée, une technologie à laquelle il accorde une attention soutenue étant le principal initiateur avec sa communauté WoeLab de la toute première imprimante 3D développée en Afrique (2012).</p>

              <p>Sename Koffi A. est présent dans les plus grandes conférences internationales où il porte la voix d’une Afrique inattendue, ancrée et audacieuse. Il était récemment l’invité spécial de l’architecte français Patrick Bouchain pour un échange sur le site d’une des expérimentations de ce dernier à Bagneux.</p>
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
                    max-width: 1000px; /* Plus large pour la bio qui a beaucoup de texte */
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 320px auto; 
                    gap: 60px; 
                    justify-content: center;
                }

                /* --- Colonne Gauche --- */
                .left-column {
                    display: flex;
                    flex-direction: column;
                    width: 320px;
                }

                .photo-container {
                    width: 320px;
                    height: 370px; /* Un peu plus haut que large souvent sur ces portraits */
                    background-color: transparent; 
                    margin-bottom: 20px; 
                }

                .portrait-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* Cover ici car souvent l'image remplit tout */
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
                }

                .short-bio-text {
                    font-size: 10px;
                    line-height: 1.5;
                    letter-spacing: 0.01em;
                    text-align: center; /* Petite bio centrée */
                }
                .short-bio-text p { margin: 0; }


                /* --- Colonne Droite --- */
                .right-column {
                    display: flex;
                    flex-direction: column;
                }

                .title-wrapper {
                    height: 370px; /* Match hauteur photo */
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
                    transform: translateY(4px); 
                }

                .content-wrapper {
                    margin-top: 50px; 
                    padding-left: 0;
                    max-width: 600px;
                }

                .long-bio-text {
                    font-size: 11px;
                    line-height: 1.4; /* Interligne serré typique du site */
                    text-align: justify; /* Justifié comme demandé */
                }
                .long-bio-text p { margin-bottom: 12px; }

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
                    }
                    .left-column, .right-column {
                        width: 100%;
                        align-items: center;
                        text-align: center;
                    }
                    .content-wrapper {
                        margin-top: 0;
                        text-align: justify;
                        padding: 0 20px;
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
