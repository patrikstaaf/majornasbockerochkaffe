export default {
  title: 'Stående erbjudande',
  name: 'permanentOffer',
  type: 'document',
  fields: [
    {
      title: 'Stående erbjudande',
      name: 'title',
      type: 'string',
      description: 'Beskriv erbjudandet.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.required().max(200).error('Max 200 tecken.'),
    },
    {
      title: 'Pris',
      name: 'price',
      type: 'string',
      description: 'Ange priset i siffror.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(5).error('Nu blev det dyrt, max 5 tecken.'),
    },
    {
      title: 'Inbjudande bild',
      name: 'image',
      type: 'image',
      description: 'En inbjudande bild på erbjudandet.',
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
