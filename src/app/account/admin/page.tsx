import { GET } from "@/app/api/products/route";
import AdminProducts from "@/components/admin-products";

export default async function Admin() {
  const {productos} = await (await GET()).json();

  return (
    
      <AdminProducts products={productos}/>
    
  );
}
