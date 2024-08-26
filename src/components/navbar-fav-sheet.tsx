'use client'
import React from "react";
import { LuHeart } from "react-icons/lu";
import {
  Sheet,
  SheetTrigger
} from "@/components/ui/sheet";
import { GetOneUser } from "@/actions/users";
import { Producto } from "@/types/products";
import TableFavCart from "./navbar-table-cart-fav";

export const FavSheet = () => {
  const [favoritos, setFavoritos] = React.useState<Producto[]>([])

  const llamarDataUSer = async () => {
    //console.log("llamarDataUSer");
    const token = localStorage.getItem("token-rcbackend") || "";
    const response = await GetOneUser(token)
    //console.log(response, "responsee");
    setFavoritos(response?.usuario?.favoritos)
  };

  return (
        <Sheet>
        <SheetTrigger>
        <abbr title="Mis favoritos">
        <LuHeart onClick={() => llamarDataUSer()} className="w-12 h-12 stroke-[1.8] p-3 overflow-visible cursor-pointer hover:bg-neutral-200 hover:rounded-full hover:stroke-2 duration-200" />
        </abbr>
      </SheetTrigger>
        <TableFavCart title="Mis favoritos" data={favoritos} />
      </Sheet>
  );
};
