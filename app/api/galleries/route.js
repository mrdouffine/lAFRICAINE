import { NextResponse } from 'next/server';
import { getGalleries } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');

        const galleries = await getGalleries(category);

        // Transformer les données pour inclure les URLs d'images
        const galleriesWithImages = galleries.map(gallery => ({
            ...gallery,
            images: gallery.images?.map(img => ({
                url: urlFor(img).width(1200).height(900).url(),
                caption: img.caption,
                alt: img.alt
            })) || []
        }));

        return NextResponse.json(galleriesWithImages);
    } catch (error) {
        console.error('Erreur lors de la récupération des galeries:', error);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }
}
