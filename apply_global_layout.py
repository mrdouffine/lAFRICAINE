
import os
import re

# Standard Layout Template using unique placeholders
TEMPLATE_START = """
"use client";
import Image from 'next/image';
import Link from 'next/link';
[[EXTRA_IMPORTS]]

export default function [[COMPONENT_NAME]]() {
    [[DATA_DECLARATIONS]]

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
                            src="[[IMAGE_SRC]]" 
                            alt="[[TITLE_TEXT]]" 
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
                        <h1 className="page-title">[[TITLE_TEXT]]</h1>
                    </div>
                    
                    <div className="content-wrapper">
                        [[CONTENT_JSX]]
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
                    gap: 40px; 
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
                    text-align: left;
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
                .grid-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: transform 0.3s; }
                .grid-img:hover { transform: scale(1.05); }

                @media (max-width: 600px) {
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
                
                [[EXTRA_CSS]]
            `}</style>
        </div>
    )
}
"""

# Pages Configuration
PAGES = {
    "consulting": {
        "title": "CONSULTING",
        "image": "/images/consulting_portrait.png",
        "extract_data": True, 
    },
    "lectures": {
        "title": "LECTURES . TALKS . KEYNOTES . PANELS",
        "image": "/images/lecture_portrait.png",
        "extract_data": True
    },
    "academic": {
        "title": "ACADEMIC",
        "image": "/images/academic_portrait.png",
        "extract_data": True
    },
    "curating": {
        "title": "CURATING",
        "image": "/images/curating_portrait.png",
        "extract_data": True
    },
    "tech": {
        "title": "TECH",
        "image": "/images/curating_portrait.png",
        "extract_data": True
    },
    "press": {
        "title": "PRESS . MEDIAS . MENTIONS",
        "image": "/images/press_portrait.png",
        "extract_data": True
    },
    "video": {
        "title": "VIDÉOS",
        "image": "/images/video_portrait.png",
        "extract_data": True
    },
    "audio": {
        "title": "AUDIOS",
        "image": "/images/curating_portrait.png", 
        "extract_data": True
    },
    "publication": {
        "title": "PUBLICATIONS",
        "image": "/images/publication_portrait.png", 
        "extract_data": True
    },
    "commitment": {
        "title": "COMMITMENTS",
        "image": "/images/commitment_portrait.png",
        "extract_data": True
    },
    "architecture": {
        "title": "ARCHITECTURE",
        "image": "/images/architecture_portrait.png",
        "extract_data": True
    },
    "collaboration": {
        "title": "COLLABORATION",
        "image": "/images/collaboration_portrait.png",
        "extract_data": True
    },
    "invest": {
        "title": "INVEST",
        "image": "/images/invest_portrait.png",
        "extract_data": True
    },
    "edition": {
        "title": "EDITION",
        "image": "/images/edition_portrait.png",
        "extract_data": True
    },
    "lessons": {
        "title": "LESSONS",
        "image": "/images/lessons_portrait.png",
        "extract_data": True
    },
    "photo": {
        "title": "PHOTO",
        "image": "/images/photo_portrait.png",
        "extract_data": True
    },
    "quotes": {
        "title": "QUOTES",
        "image": "/images/quotes_portrait.png",
        "extract_data": True
    },
    "honor": {
        "title": "HONOUR . AWARDS",
        "image": "/images/contact_portrait.png",
        "extract_data": True
    },
    "board": {
        "title": "RÉSEAUX . BOARDS",
        "image": "/images/contact_portrait.png",
        "extract_data": True
    }
}

APP_DIR = "/home/vladmir/Documents/LAFRICAINE/app"

def process_page(page_name, config):
    file_path = os.path.join(APP_DIR, page_name, "page.js")
    if not os.path.exists(file_path):
        print(f"Skipping {page_name}: file not found")
        return

    with open(file_path, 'r') as f:
        content = f.read()

    data_declarations = ""
    datas = re.findall(r'(const\s+\w+\s*=\s*\[[\s\S]*?\];)', content)
    for data in datas:
        data_declarations += data + "\n\n"
    
    extra_imports = ""
    if "useState" in content:
        extra_imports += "import { useState } from 'react';\n"
    
    content_jsx = ""
    extra_css = ""
    
    # Custom Logic per Page
    if page_name == "video":
        content_jsx = """
            <div className="video-grid">
                {videoItems.map((video, index) => (
                    <div key={index} className="video-item">
                        <div className="video-wrapper">
                            <iframe
                                src={video.embedUrl}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-info">
                            <h3 className="item-title">{video.title}</h3>
                            <p className="item-meta">{video.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        """
        extra_css = """
            .video-item { margin-bottom: 40px; }
            .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background: #000; margin-bottom: 10px; }
            .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
            .item-title { font-size: 12px; font-weight: bold; margin: 0 0 5px 0; text-transform: uppercase; }
            .item-meta { font-size: 11px; color: #444; margin: 0; }
        """
    
    elif page_name == "lectures":
        content_jsx = """
            <div className="lectures-list">
                {lectures.map((lecture, index) => (
                    <div key={index} className="lecture-item">
                         <a href={lecture.url || "#"} className="item-title-link" target="_blank" rel="noopener noreferrer">
                            {lecture.title}
                         </a>
                         <div className="item-meta">
                            {lecture.event && <span className="event-name">{lecture.event}</span>}
                            {lecture.location && <span className="location">, {lecture.location}</span>}
                            {lecture.date && <span className="date">, {lecture.date}</span>}
                         </div>
                    </div>
                ))}
            </div>
            
            <div className="images-grid-container">
                <div className="grid-item"><img src="/images/lecture_1.png" className="grid-img"/></div>
                <div className="grid-item"><img src="/images/lecture_2.png" className="grid-img"/></div>
                <div className="grid-item"><img src="/images/lecture_3.png" className="grid-img"/></div>
                <div className="grid-item"><img src="/images/lecture_4.png" className="grid-img"/></div>
                <div className="grid-item"><img src="/images/lecture_5.png" className="grid-img"/></div>
                <div className="grid-item"><img src="/images/lecture_6.png" className="grid-img"/></div>
            </div>
        """
        extra_css = """
            .lecture-item { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #ccc; }
            .item-title-link { font-size: 12px; font-weight: bold; display: block; margin-bottom: 4px; color: #000; }
            .item-title-link:hover { background-color: #ffff33; text-decoration: none; }
            .item-meta { font-size: 10px; color: #444; }
            .images-grid-container { margin-top: 60px; }
        """

    elif page_name == "consulting":
        content_jsx = """
            <div className="consulting-list">
                {consultingItems.map((item, index) => (
                    <div key={index} className="consulting-item">
                        <h3 className="consulting-org">{item.organization}</h3>
                        <p className="consulting-detail">{item.detail}</p>
                        <p className="consulting-contrib">{item.contribution}</p>
                    </div>
                ))}
            </div>
             <div className="images-grid-container">
                <div className="grid-item"><img src="/images/consulting_1.png" className="grid-img"/></div>
                <div className="grid-item"><img src="/images/consulting_2.png" className="grid-img"/></div>
                <div className="grid-item"><img src="/images/consulting_3.png" className="grid-img"/></div>
            </div>
        """
        extra_css = """
            .consulting-item { margin-bottom: 30px; }
            .consulting-org { font-size: 12px; font-weight: bold; margin: 0 0 5px 0; text-transform: uppercase; }
            .consulting-detail { font-size: 11px; margin: 0 0 2px 0; }
            .consulting-contrib { font-size: 10px; font-style: italic; color: #555; }
        """
    
    else:
        content_jsx = """
            <p>Page in construction. Content will be added shortly.</p>
        """

    # Do replacements
    final_content = TEMPLATE_START
    final_content = final_content.replace("[[EXTRA_IMPORTS]]", extra_imports)
    final_content = final_content.replace("[[COMPONENT_NAME]]", page_name.capitalize())
    final_content = final_content.replace("[[DATA_DECLARATIONS]]", data_declarations)
    final_content = final_content.replace("[[IMAGE_SRC]]", config['image'])
    final_content = final_content.replace("[[TITLE_TEXT]]", config['title'])
    final_content = final_content.replace("[[CONTENT_JSX]]", content_jsx)
    final_content = final_content.replace("[[EXTRA_CSS]]", extra_css)

    with open(file_path, 'w') as f:
        f.write(final_content)
    print(f"Updated {page_name}")

for page, config in PAGES.items():
    process_page(page, config)

