import React from 'react'
import Image from 'next/image';
import ActionsButtons from '@/components/actions-buttons';
import { GET } from '@/app/api/products/product/route';
import { Producto } from '@/types/products';
import Link from 'next/link';

export default async function ProductDetails ({params}: {params: any}) {

  const {producto}:{producto: Producto} = await (await GET(params._id)).json();

  return (
    <div className='grid grid-cols-12 min-h-screen place-content-start'>
    <div className='col-span-12 px-2 pb-4'><Link href={"/"} >Home</Link> {" > "} {producto.nombre}</div>
    <div className='col-span-12 grid grid-cols-12 px-4 md:px-16 xl:px-28'>

    <Image src={producto.imagen.url} alt={producto.nombre} width={800} height={800} className='w-auto mx-auto h-auto md:max-h-none col-span-12 md:col-span-6'/>
    {/* <Image src={"/images/imagenLinkRoto.webp"} alt={producto.nombre} width={200} height={200} className='w-auto mx-auto h-80 col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4'/> */}
    <div className='col-span-12 md:col-span-6 flex flex-col items-end px-4 py-2'>

    <p className='font-semibold text-xs'>{producto.categoria}</p>
    <h1 className='text-3xl'>{producto.nombre}</h1>
    <h2 className='text-4xl my-4'>$ {producto.precio}</h2>
    <p>en stock {producto.stock}</p>
    <p className='text-end'>{producto.descripcion}</p>
    <ActionsButtons product={producto}/>
    </div>
    </div>
    </div>
  )
}
