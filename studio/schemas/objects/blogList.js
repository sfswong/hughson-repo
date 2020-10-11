export default {
    type: "object",
    name: "blogList",
    title: "Blog List",
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
      prepare({title}) {
        return {
          title,
          subtitle: 'List of Blogs'
        }
      }
    },
  }
  