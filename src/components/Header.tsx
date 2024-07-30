import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

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
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                        <div className="space-y-4">
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
                            />
                        </div>
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>

                            <select 
                                id="ingredient" 
                                name="ingredient" 
                                className="p-3 w-full rounded-lg"
                            >
                                <option value="">-- Seleccione --</option>

                            </select>
                        </div>

                        <input 
                            type="submit" 
                            value='Buscar Recetas' 
                            className="cursor-pointer bg-orange-700 hover:bg-orange-800 w-full rounded-lg p-2 uppercase" 
                        />
                    </form>
                )}
            </div>
        </header>
  )
}
