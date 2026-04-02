"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CollaborationsSanity() {
    const [collaborations, setCollaborations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCollaborations() {
            try {
                const response = await fetch('/api/collaborations');
                const data = await response.json();
                setCollaborations(data);
            } catch (error) {
                console.error('Erreur lors du chargement des collaborations:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchCollaborations();
    }, []);

    if (loading) {
        return (
            <div className="page-container">
                <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <p>Chargement...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="nav-icons">
                <Link href="/" className="nav-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                </Link>
                <a href="mailto:contact@lafricaine.org" className="nav-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </a>
            </div>

            <div className="content">
                <h1 className="page-title">COLLABORATIONS</h1>

                {collaborations.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
                        <p>Aucune collaboration disponible.</p>
                        <p>Ajoutez du contenu dans <a href="/admin" style={{ color: 'blue', textDecoration: 'underline' }}>Sanity Studio</a></p>
                    </div>
                ) : (
                    <div className="collaborations-grid">
                        {collaborations.map((collab) => (
                            <div key={collab._id} className="collaboration-card">
                                {collab.imageUrl && (
                                    <div className="image-container">
                                        <Image
                                            src={collab.imageUrl}
                                            alt={collab.title}
                                            width={400}
                                            height={300}
                                            className="collaboration-image"
                                        />
                                    </div>
                                )}
                                <div className="collaboration-info">
                                    <h3 className="collaboration-title">{collab.title}</h3>
                                    {collab.year && <p className="collaboration-year">{collab.year}</p>}
                                    {collab.description && (
                                        <p className="collaboration-description">{collab.description}</p>
                                    )}
                                    {collab.category && (
                                        <span className="collaboration-category">{collab.category}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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

        .content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-title {
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 0.1em;
          margin-bottom: 50px;
          text-align: center;
        }

        .collaborations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }

        .collaboration-card {
          border: 1px solid #e0e0e0;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .collaboration-card:hover {
          transform: translateY(-5px);
        }

        .image-container {
          width: 100%;
          height: 250px;
          background-color: #f5f5f5;
          overflow: hidden;
        }

        .collaboration-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .collaboration-info {
          padding: 20px;
        }

        .collaboration-title {
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 10px 0;
        }

        .collaboration-year {
          font-size: 11px;
          color: #666;
          margin: 0 0 10px 0;
        }

        .collaboration-description {
          font-size: 11px;
          line-height: 1.5;
          margin: 0 0 15px 0;
          text-align: justify;
        }

        .collaboration-category {
          display: inline-block;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 5px 10px;
          background-color: #000;
          color: #fff;
        }

        @media (max-width: 768px) {
          .collaborations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
}
