export default {
  title: 'Butik & Café',
  name: 'aboutTheStore',
  type: 'document',
  fields: [
    {
      title: 'Kort om Majornas böcker & kaffe',
      name: 'shortGeneralDescriptionAboutTheStore',
      type: 'text',
      rows: 5,
      description:
        'En kort beskrivning/summering om Majornas böcker & kaffe som renderas ut på startsidan.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Generell bild på lokalen',
      name: 'generalImage',
      type: 'image',
      description: 'En generell bild på lokalen som renderas ut på startsidan.',
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
    {
      title: 'Om bokhandeln',
      name: 'descriptionAboutTheBookStore',
      type: 'text',
      rows: 5,
      description: 'En beskrivning specifikt om bokhandeln.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(150).error('Håll det kort, max 150 tecken.'),
    },
    // {
    //   title: 'Kort om bokhandeln',
    //   name: 'shortDescriptionAboutTheBookStore',
    //   type: 'text',
    //   rows: 5,
    //   description:
    //     'En kort summering specifikt om bokhandeln som renderas ut på startsidan.',
    //   validation: (Rule) => Rule.required(),
    //   validation: (Rule) =>
    //     Rule.required().max(150).error('Håll det kort, max 150 tecken.'),
    // },
    {
      title: 'Bild på bokhandeln',
      name: 'bookStoreImage',
      type: 'image',
      description: 'En bild specifikt på bokhandeln.',
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
    {
      title: 'Om kaféet',
      name: 'descriptionAboutTheCafe',
      type: 'text',
      rows: 5,
      description: 'En beskrivning specifikt om kaféet.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(150).error('Håll det kort, max 150 tecken.'),
    },
    {
      title: 'Kort om kaféet',
      name: 'shortDescriptionAboutTheCafe',
      type: 'text',
      rows: 5,
      description:
        'En kort summering specifikt om kaféet som renderas ut på startsidan.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(100).error('Håll det kort, max 100 tecken.'),
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
    },
    {
      title: 'Om barnavdelningen',
      name: 'descriptionAboutTheChildSection',
      type: 'text',
      rows: 5,
      description: 'En beskrivning specifikt om barnavdelningen.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Bilder på barnavdelningen',
      name: 'imagesOfChildSection',
      description: 'Två generella bilder om barnavdelningen.',
      type: 'array',
      of: [
        {
          type: 'image',
          //   title: 'Bild',
          //   name: 'singleImageName',
          options: {
            hotspot: true,
          },

          fields: [
            // {
            //   type: 'string',
            //   title: 'Bildtitel',
            //   name: 'singleImageName',
            // },
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
    },
  ],
};
