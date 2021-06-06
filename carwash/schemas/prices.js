export default {
  name: 'cards',
  title: 'Cards',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },

    {
      name: 'description',
      type: 'string',
    },

    {
      name: 'car1',
      type: 'string',
    },
    {
      name: 'car2',
      type: 'string',
    },
    {
      name: 'car3',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      type: 'blockContent',
    },
    {
      title: 'isPopular',
      name: 'popular',
      type: 'boolean',
    },
  ],
  initialValue: {
    isPopular: false,
  },
};
