import { Producto } from "@/types/products"

export const RenderProducts = ({data} : {data: Producto[] }) => {
  if(!data) return <>Cargando...</>;
    return (
      <>
        {data?.map((product) => (
            <div key={product._id}>
                <h1>{product.nombre}</h1>
                <p>{product.precio}</p>
            </div>
        ))}
      </>
    )
}