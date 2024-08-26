import CreateProduct from "@/components/admin-create-product";
import { Producto } from "@/types/products";
import AdminProductsList from "@/components/admin-products-list";

export default function AdminProducts({ products }: { products: Producto[] }) {
  return (
    <div className="mx-auto px-4">
      <div className="flex justify-center items-center gap-2 pt-2 pb-4">
        <h1 className="text-center text-3xl">Administrar Productos</h1>
        <CreateProduct />
      </div>
      <AdminProductsList products={products} />
    </div>
  );
}
