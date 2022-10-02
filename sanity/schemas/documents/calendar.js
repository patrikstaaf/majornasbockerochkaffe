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
      title: 'Datum',
      name: 'calendarDate',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: '',
      },
      description: 'Ange datum och starttid.',
    },
    {
      title: 'Klockslag',
      name: 'eventTime',
      type: 'string',
      description:
        'Ange starttid och sluttid i följande format: 17:00-19:30. Om eventet inte har något tidsintervall kan du tex skriva "stängt" vid ledighet eller dylikt.',
    },
    {
      title: 'Titel',
      name: 'authorEventTitle',
      type: 'string',
      description:
        'Ange titel i följande format: Författarkväll med (namn på författare). Till exempel: Författarkväll med Marit Kapla.',
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
      title: 'Bild på författaren',
      name: 'authorNightImage',
      type: 'image',
      description: 'Bild på författaren som renderas ut på startsidan.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: 'string',
          name: 'authorNightImageAlt',
          title: 'Alternativ text för bilden',
          description: 'Detta är för tillgänglighet och sökmotorn',
          options: {
            isHighlighted: true,
          },
        },
      ],
      hidden: ({ parent }) => parent?.event !== 'authorNight',
    },

    {
      title: 'Titel',
      name: 'bookClubTitle',
      type: 'string',
      description: 'Ange typ av event som titel: Bokcirkel',
      hidden: ({ parent }) => parent?.event !== 'bookClub',
    },
    {
      title: 'Kort beskrivning',
      name: 'bookClubDescription',
      type: 'text',
      rows: 2,
      description: 'Skriv tex: Pocketbokcirkel',
      hidden: ({ parent }) => parent?.event !== 'bookClub',
    },
    {
      title: 'Titel',
      name: 'bookNightTitle',
      type: 'string',
      description: 'Ange typ av event som titel: Bokhandelskväll',
      hidden: ({ parent }) => parent?.event !== 'bookNight',
    },
    {
      title: 'Kort beskrivning',
      name: 'bookNightDescription',
      type: 'text',
      rows: 2,
      description: 'Skriv tex: Snart är det jul',
      hidden: ({ parent }) => parent?.event !== 'bookNight',
    },
    {
      title: 'Titel',
      name: 'miscEventTitle',
      type: 'string',
      description:
        'Skriv tex: "Releasefest" eller "Ändrade öppettider" OBS! Max 20 tecken.',
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
