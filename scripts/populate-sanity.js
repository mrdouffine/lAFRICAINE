/**
 * Script pour importer les données existantes dans Sanity
 * 
 * Ce script crée les documents initiaux dans Sanity avec le contenu
 * actuellement codé en dur dans les pages.
 * 
 * Usage: node scripts/populate-sanity.js
 */

import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config({ path: '.env.local' });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN, // Vous devrez créer un token dans Sanity
    apiVersion: '2026-02-08',
});

// Données de la biographie
const biographyData = {
    _type: 'biography',
    name: 'Sename Koffi AGBODJINOU',
    shortBio: [
        'Designer x architect x anthropologist by training,',
        'Author, curator, tech- activist & entrepreneur,',
        'Founder : L\'Africaine d\'architecture,',
        'Founder, funder, catalyst : HubCity/ WoeLab.'
    ],
    longBio: [
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Sename Koffi Agbodjinou est promoteur de la pensée néovernaculaire qu\'il décline concrètement en tant que designer, architecte, entrepreneur aux différentes échelles du produit, du bâtiment et de la ville. Il est le créateur de L\'Africaine d\'architecture, une plateforme d\'expérimentations sur les questions de l\'architecture et de la ville africaines et des WoeLabs : réseau de tech-hubs togolais dont l\'ambition est de "rendre tout le monde égal en face de la technologie" ! Avec sa communauté, il contribue à prototyper un collectivisme digital qui a permis de lancer la demi-douzaine de startups du Groupe HubCity. Sa vision prospective éclaire plusieurs conférences, institutions et grands groupes.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Né en 1980 à Lomé, Sename Koffi Agbodjinou est principalement architecte et anthropologue de formation (ENSAPLV, EHESS -Paris). Il crée en 2010 la plateforme L\'Africaine d\'architecture sur la ligne "Modernité ancrée », avec l\'objectif de fournir les moyens conceptuels d\'une alternative architecturale valorisant les canons, dynamiques et ressources du cru.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Il devient défenseur d\'un vernaculaire numérique, en 2012, quand il croit identifier une correspondance entre l\'éthique hacker et celles les sociétés de tradition. Le concept #LowHighTech voit le jour pour souligner cette proximité et envisager une approche originale des questions d\'innovation impliquant les couches les plus modestes.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'L\'utopie urbaine HubCités Africaines, les Espaces de Démocratie Technologique WoeLab et la "first made in Africa" imprimante 3D Wafate sont les meilleurs ambassadeurs de cette vision de société pionnière dans la critique de la Smart City.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Sénamé dirige les WoeLab, lieux atypiques, entièrement autofinancés, qui rendent possibles la mutualisation des intelligences et le brassage de populations diverses adoptant des usages à faible empreinte environnementale. Il y incube une communauté de jeunes pensionnaires, co-sociétaires de la demi- douzaine de startups du groupe HubCity.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'En qualité de curateur et de scénographe, il a conçu diverses installations et exposé au ZKM ou encore au siège du Parlement Européen. Il a doublement été sollicité en 2020 pour présenter dans l\'exposition centrale et collaborer au pavillon allemand de la Biennale d\'Architecture de Venise.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Sénamé est régulièrement keynote speaker dans de grandes conférences comme SXSW- Austin, Republica- Berlin, WORLD FORUM FOR A RESPONSIBLE ECONOMY- Lille, UNESCO/Netexplo -Paris, World maker faire – NYC, etc.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Son intérêt embrasse des champs aussi divers que le design et l\'architecture durables, la transformation digitale intégrée, l\'économie collaborative, le mouvement maker, etc.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Il a été élu en 2017 au prestigieux programme pour entrepreneurs sociaux de la Fondation Ashoka.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Sename Koffi Agbodjinou est candidat aux élections présidentielles du Togo en 2025 avec un programme dit d\'abolition de la fonction présidentielle.'
            }]
        }
    ],
    bioArchitecture: [
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Designer, architecte et anthropologue (Creapole-Esdi, ENSA- Paris La Villette, EHESS) Sénamé Koffi Agbodjinou se targue de n\'avoir l\'estampille d\'aucune académie. Il manifeste un intérêt précoce aux matériaux disponibles localement et se spécialise dans les architectures anciennes africaines. Il y explore depuis 2002, en chercheur indépendant, la possibilité d\'un fonds commun symbolique et son potentiel de questionnement de notre contemporanéité. Sous la direction de Klaus Hamberger, il s\'intéresse à la relation Feminin- Espace dans les sociétés du Togo du Nord.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Après une longue expérience dans la construction écologique et humanitaire notamment comme chef de projet chez l\'Association de la Voûte Nubienne au Burkina ou sur les chantiers d\'été du maître italien Fabrizio Carola, il fonde la plateforme \'L\'Africaine d\'architecture\' sur la ligne « modernité ancrée » dont l\'ambition est de fournir les moyens conceptuels d\'une alternative architecturale valorisant des canons, esthétiques, ressources et dynamiques du cru. Il est le maître d\'oeuvre (2006) du projet de l\'École Tammari, complexe scolaire pour 200 enfants réalisé en terre crue et techniques mixtes avec les bâtisseurs traditionnels et la communauté du village de Koulangou (Pays tamberma, Nord Togo) sur un site classé au patrimoine mondial de l\'UNESCO.'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'En 2020, il est sélectionné par Hashim Sarkis, le commissaire de la 17e Biennale d\'Architecture de Venise pour présenter dans l\'exposition centrale malheureusement annulée en raison de la crise sanitaire. Il avait proposé une microarchitecture en terre imprimée, une technologie à laquelle il accorde une attention soutenue étant le principal initiateur avec sa communauté WoeLab de la toute première imprimante 3D développée en Afrique (2012).'
            }]
        },
        {
            _type: 'block',
            children: [{
                _type: 'span',
                text: 'Sename Koffi A. est présent dans les plus grandes conférences internationales où il porte la voix d\'une Afrique inattendue, ancrée et audacieuse. Il était récemment l\'invité spécial de l\'architecte français Patrick Bouchain pour un échange sur le site d\'une des expérimentations de ce dernier à Bagneux.'
            }]
        }
    ]
};

// Paramètres du site
const siteSettingsData = {
    _type: 'siteSettings',
    title: 'L\'Africaine d\'architecture - Sename Koffi Agbodjinou',
    description: 'Site officiel de Sename Koffi Agbodjinou - Designer, architecte, anthropologue, entrepreneur',
    email: 'contact@lafricaine.org',
};

async function populateSanity() {
    try {
        console.log('🚀 Début de l\'importation des données dans Sanity...\n');

        // Créer la biographie
        console.log('📝 Création de la biographie...');
        const biography = await client.create(biographyData);
        console.log('✅ Biographie créée avec l\'ID:', biography._id);

        // Créer les paramètres du site
        console.log('\n⚙️  Création des paramètres du site...');
        const settings = await client.create(siteSettingsData);
        console.log('✅ Paramètres créés avec l\'ID:', settings._id);

        console.log('\n✨ Importation terminée avec succès !');
        console.log('\n📌 Prochaines étapes :');
        console.log('1. Allez sur http://localhost:3001/admin');
        console.log('2. Uploadez la photo de portrait dans la biographie');
        console.log('3. Ajoutez des collaborations, galeries, publications et citations');
        console.log('4. Mettez à jour vos pages pour utiliser les données de Sanity');

    } catch (error) {
        console.error('❌ Erreur lors de l\'importation:', error.message);
        console.log('\n💡 Assurez-vous que :');
        console.log('1. Le studio Sanity est enregistré');
        console.log('2. Vous avez créé un token API dans Sanity');
        console.log('3. Le token est ajouté dans .env.local comme SANITY_API_TOKEN');
    }
}

// Exécuter le script
populateSanity();
