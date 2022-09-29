export default {
  title: 'Boktips',
  name: 'bookOfTheMonth',
  type: 'document',
  fields: [
    {
      title: 'Boktitel',
      name: 'title',
      type: 'string',
      description: 'Ange titel.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.required().max(70).error('Max 70 tecken.'),
    },
    {
      title: 'Författare',
      name: 'author',
      type: 'string',
      description: 'Om det är fler än en går det bra att skriva flera namn.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.required().max(70).error('Max 70 tecken.'),
    },
    {
      title: 'Utgivningsår',
      name: 'releaseYear',
      type: 'string',
      description: 'Ange årtal.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.required().max(6).error('Max 6 tecken.'),
    },
    {
      title: 'Genre',
      name: 'genre',
      type: 'string',
      description: 'Ange genre.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.required().max(30).error('Max 30 tecken.'),
    },
    {
      title: 'Beskrivning',
      name: 'description',
      type: 'text',
      rows: 5,
      description: 'En väldigt kort beskrivning/fakta om boken.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.required().max(300).error('Max 300 tecken.'),
    },
    {
      title: 'Bokomslag',
      name: 'cover',
      type: 'image',
      description: 'En bild på bokomslaget.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alternativ text för bilden',
          description: 'Detta är för tillgänglighet och sökmotorn',
          options: {
            isHighlighted: true,
          },
          validation: (Rule) =>
            Rule.required().warning('Lägg till en alt text'),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
