import { defineField, defineType } from 'sanity'

export const biographyType = defineType({
    name: 'biography',
    title: 'Biographie',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom complet',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'portrait',
            title: 'Photo de portrait',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'shortBio',
            title: 'Biographie courte',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Lignes de la biographie courte (sous le nom)',
        }),
        defineField({
            name: 'longBio',
            title: 'Biographie longue',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Texte complet de la biographie',
        }),
        defineField({
            name: 'bioArchitecture',
            title: 'Bio Architecture',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Section Bio Architecture',
        }),
    ],
})
