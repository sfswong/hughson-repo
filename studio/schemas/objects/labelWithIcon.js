export default {
  name: "labelWithIcon",
  type: "object",
  title: "Label With Icon",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "icon",
      name: "icon",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "icon",
    },
  },
}
