
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Invest() {


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

            <div className="main-content">
                <div className="center-block">
                    <div className="image-wrapper">
                        <Image
                            src="/images/invest_portrait.png"
                            alt="INVEST"
                            width={500}
                            height={500}
                            className="main-image"
                        />
                        <h1 className="page-title">INVEST</h1>
                    </div>

                    <div className="bio-section">
                        <h2 className="person-name">Sename Koffi AGBODJINOU</h2>
                        <div className="bio-text">
                            <p>Designer x architect x anthropologist by training,</p>
                            <p>Curator, tech- activist &amp; entrepreneur,</p>
                            <p>Founder of L'Africaine d'architecture,</p>
                            <p>Founder, funder, catalyst of HubCity/ WoeLab.</p>
                        </div>
                        <div className="separator">....................</div>
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
                    margin-bottom: 60px;
                }

                .nav-link {
                    color: #000;
                    text-decoration: none;
                }

                .main-content {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 20px;
                }

                .center-block {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 800px;
                }

                .image-wrapper {
                    position: relative;
                    margin-bottom: 30px;
                }

                .main-image {
                    display: block;
                    width: 320px;
                    height: 320px;
                    object-fit: cover;
                    background-color: transparent;
                }

                .page-title {
                    font-size: 24px;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    margin: 0;
                    position: absolute;
                    bottom: 0;
                    right: -140px;
                    text-transform: uppercase;
                }

                .bio-section {
                    text-align: center;
                    margin-top: 20px;
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
                }

                .separator {
                    margin-top: 30px;
                    font-size: 10px;
                    letter-spacing: 2px;
                    opacity: 0.6;
                }

                @media (max-width: 600px) {
                    .page-title {
                        position: static;
                        margin-top: 15px;
                        text-align: center;
                        right: auto;
                    }
                    .image-wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
        </div>
    )
}
