import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"
import { useMemo } from "react"

export default function FavoritesPage() {

  const { favorites } = useAppStore()
  const hasFavorites = useMemo(() => favorites.length, [favorites])

  return (
    <>
      <h1 className="text-4xl font-bold">Favoritos</h1>
      
      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-10 gap-8 px-6">
          {favorites.map( drink => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      ): (
        <h3 className="my-10 text-center text-2xl">Los favoritos se mostrarán aquí</h3>
      )}

      
    </>
  )
}
