import Link from "next/link"

export default function Categoria() {
  return (
    <div className="flex items-start flex-col px-4 min-h-screen">
      <div className='col-span-12 px-2 pb-4'>
        <Link href={"/"} >Home</Link> {" > "} 
        Categoría
      </div>
      <div className="flex justify-center items-center flex-col w-full gap-4">
        {opciones?.map(item => <Link key={item.label} href={`categoria/${item.value}`} className="hover:underline">{item.label}</Link>)}
      </div>
    </div>
  )
}

const opciones = [
  { value:"Anime" , label:"Anime" },
  { value:"Figuras" , label:"Figuras" },
  { value:"Indumentaria" , label:"Indumentaria" },
  { value: "Peliculas", label: "Peliculas"},
  { value:"Mochilas" , label:"Mochilas" },
  { value:"Accesorios" , label:"Accesorios" }
]