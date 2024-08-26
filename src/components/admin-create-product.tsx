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
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LuPlus } from "react-icons/lu";
import { PostProduct } from "@/actions/product";
import { ProductSchema } from "@/schemas/product";

export default function CreateProduct() {
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
      categoria: undefined,
      //tipoPrenda: undefined,
      precio: 0,
      stock: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof ProductSchema>) {
    const token = localStorage.getItem("token-rcbackend");
    //const response: PostResponse = await POST(values, token);
    const response = await PostProduct(values, token);

    if (response.status !== 201) {
      // Manejar el error directamente
      console.log(response);
      return toast.error(response.error || "Problemas en la autenticación");
    }

    // Aquí podemos asumir que la respuesta fue exitosa
    document.getElementById("create-product-dialog")?.click();
    form.reset();
    return toast("Producto creado exitosamente");
  }

  return (
    <Dialog>
      <DialogTrigger className="border flex flex-nowrap items-center gap-1 justify-center px-2 py-1 rounded-md bg-blue-100 hover:bg-blue-200 duration-200">
        <span>Agregar Producto</span>
        <LuPlus />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
        <DialogClose id="create-product-dialog" />
        <DialogHeader>
          <DialogTitle className="text-center text-2xl underline pb-2">
            Agregar un producto
          </DialogTitle>
          <DialogDescription>
            {"Crea un producto para poder venderlo en la tienda"}
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
            <Button
              type="submit"
              className="mt-6 bg-blue-700 hover:bg-blue-900"
            >
              Agregar
            </Button>
          </form>
        </Form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
