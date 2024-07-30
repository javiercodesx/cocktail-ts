import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {

  const { categories } = useAppStore()
  console.log(categories);
  

  return (
    <>
        <h1>Inicio</h1>
    </>
)
}
