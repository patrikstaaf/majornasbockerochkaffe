import { FaPen } from 'react-icons/fa';

export default {
  title: 'Författare',
  name: 'author',
  type: 'document',
  icon: FaPen,
  fields: [
    {
      name: 'name',
      title: 'Namn',
      type: 'string',
      description: 'Författarens namn',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'image',
      title: 'Profilbild',
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
          validation: (Rule) =>
            Rule.required().warning('Lägg till en alt text'),
        },
      ],
    },
    // {
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // },
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image',
  //   },
  // },
};
