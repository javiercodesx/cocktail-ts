import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal: boolean,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
    selectRecipe: (id: Drink['idDrink']) => Promise<void>,
    closeModal: () => void
}

export const recipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
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
            selectedRecipe,
            modal: true
        }))
    },
    closeModal: () => {
        set((state) => ({
            ...state,
            modal: false, // Cierra el modal inmediatamente
        }));
    
        // Retrasa el reseteo de la receta para que el modal se cierre con la información aún visible
        setTimeout(() => {
            set((state) => ({
                ...state,
                selectedRecipe: {} as Recipe, // Limpia los datos después del cierre
            }));
        }, 400)
    }
})