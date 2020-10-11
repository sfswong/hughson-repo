export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "mainImage",
    },
  },
}
