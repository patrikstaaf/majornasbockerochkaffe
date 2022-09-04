import { FaPen } from 'react-icons/fa';

export default {
  title: 'Företagsinfo',
  name: 'companyInfo',
  type: 'document',
  icon: FaPen,
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
    },
    {
      title: 'Instagram-länk',
      name: 'instagramUrl',
      type: 'string',
    },
    {
      title: 'Om oss',
      name: 'about',
      type: 'blockContent',
      description: 'Beskrivning om företaget',
    },
  ],
};
