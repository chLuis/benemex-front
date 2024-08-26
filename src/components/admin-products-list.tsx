"use client";
import { Producto } from "@/types/products";
import AddImage from "@/components/admin-add-image-product";
import DeleteProductComp from "@/components/admin-delete-product";
import EditProduct from "@/components/admin-edit-product";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuArrowDown01, LuArrowDown10, LuArrowDownAZ, LuArrowDownZA } from "react-icons/lu";

export default function AdminProductsList({
  products,
}: {
  products: Producto[];
}) {
  const [productOrdenados, setProductOrdenados] = React.useState(products);

  const orderProducts = (option: string) => {
    let order: Producto[] = [];
    switch (option) {
      case "1":
        order = [...products].sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case "2":
        order = [...products].sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      case "3":
        order = [...products].sort((a, b) => a.precio - b.precio);
        break;
      case "4":
        order = [...products].sort((a, b) => b.precio - a.precio);
        break;
      case "5":
        order = [...products].reverse();
        break;
      case "6":
        order = [...products];
        break;
    }
    setProductOrdenados(order);
  };
  return (
    <div className="flex flex-col gap-2 p-1 overflow-x-auto">
      <div className="flex flex-nowrap gap-2 items-center justify-end">
        <h4>Ordernar</h4>
        <Select onValueChange={orderProducts}>
          <SelectTrigger className="w-[180px]">
            <SelectValue  placeholder="Ordenar por.." />
          </SelectTrigger>
          <SelectContent >
            <SelectGroup>
              <SelectItem value={"1"} className="cursor-pointer flex flex-nowrap items-center justify-end"><LuArrowDownAZ className="w-6 h-6"/></SelectItem>
              <SelectItem value={"2"} className="cursor-pointer flex flex-nowrap items-center justify-end"><LuArrowDownZA className="w-6 h-6"/></SelectItem>
              <SelectItem value={"3"} className="cursor-pointer flex flex-nowrap items-center justify-end"><LuArrowDown01 className="w-6 h-6"/></SelectItem>
              <SelectItem value={"4"} className="cursor-pointer flex flex-nowrap items-center justify-end"><LuArrowDown10 className="w-6 h-6"/></SelectItem>
              <SelectItem value={"5"} className="cursor-pointer flex flex-nowrap items-center justify-end">Del mas nuevo</SelectItem>
              <SelectItem value={"6"} className="cursor-pointer flex flex-nowrap items-center justify-end">Del mas viejo</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-12 font-semibold capitalize border-b border-black text-lg">
        <div className="col-span-3">nombre</div>
        <div className="col-span-3 md:col-span-4">descripcion</div>
        <div className="col-span-2 md:col-span-1">precio</div>
        <div className="col-span-1 text-center">stock</div>
        <div className="col-span-3 text-center">Acciones</div>
      </div>
      {productOrdenados?.map((product) => (
        <div
          className="grid grid-cols-12 hover:bg-blue-50 py-2"
          key={product._id}
        >
          <div className="col-span-3">{product.nombre}</div>
          <div className="col-span-3 md:col-span-4">{product.descripcion}</div>
          <div className="col-span-2 md:col-span-1">{product.precio}</div>
          <div className="col-span-1 text-center">{product.stock}</div>
          <div className="col-span-3 text-center flex flex-nowrap items-center justify-center">
            <EditProduct producto={product} />
            <AddImage producto={product} />
            <DeleteProductComp productId={product._id} />
          </div>
        </div>
      ))}
    </div>
  );
}
