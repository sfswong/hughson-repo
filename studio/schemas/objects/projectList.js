export default {
  type: "object",
  name: "projectList",
  title: "Projects List",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Preview of Projects",
      }
    },
  },
}
