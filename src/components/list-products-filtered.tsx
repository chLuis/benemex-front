import { Producto } from "@/types/products";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ProductsFiltered({ data }: { data: Producto[] }) {
  if (data?.length === 0)
    return (
      <div className="col-span-12 md:col-span-8 lg:col-span-9 text-center font-semibold pt-4">
        No se encontraron productos
      </div>
    );
  return (
    <div className="p-1 col-span-12 md:col-span-8 lg:col-span-9 grid grid-cols-12 gap-3 min-h-screen h-full content-start z-0 pb-4">
      {data?.map((producto: Producto) => (
        <Card
          key={producto._id}
          className="col-span-12 border-none hover:shadow-black/40 lg:col-span-6 xl:col-span-4 animate-fade-in group  duration-200 overflow-clip"
        >
          <Link href={`/product/${producto._id}`}>
            <CardContent className="grid grid-cols-12 xl:flex xl:flex-col gap-4 h-72 xl:h-auto p-2">
              <div className="col-span-6 m-auto w-full h-fit xl:h-96 flex items-center justify-center overflow-clip">
                <Image
                  src={producto.imagen.url || "/images/imagenLinkRoto.webp"}
                  alt={producto.nombre}
                  width={200}
                  height={300}
                  quality={100}
                  className="w-auto h-auto rounded-sm group-hover:scale-110 duration-500"
                />
                {/* <Image src="/images/imagenLinkRoto.webp" alt={"sdf"} width={200} height={200} quality={100} className="w-auto h-auto rounded-sm group-hover:scale-110 duration-500"/> */}
              </div>
              <div className="flex flex-col col-span-6 pb-6 px-2">
                <p className="text-sm pt-0 text-nowrap text-neutral-400">
                  {producto.categoria}
                </p>
                <p className="text-xl line-clamp-2 pt-3 xl:p-0 text-ellipsis h-16 max-h-16 text-pretty font-semibold text-neutral-600">
                  {producto.nombre}
                </p>
                <p className="text-lg py-4 xl:py-0 text-nowrap font-semibold tracking-wide text-neutral-800">
                  $ {producto.precio}
                </p>
                <abbr
                  title={producto.descripcion}
                  className="text-sm line-clamp-2 mt-4 xl:mt-0 h-10 max-h-10 text-balance decoration-transparent"
                >
                  {producto.descripcion}
                </abbr>
                {/* <Button className="mt-2 w-fit mx-auto bg-zinc-700 hover:bg-blue-800 duration-200">Ver más</Button> */}
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
