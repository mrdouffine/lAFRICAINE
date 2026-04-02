import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
    name: 'gallery',
    title: 'Galerie',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre de la galerie',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Légende',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Texte alternatif',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Photos', value: 'photos' },
                    { title: 'Architecture', value: 'architecture' },
                    { title: 'Événements', value: 'events' },
                    { title: 'Projets', value: 'projects' },
                ],
            },
        }),
        defineField({
            name: 'order',
            title: 'Ordre d\'affichage',
            type: 'number',
        }),
    ],
})
