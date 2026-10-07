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
              <p>Architecte, anthropologue, activiste technologique et entrepreneur social, le togolais Sénamé Koffi Agbodjinou est l'une des figures de proue de la pensée contemporaine africaine. Désigné en 2026 par <strong>Forbes</strong> comme l’une des <strong>« Grandes Figures de l’Architecture Africaine Contemporaine »</strong>, il a bâti une œuvre qui transcende la simple édification de murs pour façonner une vision du monde enracinée, souveraine et résolument tournée vers le futur. Il définit ainsi une  trajectoire unique à l'intersection des structures spatiales et des dynamiques sociales, se fixant pour mission de « bâtir les consciences » autant que les bâtiments.</p>

              <h3 className="bio-subtitle">Un Parcours à la Croisée des Savoirs</h3>

              <p>Formé à l’École Spéciale d’Architecture (ESA), à l’ENSA-Paris La Villette et à l’École des Hautes Études en Sciences Sociales (EHESS), Sénamé Koffi Agbodjinou refuse très tôt le clivage entre tradition et modernité. Sa double compétence lui permet d’aborder le projet architectural comme un organisme vivant : il ne dessine pas de structures bâties sans en avoir préalablement décrypté les structures sociales et les cosmologies locales.</p>

              <p>Son expérience opérationnelle s’est forgée sur le terrain de la construction humanitaire et bioclimatique. Ancien chef de projet pour l’Association de la Voûte Nubienne au Burkina Faso et collaborateur du maître italien Fabrizio Carola, il a acquis une maîtrise rare des matériaux de proximité (terre crue, pierre) et des techniques à faible empreinte carbone. En 2006, il signe l’École Tammari au Nord-Togo (site UNESCO), un complexe scolaire manifeste réalisé en terre crue avec les communautés locales, prouvant que l’on peut bâtir du commun à partir du vernaculaire.</p>

              <h3 className="bio-subtitle">Père du Néovernaculaire et de la Smart City Organique : pour une Modernité Ancrée</h3>

              <p>Fondateur de la plateforme <strong>L’Africaine d’Architecture (LAA)</strong>, il théorise l’approche « <strong>néovernaculaire</strong> » : une architecture qui ne se contente pas d’imiter le passé, mais qui utilise les savoirs ancestraux comme matrices actives pour informer la contemporaneité et la haute technologie. Il puise ainsi dans les savoirs endogènes pour répondre aux périls écologiques et technologiques de notre temps.</p>

              <p>Cette vision se concrétise en un <strong>néovernaculaire numérique</strong> en 2012 avec la création des <strong>WoeLab(s)</strong>, le premier réseau de <em>tech hub</em> de quartier à Lomé, où sa communauté a mis au point la première imprimante 3D conçue à partir de déchets électroniques.</p>

              <p>À travers son concept de <strong>HubCity</strong>, Sénamé Koffi Agbodjinou propose une alternative radicale à la <em>Smart City</em> occidentale. Pour lui, la ville intelligente africaine doit être « distribuée, récursive et organique », s’appuyant sur un collectivisme digital inspiré des structures sociales traditionnelles. Son travail sur l’impression 3D terre et les micro-architectures a été sélectionné pour l’exposition centrale de la 17e Biennale d’Architecture de Venise en 2020.</p>

              <h3 className="bio-subtitle">Un Expert Stratégique Global</h3>

              <p>Reconnu pour sa capacité à naviguer entre les imaginaires radicaux et les réalités institutionnelles, il conseille les plus grands groupes (Bouygues, VINCI, Veolia) et les institutions internationales (AFD, UNESCO, OCDE). Son influence s’exerce également au sein de conseils d’administration et de cénacles prospectifs tels que le <strong>Fonds 2050</strong>, le <strong>Value AI Institute</strong> à Londres, ou le <strong>Musée des Civilisations Noires</strong> à Dakar.</p>

              <p>Son expertise est aujourd'hui sollicitée pour des projets d’envergure qui redéfinissent l'habitabilité du continent : galeries d’art au Bénin (Ouid’art), lycées bioclimatiques au Ghana, ou centres numériques en milieu rural.</p>

              <h3 className="bio-subtitle">Un Stratège de l’Habitation et de l’Impact Global</h3>

              <p>Au-delà de la conception, Sénamé Koffi Agbodjinou est un acteur influent de la gouvernance de projet. Steward au sein du <strong>Fonds 2050</strong> aux côtés de Marie Ekeland, membre de nombreux conseils scientifiques et jurys internationaux, il conseille les décideurs sur les risques systémiques (écologiques et sociaux) et sur la « Géopolitique de l’Habitation ».</p>

              <p>Il intervient aujourd’hui sur des chantiers d’envergure en Afrique de l’Ouest (Sénégal, Bénin, Ghana, Guinée), où il déploie une architecture de la « liane et du lien », visant à minimiser l’impact environnemental tout en maximisant l’inclusion sociale et l’accessibilité. Pour lui, l’architecte doit être un « ménageur » du territoire, capable de réconcilier la technè numérique avec l’archaïsme nourricier.</p>

              <h3 className="bio-subtitle">Une Éthique du « Ménagement »</h3>

              <p>Lauréat de multiples distinctions — du <strong>NASA Space Apps Challenge</strong> au <strong>Grand Prix NetExplo de l'UNESCO</strong> — Sénamé Koffi Agbodjinou ne mesure pas la réussite en mètres carrés, mais en « consciences déplacées ». Fellow de la Fondation BMW et d'Ashoka, il défend une <strong>« Géopolitique de l’Habitation »</strong> où l’Afrique ne se contente plus d’attendre ses plans, mais dessine ses propres futurs.</p>

              <p>En mai 2026, alors que le continent fait face à des défis démographiques et climatiques sans précédent, Sénamé Koffi Agbodjinou continue de tracer une voie singulière : celle d'une architecture qui « ménage la liane, le lien et la ligature », faisant de la brique et du code les leviers d'une redistribution symbolique, économique et politique.</p>

              <p><em>« Il n’est plus temps de savoir où on va, il faut se lever et marcher. »</em> — Inspiré par Aimé Césaire, Sénamé Koffi Agbodjinou active des processus fertiles pour que la cité africaine de demain soit le miroir de son propre génie.</p>

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

                .bio-subtitle { font-size: 13px; font-weight: bold; margin: 25px 0 10px 0; letter-spacing: 0.03em; }

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
