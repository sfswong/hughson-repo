export default {
  title: "Call to action",
  name: "cta",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Internal link",
      description: "Use this to link between pages on the website",
      name: "link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "link",
    },
  },
}
