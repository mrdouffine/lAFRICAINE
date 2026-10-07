'use client'

import { useCallback, useEffect, useState } from 'react'

// Affiche une image en grand format par-dessus la page.
// Usage : const { open, lightbox } = useLightbox(srcs)
//         <a href={src} onClick={open(i)}>...</a>  puis  {lightbox}
export function useLightbox(images) {
    const [index, setIndex] = useState(null)

    const open = useCallback((i) => (e) => {
        if (e) e.preventDefault()
        setIndex(i)
    }, [])

    const close = useCallback(() => setIndex(null), [])

    const step = useCallback((delta) => {
        setIndex((i) => (i === null ? i : (i + delta + images.length) % images.length))
    }, [images.length])

    useEffect(() => {
        if (index === null) return
        const onKey = (e) => {
            if (e.key === 'Escape') close()
            if (e.key === 'ArrowRight') step(1)
            if (e.key === 'ArrowLeft') step(-1)
        }
        const overflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = overflow
            window.removeEventListener('keydown', onKey)
        }
    }, [index, close, step])

    const lightbox = index === null ? null : (
        <div className="lightbox-overlay" onClick={close} role="dialog" aria-modal="true">
            <button className="lightbox-close" onClick={close} aria-label="Fermer">×</button>
            {images.length > 1 && (
                <button
                    className="lightbox-nav lightbox-prev"
                    onClick={(e) => { e.stopPropagation(); step(-1) }}
                    aria-label="Image précédente"
                >‹</button>
            )}
            <img
                src={images[index]}
                alt=""
                className="lightbox-img"
                onClick={(e) => e.stopPropagation()}
            />
            {images.length > 1 && (
                <button
                    className="lightbox-nav lightbox-next"
                    onClick={(e) => { e.stopPropagation(); step(1) }}
                    aria-label="Image suivante"
                >›</button>
            )}
            <style jsx>{`
                .lightbox-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 3000;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: zoom-out;
                }
                .lightbox-img {
                    max-width: 90vw;
                    max-height: 90vh;
                    object-fit: contain;
                    cursor: default;
                }
                .lightbox-close,
                .lightbox-nav {
                    position: absolute;
                    background: none;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    line-height: 1;
                    padding: 10px 16px;
                }
                .lightbox-close { top: 15px; right: 20px; font-size: 40px; }
                .lightbox-nav { top: 50%; transform: translateY(-50%); font-size: 60px; }
                .lightbox-prev { left: 10px; }
                .lightbox-next { right: 10px; }
                .lightbox-close:hover,
                .lightbox-nav:hover { color: #e6e600; }
            `}</style>
        </div>
    )

    return { open, lightbox }
}
