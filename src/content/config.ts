import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    date: z.string(),
    current: z.boolean().default(false),
  }),
});

export const collections = {
  experience: experienceCollection,
};
