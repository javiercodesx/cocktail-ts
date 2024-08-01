import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void,
    favoritesExists: (id: Recipe['idDrink']) => boolean,
    loadFromStorage: () => void
}


export const favoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoritesExists(recipe.idDrink)){
            set({
                favorites: get().favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            })
            toast.error("Removed!", {
                position: "bottom-right"
              })
        }else{
            set({
                favorites: [...get().favorites, recipe]
            })
            toast.success("Added Succesfully!", {
                position: "bottom-right"
              })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoritesExists: (id) => {
        return get().favorites.some( favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const favorites = localStorage.getItem('favorites')
        if(favorites){
            set({
                favorites: JSON.parse(favorites)
            })
        }
    }
})