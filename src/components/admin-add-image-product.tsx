"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { POST } from "@/app/api/products/addImage/route";
import { toast } from "sonner";
import { LuImage } from "react-icons/lu";
import Image from "next/image";
import { Producto } from "@/types/products";

export default function AddImage({ producto }: {producto:Producto}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {

      const token = localStorage.getItem("token-rcbackend") || "";
      const file = data.imagen[0];
      //console.log(file);
      const response = await POST(producto._id, file, token);
      //const response = await POST(producto._id, file, token);
      console.log("response", response);
      if (response.status !== 200) return toast(response.statusText || "Problemas con la imagen");

      toast.success("Imagen subida con éxito");
      return document.getElementById("create-product-dialog")?.click();
      

  };

  return (
    <abbr title="Agregar imagen">
    <Dialog>
      <DialogTrigger className="flex p-2 justify-center items-center hover:bg-zinc-200">
          <LuImage className="h-5 w-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogClose id="create-product-dialog" />
        <DialogHeader>
          <DialogTitle className="text-center text-2xl pb-2">
          {producto.nombre}
          </DialogTitle>
            <p className="text-center">Editar imagen</p>
          <Image src={producto?.imagen.url || "/images/imagenLinkRoto.webp"} alt="nombre" width={200} height={300} quality={50} className="h-fit w-fit mx-auto" />
          <DialogDescription>
            Selecciona una imagen para subir al producto.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <Input
              type="file"
              {...register("imagen")}
              className="border"
              />
            {errors.imagen && (
              <span className="text-red-500">
                {"errors.imagen.message"}
              </span>
            )}
          </div>

          <Button type="submit">Guardar cambios</Button>
        </form>
        
        <DialogFooter></DialogFooter>
      </DialogContent>
      {/* <Toaster /> */}
    </Dialog>
            </abbr>
  );
}


const formSchema = z.object({
  imagen: z
    .any()
    .refine((files) => {
      if (typeof window !== "undefined" && files instanceof FileList) {
        return files.length > 0;
      }
      return true; // En el servidor no se puede validar FileList, así que pasamos la validación
    }, "Debes seleccionar un archivo"),
});