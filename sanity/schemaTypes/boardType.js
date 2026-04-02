import { defineField, defineType } from 'sanity'

export const boardType = defineType({
    name: 'board',
    title: 'Réseaux & Boards',
    type: 'document',
    fields: [
        defineField({
            name: 'organization',
            title: 'Nom de l\'organisation',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Rôle',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Année',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Lieu',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Lien',
            type: 'url',
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Board', value: 'board' },
                    { title: 'Mentorship', value: 'mentorship' },
                    { title: 'Fellow', value: 'fellow' },
                    { title: 'Autre', value: 'other' },
                ],
            },
            initialValue: 'board',
        }),
        defineField({
            name: 'order',
            title: 'Ordre d\'affichage',
            type: 'number',
        }),
    ],
})
