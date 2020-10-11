export default {
  type: "object",
  name: "aboutSection",
  title: "About Section",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
    {
      name: "skills",
      type: "array",
      title: "Skills",
      of: [
        {
          type: "labelWithIcon",
        },
      ],
    },
    {
      name: "tools",
      type: "array",
      title: "Tools",
      of: [
        {
          type: "labelWithIcon",
        },
      ],
    },
    {
      name: "passions",
      type: "array",
      title: "Passions",
      of: [
        {
          type: "labelWithIcon",
        },
      ],
    },
    {
      name: "schools",
      title: "Schools",
      type: "array",
      of: [{ type: "experience" }],
    },
    {
      name: "experiences",
      title: "Experiences",
      type: "array",
      of: [{ type: "experience" }],
    },
  ],
  preview: {
    select: {
      title: "headline",
      skills: "skills",
      tools: "tools",
      passions: "passions",
      schools: "schools",
      experiences: "experiences",
    },
    prepare({ title, skills, tools, passions, experiences, schools }) {
      return {
        title,
        subtitle: `${skills.length} Skills ${tools.length} Tools ${passions.length} Passions ${schools.length} Schools ${experiences.length} experiences`,
      }
    },
  },
}
