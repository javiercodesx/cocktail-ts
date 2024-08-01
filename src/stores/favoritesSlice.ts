import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void,
    favoritesExists: (id: Recipe['idDrink']) => boolean
}

export const favoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoritesExists(recipe.idDrink)){
            set({
                favorites: get().favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            })
        }else{
            set({
                favorites: [...get().favorites, recipe]
            })
        }
    },
    favoritesExists: (id) => {
        return get().favorites.some( favorite => favorite.idDrink === id)
    }
})