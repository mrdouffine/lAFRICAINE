import { PortableText } from '@portabletext/react'

// Composants personnalisés pour le rendu du texte riche
const components = {
    block: {
        // Paragraphes
        normal: ({ children }) => <p>{children}</p>,
        // Titres
        h1: ({ children }) => <h1 style={{ fontSize: '24px', fontWeight: '500', letterSpacing: '0.1em', marginBottom: '20px' }}>{children}</h1>,
        h2: ({ children }) => <h2 style={{ fontSize: '18px', fontWeight: '500', letterSpacing: '0.05em', marginBottom: '15px' }}>{children}</h2>,
        h3: ({ children }) => <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '0.05em' }}>{children}</h3>,
        // Citations
        blockquote: ({ children }) => (
            <blockquote style={{ borderLeft: '2px solid #000', paddingLeft: '20px', marginLeft: '0', fontStyle: 'italic' }}>
                {children}
            </blockquote>
        ),
    },
    marks: {
        // Texte en gras
        strong: ({ children }) => <strong>{children}</strong>,
        // Texte en italique
        em: ({ children }) => <em>{children}</em>,
        // Liens
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                    {children}
                </a>
            )
        },
    },
    list: {
        // Listes à puces
        bullet: ({ children }) => <ul style={{ marginLeft: '20px', marginBottom: '12px' }}>{children}</ul>,
        // Listes numérotées
        number: ({ children }) => <ol style={{ marginLeft: '20px', marginBottom: '12px' }}>{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li style={{ marginBottom: '5px' }}>{children}</li>,
        number: ({ children }) => <li style={{ marginBottom: '5px' }}>{children}</li>,
    },
}

export function RichText({ content }) {
    return <PortableText value={content} components={components} />
}
