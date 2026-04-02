import { NextResponse } from 'next/server';
import { getCollaborations } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export async function GET() {
    try {
        const collaborations = await getCollaborations();

        // Transformer les données pour inclure les URLs d'images
        const collaborationsWithImages = collaborations.map(collab => ({
            ...collab,
            imageUrl: collab.image ? urlFor(collab.image).width(800).height(600).url() : null
        }));

        return NextResponse.json(collaborationsWithImages);
    } catch (error) {
        console.error('Erreur lors de la récupération des collaborations:', error);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }
}
