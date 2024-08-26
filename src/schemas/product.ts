import { z } from "zod";

export const ProductSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "Debe tener enter 2 y 50 caracteres" })
    .max(50, { message: "Debe tener enter 2 y 50 caracteres" }),
  descripcion: z
    .string()
    .min(2, { message: "Debe tener entre 2 y 50 caracteres" })
    .max(600, { message: "Debe tener entre 2 y 600 caracteres" }),
  precio: z.coerce.number().min(1, { message: "No puede ser negativo" }),
  categoria: z.enum(["Indumentaria", "Accesorios", "Figuras", "Peluches"], {message: "Debe elegir una categoria"}),
  // tipoPrenda: z.enum(["Camisetas", "Pantalones", "Camisas", "Vestidos", "Faldas", "Chaquetas", "Abrigos", "Sudaderas", "Ropa Interior", "Accesorios"], {message: "Debe elegir entre las opciones"}),
  stock: z.coerce.number().min(0, { message: "No puede ser negativo" }),
});