export default {
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    {
      name: "topline",
      type: "string",
      title: "Top Line",
    },
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
      description: "Image gets shown towards the right",
    },
    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        {
          title: "Call to action",
          type: "cta",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "headline",
      media: "mainImage",
      ctas: "ctas",
    },
    prepare({ title, media, ctas }) {
      return {
        title: title,
        subtitle: `Hero section - ${ctas.length} CTAs`,
        media,
      }
    },
  },
}
