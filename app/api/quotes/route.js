import { NextResponse } from 'next/server';
import { getQuotes } from '@/sanity/lib/queries';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const featured = searchParams.get('featured');

        const featuredParam = featured === 'true' ? true : featured === 'false' ? false : null;
        const quotes = await getQuotes(featuredParam);

        return NextResponse.json(quotes);
    } catch (error) {
        console.error('Erreur lors de la récupération des citations:', error);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }
}
