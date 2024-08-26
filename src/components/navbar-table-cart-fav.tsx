import { Producto } from "@/types/products";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

export default function TableFavCart({
  title,
  data,
}: {
  title: string;
  data: Producto[];
}) {
  return (
    <SheetContent className="px-2">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
        <SheetDescription className="flex flex-col justify-center gap-4">
          Resumen
        </SheetDescription>
        <div className="flex flex-col justify-center gap-4">
        {data?.map((item, index) => (
            <Link
              href={`/product/${item._id}`}
              key={index}
              className="grid grid-cols-12 hover:bg-blue-900 hover:text-white duration-200"
            >
              <Image
                src={item.imagen.url}
                alt={item.nombre}
                width={40}
                height={40}
                quality={50}
                className="col-span-2 w-auto h-auto"
              />
              <p className="col-span-4 my-auto">{item.nombre}</p>
              <p className="col-span-3 my-auto">$ {item.precio}</p>
              <p className="col-span-3 my-auto">{item.categoria}</p>
            </Link>
          ))}
        </div>
      </SheetHeader>
    </SheetContent>
  );
}
