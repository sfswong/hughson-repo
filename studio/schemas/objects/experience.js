export default {
  name: "experience",
  type: "object",
  title: "Experience",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "years",
      name: "years",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "years",
    },
  },
}
