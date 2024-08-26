import { GetAllProducts } from "@/actions/product";
import ListProducts from "@/components/list-products";

export default async function HomeProducts() {
  const { productos } = await GetAllProducts();

  if (!productos)
    return (
      <h1 className="text-center animate-pulse text-2xl pt-16">Cargando...</h1>
    );

  return (
    <div id="listaProductos" className="grid grid-cols-12 pb-20">
      <h1 className="col-span-12 text-center font-sans py-4 text-2xl font-semibold text-neutral-600/60 shadow-md mb-4 uppercase">
        Encontrá lo que buscas
      </h1>
      <ListProducts data={productos} />
    </div>
  );
}
