import { GetProductsCategory } from "@/actions/product";
import ProductsFiltered from "@/components/list-products-filtered";
import Link from "next/link";

export default async function CategoriaPage({ params }: { params: any }) {
  const { productos } = await GetProductsCategory(params.categoria);
  return (
    <div className="px-4">
      <div className="col-span-12 px-2 pb-4">
        <Link href={"/"}>Home</Link> {" > "}
        <Link href={"/categoria"}>Categoría</Link> {" > "}
        {params.categoria}
      </div>
      <ProductsFiltered data={productos} />
    </div>
  );
  // <RenderProducts data={productos} />
}
