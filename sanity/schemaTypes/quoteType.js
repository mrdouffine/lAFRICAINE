import { defineField, defineType } from 'sanity'

export const quoteType = defineType({
    name: 'quote',
    title: 'Citation',
    type: 'document',
    fields: [
        defineField({
            name: 'text',
            title: 'Texte de la citation',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Auteur',
            type: 'string',
        }),
        defineField({
            name: 'source',
            title: 'Source',
            type: 'string',
            description: 'Livre, article, conférence, etc.',
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
                    { title: 'Philosophie', value: 'philosophy' },
                    { title: 'Société', value: 'society' },
                ],
            },
        }),
        defineField({
            name: 'featured',
            title: 'Citation mise en avant',
            type: 'boolean',
            description: 'Afficher cette citation en priorité',
        }),
        defineField({
            name: 'order',
            title: 'Ordre d\'affichage',
            type: 'number',
        }),
    ],
})
