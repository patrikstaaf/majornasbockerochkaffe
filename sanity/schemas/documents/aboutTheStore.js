export default {
  title: 'Butik & Café',
  name: 'aboutTheStore',
  type: 'document',
  fields: [
    {
      title: 'Kort om Majornas Böcker & Kaffe',
      name: 'shortGeneralDescriptionAboutTheStore',
      type: 'text',
      rows: 3,
      description:
        'Ange en kort beskrivning/summering om Majornas Böcker & Kaffe som renderas ut på startsidan.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Om bokhandeln',
      name: 'descriptionAboutTheBookStore',
      type: 'text',
      rows: 5,
      description: 'Ange en beskrivning om bokhandeln.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(300).error('Håll det kort, max 300 tecken.'),
    },
    {
      title: 'Bild på bokhandeln',
      name: 'bookStoreImage',
      type: 'image',
      description: 'En bild på bokhandeln.',
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
    {
      title: 'Kort om kaféet',
      name: 'shortDescriptionAboutTheCafe',
      type: 'text',
      rows: 3,
      description:
        'Ange en kort summering om kaféet som renderas ut på startsidan.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Om kaféet',
      name: 'descriptionAboutTheCafe',
      type: 'text',
      rows: 5,
      description: 'Ange en beskrivning om kaféet.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(300).error('Håll det kort, max 300 tecken.'),
    },

    {
      title: 'Bild på kaféet',
      name: 'cafeImage',
      type: 'image',
      description: 'En bild specifikt på kaféet.',
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
    {
      title: 'Om barnavdelningen',
      name: 'descriptionAboutTheChildSection',
      type: 'text',
      rows: 5,
      description: 'Ange en beskrivning specifikt om barnavdelningen.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(350).error('Håll det kort, max 350 tecken.'),
    },
    {
      title: 'Bilder på barnavdelningen',
      name: 'imagesOfChildSection',
      description: 'Tre bilder på barnavdelningen.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              type: 'string',
              title: 'Alternativ text för bilden',
              name: 'alt',
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
      validation: (Rule) => Rule.required().length(3),
    },
  ],
};
