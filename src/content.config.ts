import { z, defineCollection } from "astro:content";
import { notionLoader } from "notion-astro-loader";
import {
  notionPageSchema,
  transformedPropertySchema,
  propertySchema,
} from "notion-astro-loader/schemas";

const til = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: import.meta.env.NOTION_DB_ID,
  }),
  schema: notionPageSchema({
    properties: z.object({
      Name: transformedPropertySchema.title,
      created: propertySchema.created_time,
    }),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { til };
