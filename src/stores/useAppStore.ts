import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { recipesSlice, RecipesSliceType } from './recipeSlice'
import { favoritesSlice, FavoritesSliceType } from './favoritesSlice'
import { notificationStore, NotificationStoreType } from './notificationStore'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationStoreType>()(devtools((...a) => ({
    ...recipesSlice(...a),
    ...favoritesSlice(...a),
    ...notificationStore(...a)
})))