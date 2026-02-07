"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="nav-icons">
        <Link href="/" className="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
        </Link>
        <a href="mailto:contact@lafricaine.org" className="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
        </a>
      </div>

      <div className="main-layout">

        {/* Colonne Gauche : Photo + Bio */}
        <div className="left-column">
          <div className="photo-container">
            <Image src="/images/contact_portrait.png"
              alt="Portrait"
              className="portrait-img"
              width={800} height={800} />
          </div>

          <div className="bio-wrapper">
            <h2 className="person-name">Sename Koffi AGBODJINOU</h2>
            <div className="bio-text">
              <p>Designer x architect x anthropologist by training,</p>
              <p>Author, curator, tech- activist &amp; entrepreneur,</p>
              <p>Founder : L'Africaine d'architecture,</p>
              <p>Founder, funder, catalyst : HubCity/ WoeLab.</p>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Titre + Adresse */}
        <div className="right-column">
          <div className="title-wrapper">
            <h1 className="contact-text">CONTACT</h1>
          </div>

          <div className="address-wrapper">
            <div className="address-text">
              <p>L'Africaine d'architecture</p>
              <p>WoeLab Prime,</p>
              <p>Apedokoe, Lomé -Togo</p>
            </div>
            <p className="phone-number">+228 93540826</p>
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

        .contact-page {
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
          max-width: 900px; /* Plus large pour permettre l'écartement */
          margin: 0 auto; /* Centré par défaut, mais on peut ajuster si besoin */
          display: grid;
          grid-template-columns: 320px auto; 
          gap: 80px; /* ÉCARTEMENT AUGMENTÉ (C'était 50px) */
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
          height: 320px; 
          background-color: transparent; 
          margin-bottom: 20px; 
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: contain; 
          display: block;
        }

        .bio-wrapper {
            text-align: justify; /* Texte justifié */
            width: 100%;
            padding: 0 10px; /* Petite marge interne pour éviter que ça colle trop aux bords si on réduit */
        }

        .person-name {
            font-size: 10px;
            font-weight: bold;
            margin: 0 0 15px 0;
            text-align: center; /* Le nom reste centré généralement, ou justifié si vous préférez, je le laisse centré pour l'instant comme l'original */
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        .bio-text {
          font-size: 9px;
          line-height: 1.6;
          letter-spacing: 0.01em;
          text-align: justify;
        }
        .bio-text p { margin: 0; }


        /* --- Colonne Droite --- */
        .right-column {
            display: flex;
            flex-direction: column;
        }

        .title-wrapper {
            height: 320px; 
            display: flex;
            align-items: flex-end; 
            padding-bottom: 0px; 
            margin-bottom: 20px; 
        }

        .contact-text {
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 0.1em;
          margin: 0;
          line-height: 1;
          transform: translateY(4px); 
        }

        .address-wrapper {
            margin-top: 100px; 
            padding-left: 5px;
            text-align: justify; /* Adresse justifiée aussi */
        }

        .address-text {
          font-size: 11px; /* Taille contrôlée */
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .address-text p { margin: 0; }

        .phone-number {
          font-size: 11px;
          margin: 0;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .main-layout {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 20px;
          }
          .title-wrapper {
            height: auto;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .left-column, .right-column {
            width: 100%;
            align-items: center;
            text-align: center;
          }
          .address-wrapper {
            margin-top: 0;
            text-align: center;
            padding-left: 0;
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
