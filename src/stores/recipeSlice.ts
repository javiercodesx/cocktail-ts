import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories()
        
        set(() => ({
            categories
        }))
    },
    searchRecipes: async (searchFilters) => {
        const drinks = await getRecipes(searchFilters)

        set(() => ({
            drinks
        }))
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set(() => ({
            selectedRecipe
        }))
    }
})