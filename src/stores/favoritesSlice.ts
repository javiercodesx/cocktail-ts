import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void
}

export const favoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favorites.some( favorite => favorite.idDrink === recipe.idDrink)){
            set({
                favorites: get().favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            })
        }else{
            set({
                favorites: [...get().favorites, recipe]
            })
        }

    }
})