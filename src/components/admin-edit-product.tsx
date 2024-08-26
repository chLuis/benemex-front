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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//import { POST } from "@/app/api/products/route";
import { toast } from "sonner";
import { LuFileEdit, LuPlus } from "react-icons/lu";
import { EditProductAction, PostProduct } from "@/actions/product";
import { Producto, Categoria } from "@/types/products";
import Image from "next/image";
import { ProductSchema } from "@/schemas/product";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "Debe tener enter 2 y 50 caracteres" })
    .max(50, { message: "Debe tener enter 2 y 50 caracteres" }),
  descripcion: z
    .string()
    .min(2, { message: "Debe tener entre 2 y 50 caracteres" })
    .max(50, { message: "Debe tener entre 2 y 50 caracteres" }),
  precio: z.coerce.number().min(1, { message: "No puede ser negativo" }),
  stock: z.coerce.number().min(0, { message: "No puede ser negativo" }),
});


export default function EditProduct({producto} : {producto:Producto}) {
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      categoria: producto.categoria as Categoria,
      //tipoPrenda: producto.tipoPrenda as TipoPrenda,
      stock: producto.stock,
    },
  });

  async function onSubmit(values: z.infer<typeof ProductSchema>) {
    const token = localStorage.getItem("token-rcbackend");
    //const response: PostResponse = await POST(values, token);
    const response = await EditProductAction(producto._id, values, token)
    console.log("response del edit!", response);
    if (response.status !== 200) return toast.error(response.error || "Problemas en la autenticación")
  
    // Aquí podemos asumir que la respuesta fue exitosa
    document.getElementById("create-product-dialog")?.click();
    form.reset();
    return toast("Producto editado exitosamente");
  }

  return (
    <abbr title="Editar">
    <Dialog>
      <DialogTrigger className="flex p-2 justify-center items-center hover:bg-zinc-200">
        <LuFileEdit />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
        <DialogClose id="create-product-dialog" />
        <DialogHeader>
          <DialogTitle className="text-center text-2xl underline pb-2">
            Editar un producto
          </DialogTitle>
          <DialogDescription>
            {"Edita un producto para mostrar en la tienda"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="nombre"
              render={() => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input className="" {...form.register("nombre")} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage className="px-1 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descripcion"
              render={() => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input className="" {...form.register("descripcion")} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage className="px-1 text-xs" />
                </FormItem>
              )}
            />
                        <FormField
              control={form.control}
              name="categoria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría</FormLabel>
                  <FormControl>
                    {/* <Input className="" {...form.register("genero")} /> */}
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="Categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Indumentaria">Indumentaria</SelectItem>
                        <SelectItem value="Accesorios">Accesorios</SelectItem>
                        <SelectItem value="Figuras">Figuras</SelectItem>
                        <SelectItem value="Peluches">Peluches</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription />
                  <FormMessage className="px-1 text-xs" />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="tipoPrenda"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de prenda</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Camisetas">Camisetas</SelectItem>
                        <SelectItem value="Pantalones">Pantalones</SelectItem>
                        <SelectItem value="Camisas">Camisas</SelectItem>
                        <SelectItem value="Vestidos">Vestidos</SelectItem>
                        <SelectItem value="Faldas">Faldas</SelectItem>
                        <SelectItem value="Chaquetas">Chaquetas</SelectItem>
                        <SelectItem value="Abrigos">Abrigos</SelectItem>
                        <SelectItem value="Sudaderas">Sudaderas</SelectItem>
                        <SelectItem value="Ropa Interior">
                          Ropa Interior
                        </SelectItem>
                        <SelectItem value="Accesorios">Accesorios</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription />
                  <FormMessage className="px-1 text-xs" />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="precio"
              render={() => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      type="number"
                      {...form.register("precio")}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage className="px-1 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={() => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      type="number"
                      {...form.register("stock")}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage className="px-1 text-xs" />
                </FormItem>
              )}
            />
              <Image src={producto?.imagen.url || "/images/imagenLinkRoto.webp"} alt="nombre" width={200} height={300} quality={50} className="h-fit w-fit mx-auto" />
            <Button
              type="submit"
              className="mt-6 bg-blue-700 hover:bg-blue-900"
            >
              Editar
            </Button>
          </form>
        </Form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
    </abbr>
  );
}