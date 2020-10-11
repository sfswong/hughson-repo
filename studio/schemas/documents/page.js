export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "path",
      type: "string",
      title: "Path",
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        { type: "hero" },
        { type: "aboutSection" },
        { type: "blogList" },
        { type: "projectList" },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "pageType",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `${subtitle} page type`,
      }
    },
  },
}
