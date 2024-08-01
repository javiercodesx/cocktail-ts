import { z } from "zod";
import { CategoriesAPISchema, Drink, Drinks, SearchFilterSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPISchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drink = z.infer<typeof Drink>
export type Drinks = z.infer<typeof Drinks>