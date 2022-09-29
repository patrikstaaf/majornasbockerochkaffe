export default {
  title: 'Företagsinfo',
  name: 'companyInfo',
  type: 'document',
  fields: [
    {
      title: 'Adress',
      name: 'address',
      type: 'string',
      description: 'Ange allt på en rad: Allmänna vägen 22 414 60 Göteborg',
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.required().max(200).error('Max 200 tecken.'),
    },
    {
      title: 'Närmsta hållplats',
      name: 'closestPublicTransportStop',
      type: 'text',
      rows: 2,
      description:
        'Ange en mening som informerar om både närmsta spårvagn- samt busshållplats.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(120).error('Håll det kort, max 120 tecken.'),
    },
    {
      title: 'Vägbeskrivning',
      name: 'directions',
      type: 'text',
      rows: 4,
      description: 'Ange en kort vägbeskrivning till butiken.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Telefon',
      name: 'phone',
      type: 'string',
      description: 'Ange telefonnumret i ett följe: 0763414000.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required()
          .max(12)
          .error('Borde inte vara så här långt... max 12 tecken.'),
    },
    {
      title: 'Epost',
      name: 'email',
      type: 'string',
      description: 'Ange telefonnumret i ett följe: info@majornasbocker.se.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required()
          .max(50)
          .error('Borde inte vara så här långt... max 50 tecken.'),
    },
    {
      title: 'Facebook-länk',
      name: 'facebookUrl',
      type: 'string',
      description: 'Ange hela länken alltså inte bara Facebook-sidans namn.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Instagram-länk',
      name: 'instagramUrl',
      type: 'string',
      description: 'Ange hela länken alltså inte bara Instagram-sidans namn.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Öppettider',
      name: 'openingHours',
      type: 'text',
      rows: 2,
      description:
        'Ange vardagar och dess tider på en rad samt helger och dess tider på andra. Separera raden med kommatecken.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Välkomsttext',
      name: 'heroText',
      type: 'text',
      rows: 2,
      description:
        'Denna text renderas ut i första stycket på startsidan, alltså under menyn.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Bild utsidan av bokhandeln',
      name: 'outsideImageOfShop',
      type: 'image',
      description:
        'Bild på utsidan av bokhandeln som renderas ut på kontaktsidan.',
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
