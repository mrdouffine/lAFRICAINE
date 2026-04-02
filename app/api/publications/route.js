import { NextResponse } from 'next/server';
import { getPublications } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export async function GET() {
    try {
        const publications = await getPublications();

        // Transformer les données pour inclure les URLs d'images
        const publicationsWithImages = publications.map(pub => ({
            ...pub,
            coverImageUrl: pub.coverImage ? urlFor(pub.coverImage).width(600).height(800).url() : null
        }));

        return NextResponse.json(publicationsWithImages);
    } catch (error) {
        console.error('Erreur lors de la récupération des publications:', error);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }
}
