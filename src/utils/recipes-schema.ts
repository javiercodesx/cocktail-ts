import { z } from "zod"

export const CategoriesAPISchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const Drink = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

export const Drinks = z.object({
    drinks: z.array(Drink)
})