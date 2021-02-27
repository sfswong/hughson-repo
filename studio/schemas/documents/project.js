export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'mainImage'
    }
  }
}
