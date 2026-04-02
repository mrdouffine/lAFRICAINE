import { defineField, defineType } from 'sanity'

export const publicationType = defineType({
    name: 'publication',
    title: 'Publication',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Sous-titre',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'coverImage',
            title: 'Image de couverture',
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
            name: 'publisher',
            title: 'Éditeur',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type de publication',
            type: 'string',
            options: {
                list: [
                    { title: 'Livre', value: 'book' },
                    { title: 'Article', value: 'article' },
                    { title: 'Essai', value: 'essay' },
                    { title: 'Catalogue', value: 'catalog' },
                ],
            },
        }),
        defineField({
            name: 'link',
            title: 'Lien externe',
            type: 'url',
        }),
        defineField({
            name: 'order',
            title: 'Ordre d\'affichage',
            type: 'number',
        }),
    ],
})
