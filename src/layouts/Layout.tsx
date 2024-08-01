import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"
import { ToastContainer } from "react-toastify"

export default function Layout() {
  const { loadFromStorage } = useAppStore()

  useEffect(() => {
    loadFromStorage()
  }, [loadFromStorage])
  

  return (
    <>
        <Header/>
        <main className="container mx-auto py-16">
            <Outlet/>
        </main>


        <ToastContainer />
        <Modal/>
    </>
  )
}
