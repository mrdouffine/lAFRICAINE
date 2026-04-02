import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Paramètres du site',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre du site',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description du site',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'email',
            title: 'Email de contact',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'socialLinks',
            title: 'Liens réseaux sociaux',
            type: 'object',
            fields: [
                { name: 'twitter', type: 'url', title: 'Twitter' },
                { name: 'linkedin', type: 'url', title: 'LinkedIn' },
                { name: 'instagram', type: 'url', title: 'Instagram' },
                { name: 'facebook', type: 'url', title: 'Facebook' },
            ],
        }),
    ],
})
