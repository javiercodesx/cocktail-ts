import { z } from "zod";
import { CategoriesAPISchema, SearchFilterSchema } from "../utils/recipes-schema";


export type Categories = z.infer<typeof CategoriesAPISchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>