import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    date: z.string(),
    type: z.enum(["work", "consulting"]),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    isFeatured: z.boolean().default(false),

    portraitImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),

    galleryImages: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .optional(),

    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
};
