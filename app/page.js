
"use client";

import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="menu-grid">
                    {/* LIGNE 1 */}
                    <Link href="/contact" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_contact.png')" }}></div>
                        <span className="label">CONTACT</span>
                    </Link>
                    <Link href="/biography" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_biography.png')" }}></div>
                        <span className="label">BIOGRAPHY</span>
                    </Link>
                    <Link href="/edition" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_edition.png')" }}></div>
                        <span className="label">EDITION</span>
                    </Link>
                    <Link href="/lectures" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_lectures.png')" }}></div>
                        <span className="label">LECTURES</span>
                    </Link>
                    <Link href="/consulting" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_consulting.png')" }}></div>
                        <span className="label">CONSULTING</span>
                    </Link>
                    <Link href="/academic" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_academic.png')" }}></div>
                        <span className="label">ACADEMIC</span>
                    </Link>
                    <Link href="/audio" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_audio.png')" }}></div>
                        <span className="label">AUDIO</span>
                    </Link>

                    {/* LIGNE 2 */}
                    <Link href="/video" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_video.png')" }}></div>
                        <span className="label">VIDEO</span>
                    </Link>
                    <Link href="/photo" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_photo.png')" }}></div>
                        <span className="label">PHOTO</span>
                    </Link>
                    <a href="https://hubcity.africa/" target="_blank" rel="noopener noreferrer" className="item">
                        <div className="circle hubcity">
                            <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_hubcity.png')", width: '100%', height: '100%', border: 'none', margin: 0 }}></div>
                        </div>
                        <span className="label"></span>
                    </a>
                    <Link href="/curating" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_curating.png')" }}></div>
                        <span className="label">CURATING</span>
                    </Link>
                    <Link href="/tech" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_tech.png')" }}></div>
                        <span className="label">TECH</span>
                    </Link>
                    {/* 2025: No image on live site, just text */}
                    <Link href="/2025" className="item">
                        <div className="circle no-image" style={{ backgroundColor: '#fff', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>2025</div>
                        <span className="label"></span>
                    </Link>
                    <Link href="/architecture" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_architecture.png')" }}></div>
                        <span className="label">ARCHITECTURE</span>
                    </Link>

                    {/* LIGNE 3 */}
                    <Link href="/publication" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_publication.png')" }}></div>
                        <span className="label">PUBLICATION</span>
                    </Link>
                    <Link href="/quotes" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_quotes.png')" }}></div>
                        <span className="label">QUOTES</span>
                    </Link>
                    {/* Placeholder for others if not downloaded perfectly, reusing similar patterns or keeping structure */}
                    <Link href="/honor" className="item">
                        {/* Honor might share or use placeholder if not found. Let's use a generic or the tech one as fallback if not downloaded */}
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_tech.png')" }}></div>
                        <span className="label">HONOR</span>
                    </Link>
                    <Link href="/press" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_curating.png')" }}></div>
                        <span className="label">PRESS</span>
                    </Link>
                    <Link href="/commitment" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_lectures.png')" }}></div>
                        <span className="label">COMMITMENT</span>
                    </Link>
                    <Link href="/invest" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_consulting.png')" }}></div>
                        <span className="label">INVEST</span>
                    </Link>
                    <Link href="/board" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_academic.png')" }}></div>
                        <span className="label">BOARD</span>
                    </Link>

                    {/* LIGNE 4 - Remaining ones */}
                    <Link href="/lessons" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_lessons.png')" }}></div>
                        <span className="label">LESSONS</span>
                    </Link>
                    <Link href="/collaboration" className="item">
                        <div className="circle" style={{ backgroundImage: "url('/images/menu/menu_collaboration.png')" }}></div>
                        <span className="label">COLLABORATION</span>
                    </Link>
                </div>
            </div>

            <div className="footer">
                <a href="https://www.facebook.com/senamekoffia" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/sename__/?hl=fr" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.youtube.com/channel/UCQF4sKBKsFnwGWHvjrIaQTA/videos" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg>
                </a>
                <a href="https://sename.medium.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path></svg>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.woelabo.lomeplus" target="_blank" rel="noopener noreferrer" className="social-icon yellow">
                    <span style={{ fontSize: '8px', fontWeight: 'bold' }}>PLUS</span>
                </a>
                <a href="https://www.linkedin.com/in/sename-koffi-a-2a5432242/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://twitter.com/sename__" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
            </div>
        </>
    )
}
