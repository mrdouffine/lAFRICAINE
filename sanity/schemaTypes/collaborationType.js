import { defineField, defineType } from 'sanity'

export const collaborationType = defineType({
    name: 'collaboration',
    title: 'Collaboration',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'year',
            title: 'Année',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Architecture', value: 'architecture' },
                    { title: 'Technologie', value: 'technology' },
                    { title: 'Curation', value: 'curation' },
                    { title: 'Autre', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'order',
            title: 'Ordre d\'affichage',
            type: 'number',
            description: 'Numéro pour trier les collaborations',
        }),
    ],
    orderings: [
        {
            title: 'Ordre d\'affichage',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
})
