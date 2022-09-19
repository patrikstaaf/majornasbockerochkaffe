import { BsFillCalendar2EventFill } from 'react-icons/bs';
export default {
  title: 'Kalendarium',
  name: 'calendar',
  type: 'document',
  icon: BsFillCalendar2EventFill,
  fields: [
    {
      title: 'Typ av event',
      description: 'Välj typ av event för att få fram korrekta fält',
      name: 'event',
      type: 'string',
      options: {
        list: [
          { title: 'Författarkväll', value: 'authorNight' },
          { title: 'Bokcirkel', value: 'bookClub' },
          { title: 'Bokhandelskväll', value: 'bookNight' },
          { title: 'Övrigt', value: 'misc' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Titel',
      name: 'authorEventTitle',
      type: 'string',
      description: 'Skriv tex: Författarkväll med (namn på författare)',
      hidden: ({ parent }) => parent?.event !== 'authorNight',
    },
    {
      title: 'Datum',
      name: 'authorEventDate',
      type: 'date',
      // description: 'Skriv datum + förkortning av månad, tex: 20 okt, 11 apr',
      hidden: ({ parent }) => parent?.event !== 'authorNight',
    },

    {
      title: 'Klockslag',
      name: 'authorEventTime',
      type: 'string',
      description: 'Skriv tex: 17:00-19:30',
      hidden: ({ parent }) => parent?.event !== 'authorNight',
    },
    {
      title: 'Kort beskrivning',
      name: 'authorNightDescription',
      type: 'text',
      rows: 2,
      description:
        'Skriv tex: 2019 fick Marit Kapla Augustpriset för sin bok ”Osebol”. Den 5 oktober besöker hon oss och berättar mer. Varmt välkommen!',
      hidden: ({ parent }) => parent?.event !== 'authorNight',
    },
    {
      title: 'Titel',
      name: 'bookClubtTitle',
      type: 'string',
      description: 'Skriv tex: Pocketbokcirkel',
      hidden: ({ parent }) => parent?.event !== 'bookClub',
    },
    {
      title: 'Datum',
      name: 'bookClubDate',
      type: 'string',
      description: 'Skriv datum + förkortning av månad, tex: 20 okt, 11 apr',
      hidden: ({ parent }) => parent?.event !== 'bookClub',
    },
    {
      title: 'Klockslag',
      name: 'bookClubTime',
      type: 'string',
      description: 'Skriv tex: 17:00-19:30',
      hidden: ({ parent }) => parent?.event !== 'bookClub',
    },
    {
      title: 'Kort beskrivning',
      name: 'bookClubDescription',
      type: 'text',
      rows: 2,
      description:
        'Skriv tex: För boken ”Nöjesfält” av Kerstin Sjödén och Andrea Brandin. Boken riktar sig till barn i lågstadieåldern, men alla är förstås varmt välkomna!',
      hidden: ({ parent }) => parent?.event !== 'bookClub',
    },
    {
      title: 'Titel',
      name: 'bookNightTitle',
      type: 'string',
      description: 'Skriv tex: Snart är det jul',
      hidden: ({ parent }) => parent?.event !== 'bookNight',
    },
    {
      title: 'Datum',
      name: 'bookNightDate',
      type: 'string',
      description: 'Skriv datum + förkortning av månad, tex: 20 okt, 11 apr',
      hidden: ({ parent }) => parent?.event !== 'bookNight',
    },
    {
      title: 'Klockslag',
      name: 'bookNightTime',
      type: 'string',
      description: 'Skriv tex: 17:00-19:30',
      hidden: ({ parent }) => parent?.event !== 'bookNight',
    },
    {
      title: 'Kort beskrivning',
      name: 'bookNightDescription',
      type: 'text',
      rows: 2,
      description: 'Snart är det jul',
      hidden: ({ parent }) => parent?.event !== 'bookNight',
    },
    {
      title: 'Titel',
      name: 'miscEventTitle',
      type: 'string',
      description: 'Skriv tex: "Releasefest" eller "Ändrade öppettider" etc.',
      hidden: ({ parent }) => parent?.event !== 'misc',
    },
    {
      title: 'Datum',
      name: 'miscEventDate',
      type: 'string',
      description: 'Skriv datum + förkortning av månad, tex: 20 okt, 11 apr',
      hidden: ({ parent }) => parent?.event !== 'misc',
    },
    {
      title: 'Klockslag',
      name: 'miscEventTime',
      type: 'string',
      description: 'Skriv tex: 17:00-19:30',
      hidden: ({ parent }) => parent?.event !== 'misc',
    },
    {
      title: 'Kort beskrivning',
      name: 'miscEventDescription',
      type: 'text',
      rows: 2,
      description:
        'Skriv tex: "Julledighet 23/12-12/1" eller "För boken ”Nöjesfält ” av Kerstin Sjödén och Andrea Brandin. Boken riktar sig till barn i lågstadieåldern, men alla är förstås varmt välkomna!"',
      hidden: ({ parent }) => parent?.event !== 'misc',
    },
  ],
};