export default {
  title: 'Boktips',
  name: 'bookOfTheMonth',
  type: 'document',
  fields: [
    {
      title: 'Boktitel',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Författare',
      name: 'author',
      type: 'string',
      description: 'Om det är fler än en går det bra att skriva flera namn.',
    },
    {
      title: 'Utgivningsår',
      name: 'releaseYear',
      type: 'string',
    },
    {
      title: 'Genre',
      name: 'genre',
      type: 'string',
    },
    {
      title: 'Beskrivning',
      name: 'description',
      type: 'text',
      rows: 5,
      description: 'En väldigt kort beskrivning/fakta om boken.',
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
    },
  ],
};
