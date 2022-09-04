import { FaBook } from 'react-icons/fa';

export default {
  title: 'Bok',
  name: 'book',
  type: 'document',
  icon: FaBook,
  fields: [
    {
      title: 'Titel',
      name: 'title',
      type: 'string',
      description: 'Titel av boken',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Omslag',
      name: 'cover',
      type: 'image',
      description: 'Frivilligt',
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
        },
      ],
    },
    {
      title: 'Författare',
      name: 'authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    },
  ],
};
