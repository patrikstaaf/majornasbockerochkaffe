export default {
  title: 'Evenemang',
  name: 'aboutTheEvents',
  type: 'document',
  fields: [
    {
      title: 'Kort om författarkvällar',
      name: 'shortGeneralDescriptionAboutTheEvents',
      type: 'text',
      rows: 3,
      description:
        'Ange en kort beskrivning/summering om författarkvällar som renderas ut på startsidan.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Bild tillhörande författarkvällar',
      name: 'generalImageAuthorNights',
      type: 'image',
      description:
        'En bild om författarkvällar som renderas ut på startsidan samt evenemangssidan.',
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
      title: 'Följ med på författarkväll',
      name: 'descriptionAboutAttendingAuthorNights',
      type: 'text',
      rows: 10,
      description: 'Ange en beskrivning om att sitta med på författarkvällar.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(500).error('Håll det kort, max 500 tecken.'),
    },
    {
      title: 'Vill du hålla författarkväll hos oss?',
      name: 'descriptionHostingAuthorNights',
      type: 'text',
      rows: 7,
      description: 'Ange en beskrivning om att hålla i en författarkväll.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(500).error('Håll det kort, max 500 tecken.'),
    },
    {
      title: 'Bilder på tidigare författarkvällar',
      name: 'imagesOfPreviousAuthorNights',
      description: 'Fyra bilder från tidigare författarkvällar.',
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
      validation: (Rule) => Rule.required().length(4),
    },
    {
      title: 'Kort om bokcirklar',
      name: 'shortGeneralDescriptionAboutBookClub',
      type: 'text',
      rows: 3,
      description:
        'En kort beskrivning/summering om bokcirklar som renderas ut på startsidan.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Bild tillhörande bokcirklar',
      name: 'generalImageAuthorBookClub',
      type: 'image',
      description:
        'En bild om bokcirklar som renderas ut på startsidan samt evenemangssidan.',
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
      title: 'Vill du vara med i en bokcirkel?',
      name: 'descriptionAboutAttendingBookClub',
      type: 'text',
      rows: 10,
      description: 'En beskrivning om att delta i en bokcirkel.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(500).error('Håll det kort, max 500 tecken.'),
    },
    {
      title: 'Välkommen in på bokhandelskväll',
      name: 'descriptionAboutBookStoreNight',
      type: 'text',
      rows: 10,
      description: 'En beskrivning om bokhandelskvällar.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(500).error('Håll det kort, max 500 tecken.'),
    },
    {
      title: 'Bild tillhörande bokhandelskvällar',
      name: 'generalImageAuthorBookStoreNight',
      type: 'image',
      description: 'En bild om bokhandelskvällar.',
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
