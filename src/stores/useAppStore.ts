import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { recipesSlice, RecipesSliceType } from './recipeSlice'
import { favoritesSlice, FavoritesSliceType } from './favoritesSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...recipesSlice(...a),
    ...favoritesSlice(...a)
})))