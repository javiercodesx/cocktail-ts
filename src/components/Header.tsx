import { useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    const [error, setError] = useState('')
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    
    const { fetchCategories, categories, searchRecipes } = useAppStore() 

    useEffect(() => {
        fetchCategories()
    }, [])
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(Object.values(searchFilters).includes('')){
            setError('Todos los campos son obligatorios!')
            return
        }
        
        searchRecipes(searchFilters)

        setSearchFilters({
            ingredient: '',
            category: ''
        })
    }

    return (
        <header className={ isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-12">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logo" />
                    </div>

                    <nav className="flex gap-5">
                        <NavLink 

                            to='/'
                            className={({isActive}) => 
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' 
                            }
                        >Inicio</NavLink>
                        <NavLink 
                            to='/favoritos'
                            className={({isActive}) => 
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' 
                            }
                        >Favoritos</NavLink>
                    </nav>
                </div>

                { isHome && (
                    <form 
                        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-3">
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o Ingredientes</label>

                            <input 
                                type="text" 
                                id="ingredient" 
                                name="ingredient" 
                                className="p-3 w-full rounded-lg"
                                placeholder="Nombre o Ingrediente. Ej. Tequila, Vodka..."
                                value={searchFilters.ingredient}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-3">
                            <label 
                                htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>

                            <select 
                                id="category" 
                                name="category" 
                                className="p-3 w-full rounded-lg"
                                value={searchFilters.category}
                                onChange={handleChange}
                            >
                                <option value="">-- Seleccione --</option>
                                {categories.drinks.map( drink => (
                                    <option key={drink.strCategory} value={drink.strCategory}>{drink.strCategory}</option>
                                ))}
                            </select>
                        </div>

                        <input 
                            type="submit" 
                            value='Buscar Recetas' 
                            className="cursor-pointer bg-orange-700 hover:bg-orange-800 w-full rounded-lg p-3 uppercase text-white font-bold" 
                        />
                    </form>
                )}
            </div>
        </header>
  )
}
