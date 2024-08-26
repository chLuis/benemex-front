"use client";
//import { DELETE } from "@/app/api/products/route";
import { LuX } from "react-icons/lu";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { DeleteProduct } from "@/actions/product";

export default function DeleteProductComp({ productId }: { productId: string }) {
  async function handleDelete(id: string) {
    const token = localStorage.getItem("token-rcbackend");
    const response = await DeleteProduct(id, token);
    if (response.status !== 200) return toast.error(response.error);
    toast.success("Producto eliminado");
  }

  return (
  <abbr title="Eliminar">
    <Button variant="ghost" className="flex p-2 justify-center items-center hover:bg-zinc-200" onClick={() => handleDelete(productId)}>
      <LuX className="w-5 h-5"/>
    </Button>
  </abbr>
    
  );
}