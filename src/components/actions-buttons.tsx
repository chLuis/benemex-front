import { Button } from "@/components/ui/button";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { AddCartButton } from "@/components/action-add-cart";
import { AddRemoveFavButton } from "@/components/action-add-remove-fav";
import { Producto } from "@/types/products";

export default function ActionsButtons({product} : {product: Producto}) {
  return (
    <div className="flex gap-2 py-4">
      <AddRemoveFavButton item={product}/>
      <AddCartButton id={product._id}/>
      <Button>Comprar</Button>
    </div>
  )
}