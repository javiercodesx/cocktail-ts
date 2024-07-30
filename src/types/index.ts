import { z } from "zod";
import { CategoriesAPISchema, Drinks, SearchFilterSchema } from "../utils/recipes-schema";


export type Categories = z.infer<typeof CategoriesAPISchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof Drinks>