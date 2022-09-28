export default {
  title: 'Evenemang',
  name: 'aboutTheEvents',
  type: 'document',
  fields: [
    {
      title: 'Kort om författarkvällar',
      name: 'shortGeneralDescriptionAboutTheEvents',
      type: 'text',
      rows: 5,
      description:
        'En kort beskrivning/summering om författarkvällar som renderas ut på startsidan.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Genrell bild tillhörande författarkvällar',
      name: 'generalImageAuthorNights',
      type: 'image',
      description:
        'En generell bild om författarkvällar som renderas ut på startsidan.',
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
      title: 'Följ med på författarkväll',
      name: 'descriptionAboutAttendingAuthorNights',
      type: 'text',
      rows: 10,
      description: 'En beskrivning om att sitta med på författarkvällar.',
      // validation: (Rule) => Rule.required(),
      // validation: (Rule) =>
      //   Rule.required().max(300).error('Håll det kort, max 300 tecken.'),
    },
    {
      title: 'Vill du hålla författarkväll hos oss?',
      name: 'descriptionHostingAuthorNights',
      type: 'text',
      rows: 10,
      description: 'En beskrivning om att hålla i en författarkväll.',
      // validation: (Rule) => Rule.required(),
      // validation: (Rule) =>
      //   Rule.required().max(300).error('Håll det kort, max 300 tecken.'),
    },
    {
      title: 'Bilder på tidigare författarkvällar',
      name: 'imagesOfPreviousAuthorNights',
      description:
        'En generell bild om författarkvällar som renderas ut på startsidan.',
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
      validation: (Rule) => Rule.required().length(4),
    },
    {
      title: 'Kort om bokcirklar',
      name: 'shortGeneralDescriptionAboutBookClub',
      type: 'text',
      rows: 5,
      description:
        'En kort beskrivning/summering om bokcirklar som renderas ut på startsidan.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Genrell bild tillhörande bokcirklar',
      name: 'generalImageAuthorBookClub',
      type: 'image',
      description:
        'En generell bild om bokcirklar som renderas ut på startsidan.',
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
      title: 'Vill du vara med i en bokcirkel?',
      name: 'descriptionAboutAttendingBookClub',
      type: 'text',
      rows: 10,
      description: 'En beskrivning om att delta i en bokcirkel.',
      // validation: (Rule) => Rule.required(),
      // validation: (Rule) =>
      //   Rule.required().max(300).error('Håll det kort, max 300 tecken.'),
    },
    {
      title: 'Välkommen in på bokhandelskväll',
      name: 'descriptionAboutBookStoreNight',
      type: 'text',
      rows: 10,
      description: 'En beskrivning om bokhandelskvällar.',
      // validation: (Rule) => Rule.required(),
      // validation: (Rule) =>
      //   Rule.required().max(300).error('Håll det kort, max 300 tecken.'),
    },
    {
      title: 'Genrell bild tillhörande bokhandelskvällar',
      name: 'generalImageAuthorBookStoreNight',
      type: 'image',
      description: 'En generell bild om bokhandelskvällar.',
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
    // {
    //   title: 'Bild på där författarkvällar hålls',
    //   name: 'bookStoreImage',
    //   type: 'image',
    //   description: 'En bild specifikt på bokhandeln.',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       type: 'string',
    //       name: 'alt',
    //       title: 'Alternativ text för bilden',
    //       description: 'Detta är för tillgänglighet och sökmotorn',
    //       options: {
    //         isHighlighted: true,
    //       },
    //       validation: (Rule) =>
    //         Rule.required().warning('Lägg till en alt text'),
    //     },
    //   ],
    // },
  ],
};
