import { useAppStore } from '../stores/useAppStore';
import { Dialog, DialogPanel, Transition, TransitionChild, DialogTitle } from '@headlessui/react';
import { Fragment } from 'react';
import { Recipe } from '../types';


export default function Modal() {
    const { modal, closeModal, selectedRecipe, handleClickFavorite, favoritesExists } = useAppStore()

    const renderIngredients = () => {
        const ingredients: JSX.Element[] = []
        for (let i = 1; i <= 6; i++) {
            const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe]
            const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe]
            if (ingredient && measure) {
                ingredients.push(
                    <li key={i} className='text-lg font-normal'>
                        {ingredient} - {measure}
                    </li>
                )
            }
        }
        return ingredients
    }

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10 overflow-hidden" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </TransitionChild>

                    <div className="fixed inset-0">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-100"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-100"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                    <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                        {selectedRecipe.strDrink}
                                    </DialogTitle>
                                    <img
                                        src={selectedRecipe.strDrinkThumb}
                                        alt={`Imagen de de ${selectedRecipe.strDrink}`}
                                        className='mx-auto w-72'
                                    />
                                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Ingredientes y Cantidades
                                    </DialogTitle>

                                    {renderIngredients()}
                                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Instrucciones
                                    </DialogTitle>

                                    <p className='text-lg'>{selectedRecipe.strInstructions}</p>

                                    <div className='mt-5 flex justify-between gap-4'>
                                        <button
                                            type='button'
                                            className='w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500'
                                            onClick={closeModal}
                                        >
                                            Cerrar
                                        </button>

                                        <button
                                            type='button'
                                            className={`${favoritesExists(selectedRecipe.idDrink) ? 'bg-red-600 hover:bg-red-500' : 'bg-orange-600 hover:bg-orange-500'} w-full rounded  p-3 font-bold uppercase text-white shadow `}
                                            onClick={() => {
                                                handleClickFavorite(selectedRecipe)
                                            }}
                                        >
                                            {favoritesExists(selectedRecipe.idDrink) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
                                        </button>
                                    </div>

                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}