export default {
  title: 'Företagsinfo',
  name: 'companyInfo',
  type: 'document',
  fields: [
    {
      title: 'Företagets namn',
      name: 'companyName',
      type: 'string',
    },
    {
      title: 'Adress',
      name: 'address',
      type: 'string',
      description:
        'Skriv allt rakt upp ner, tex Allmänna vägen 22 414 60 Göteborg',
    },
    {
      title: 'Närmsta hållplats',
      name: 'closestPublicTransportStop',
      type: 'text',
      rows: 5,
      description:
        'En mening som informerar om både närmsta spårvagn- samt busshållplats.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(120).error('Håll det kort, max 120 tecken.'),
    },
    {
      title: 'Vägbeskrivning',
      name: 'directions',
      type: 'text',
      rows: 5,
      description: 'En kort vägbeskrivning till butiken.',
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.required().max(200).error('Håll det kort, max 200 tecken.'),
    },
    {
      title: 'Telefon',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Epost',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Facebook-länk',
      name: 'facebookUrl',
      type: 'string',
      description: 'Hela länken alltså inte bara facebook-sidans namn.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Instagram-länk',
      name: 'instagramUrl',
      type: 'string',
      description: 'Hela länken alltså inte bara instagram-sidans namn.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Öppettider',
      name: 'openinghours',
      type: 'text',
      rows: 2,
      description:
        'Skriv vardagar och dess tider på en rad samt helger och dess tider på andra.',
      validation: (Rule) => Rule.required(),
    },
    // {
    //   title: 'Om oss',
    //   name: 'about',
    //   type: 'blockContent',
    //   description: 'Beskrivning om företaget',
    // },
  ],
};
