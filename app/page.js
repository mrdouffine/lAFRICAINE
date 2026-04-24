'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '', consent: false });

    const WP_T = 'https://sename.lafricaine.org/wp-content/uploads/elementor/thumbs';

    const navItems = [
        { label: 'CONTACT', img: '/images/menu/menu_contact.png', href: '/contact' },
        { label: 'BIOGRAPHY', img: '/images/menu/menu_biography.png', href: '/biography' },
        { label: 'EDITION', img: '/images/menu/menu_edition.png', href: '/edition' },
        { label: 'LECTURES', img: '/images/menu/menu_lectures.png', href: '/lectures' },
        { label: 'CONSULTING', img: '/images/menu/menu_consulting.png', href: '/consulting' },
        { label: 'ACADEMIC', img: '/images/menu/menu_academic.png', href: '/academic' },
        { label: 'AUDIO', img: '/images/menu/menu_audio.png', href: '/audio' },
        { label: 'VIDEO', img: '/images/menu/menu_video.png', href: '/video' },
        { label: 'PHOTO', img: '/images/menu/menu_photo.png', href: '/photo' },
        { label: 'HubCity', img: '/images/menu/menu_hubcity.png', href: 'https://hubcity.africa/', external: true },
        { label: 'CURATING', img: '/images/menu/menu_curating.png', href: '/curating' },
        { label: 'TECH', img: '/images/menu/menu_tech.png', href: '/tech' },
        { label: 'LESSONS', img: '/images/menu/menu_lessons.png', href: '/lessons' },
        { label: 'ARCHITECTURE', img: '/images/menu/menu_architecture.png', href: '/architecture' },
        { label: 'PUBLICATION', img: '/images/menu/menu_publication.png', href: '/publication' },
        { label: 'QUOTES', img: '/images/menu/menu_quotes.png', href: '/quotes' },
        { label: 'COLLABORATION', img: '/images/menu/menu_collaboration.png', href: '/collaboration' },
        { label: 'HONOR', img: '/images/menu/menu_honor.png', href: '/honor' },
        { label: 'PRESS', img: '/images/menu/menu_press.png', href: '/press' },
        { label: 'COMMITMENT', img: '/images/menu/menu_commitment.png', href: '/commitment' },
        { label: 'INVEST', img: '/images/menu/menu_invest.png', href: '/invest' },
        { label: 'BOARD', img: '/images/menu/menu_board.png', href: '/board' },
    ];

    const OpenAISVG = (
        <svg viewBox="0 0 24 24" width="14" height="14">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.6 14.019A4.5 4.5 0 0 1 2.34 7.896zm16.597 3.855-5.833-3.387 2.019-1.168a.076.076 0 0 1 .071 0l4.217 2.434a4.5 4.5 0 0 1-.677 8.12v-5.678a.79.79 0 0 0-.397-.321zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.214-2.43a4.5 4.5 0 0 1 6.705 4.664zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
        </svg>
    );

    const socialLinks = [
        {
            label: 'Facebook',
            href: 'https://www.facebook.com/senamekoffia',
            svg: <svg viewBox="0 0 320 512" width="14" height="14"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/sename__/?hl=fr',
            svg: <svg viewBox="0 0 448 512" width="14" height="14"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
        },
        {
            label: 'YouTube',
            href: 'https://www.youtube.com/channel/UCQF4sKBKsFnwGWHvjrIaQTA/videos',
            svg: <svg viewBox="0 0 576 512" width="16" height="16"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
        },
        {
            label: 'Medium',
            href: 'https://sename.medium.com/',
            // Logo 'M' pour Medium
            svg: <svg viewBox="0 0 448 512" width="14" height="14"><path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.4-2.7 7.2v181.4c-.4 2.8.6 5.6 2.7 7.2l23.7 23v7.4h-120v-7.4l24-23c2.4-2.2 2.4-2.5 2.4-7.2V198.9l-67.2 170.7h-8.1L133.2 198.9v105.1c-.6 4.1.8 8.1 3.7 11.1l32.7 39.7v7.4H74.3v-7.4l32.7-39.7c3.1-3 4.1-7 3.5-11.1V163.6c.4-3.4-.9-6.8-3.5-9.2L81 120.3v-7.4h90.1l59.6 128.5L289.4 113h82.8v7.4h-.1z" /></svg>
        },
        {
            label: 'LomePlus',
            href: 'https://play.google.com/store/apps/details?id=com.woelabo.lomeplus',
            imgSrc: `${WP_T}/Plus-r1xe3ctmega7ghxmki3wlox0lb0lf32ukmgza9lsj0.png`,
            yellow: true
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sename-koffi-a-2a5432242/',
            svg: <svg viewBox="0 0 448 512" width="14" height="14"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.8C24.31 107.2 0 83.1 0 53.7A53.7 53.7 0 0 1 107.4 53.7c0 29.4-24.28 53.5-53.56 53.5zm393.72 340.8h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
        },
        {
            label: 'Twitter',
            href: 'https://twitter.com/sename__',
            // Logo Oiseau (classic Twitter bird)
            svg: <svg viewBox="0 0 512 512" width="16" height="16"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
        },
        {
            label: 'Calendly',
            href: 'https://calendly.com/sename/catchupsename',
            // Logo Calendrier
            svg: <svg viewBox="0 0 448 512" width="14" height="14"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" /></svg>
        },
        {
            label: 'ChatGPT',
            href: 'https://chatgpt.com/g/g-699ed97064648191a0b3b7fce6a4bdc0-senamee',
            svg: OpenAISVG
        },
        {
            label: 'Wikipedia',
            href: 'https://fr.wikipedia.org/wiki/S%C3%A9nam%C3%A9_Koffi_Agbodjinou',
            // Logo W (stylized Wikipedia W)
            svg: <svg viewBox="0 0 640 512" width="18" height="18"><path d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-156.4 429.3-164.3 452h-32.1c-16.3-49.2-79.4-214.8-103.8-275.1-28.1 71-83.3 221.2-100.1 275.1h-32.1C143.5 442.6 14.9 157.3 13.9 147.2c0-1.5-.5-5.2-.5-6.8H0L0 115.2h224v25.4H192c-16.3 0-22.9 16.3-14.4 33.6l117 265.2 44.2-115-30.1-67.8c-12.5-28.1-29.6-116.5-51.6-116.5h-32.1V115.2h224v25.4H449c-28.6 0-34.6 14.4-22.4 40.8l109.2 271.5 44.7-116.5c-14.4-35.6-28.6-71.5-28.6-107.4 0-58.7 40.3-88.8 87.4-88.8h.8z" /></svg>
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message envoyé !');
        setModalOpen(false);
        setForm({ name: '', email: '', message: '', consent: false });
    };

    return (
        <main>
            {/* HERO */}
            <section className="hero" aria-label="Portrait de Sénamé Koffi Agbodjinou" />

            {/* GRILLE + FOOTER */}
            <div className="page-content">
                <nav className="menu-grid" aria-label="Navigation principale">
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="nav-item"
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                        >
                            <div
                                className="circle"
                                style={{ backgroundImage: `url(${item.img})` }}
                                role="img"
                                aria-label={item.label}
                            />
                            <span className="nav-label">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* ICÔNES SOCIALES */}
                <footer className="footer-social" aria-label="Réseaux sociaux">
                    {socialLinks.map((s, i) => (
                        <a
                            key={i}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-btn${s.yellow ? ' yellow' : ''}`}
                            aria-label={s.label}
                            title={s.label}
                        >
                            {s.imgSrc ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={s.imgSrc} alt={s.label} width={34} height={34} />
                            ) : (
                                s.svg
                            )}
                        </a>
                    ))}
                </footer>
            </div>

            {/* BOUTON FLOTTANT — jaune, sans texte */}
            <div
                className="contact-float-wrap"
                onClick={() => setModalOpen(!modalOpen)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalOpen(!modalOpen)}
                aria-label="Ouvrir le formulaire de contact"
            >
                <div className="contact-float-btn">
                    <svg viewBox="0 0 448 512" aria-hidden="true">
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                    </svg>
                </div>
            </div>

            {/* MODAL */}
            {modalOpen && (
                <div className="modal-container" role="dialog" aria-modal="true">
                    <div className="modal-header">
                        <h2 className="modal-title">Laisser un commentaire</h2>
                        <button className="modal-close-btn" onClick={() => setModalOpen(false)} aria-label="Fermer">
                            ×
                        </button>
                    </div>
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="f-name">Nom</label>
                            <input id="f-name" type="text" value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="f-email">Email</label>
                            <input id="f-email" type="email" value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="f-message">Message</label>
                            <textarea id="f-message" rows={3} value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                        </div>
                        <label className="form-checkbox">
                            <input type="checkbox" checked={form.consent}
                                onChange={(e) => setForm({ ...form, consent: e.target.checked })} required />
                            J&apos;accepte les conditions d&apos;utilisation
                        </label>
                        <button type="submit" className="form-submit">ENVOYER</button>
                    </form>
                </div>
            )}
        </main>
    );
}
