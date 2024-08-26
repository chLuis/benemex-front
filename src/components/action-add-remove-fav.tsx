'use client'
import { LuHeart, LuHeartCrack } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import { AddRemoveFav } from "@/actions/fav"
//import { useState } from "react"
import { Producto } from "@/types/products"
import { toast } from "sonner"

export const AddRemoveFavButton = ({item} : {item: Producto}) => {

  const handleFav = async () => {
    const token = localStorage.getItem("token-rcbackend");
    //console.log(token);
    const response = await AddRemoveFav(item._id, token);
    console.log
    if(response.status === 200) return toast.info(response.message);
    if(response.status === 201) return toast.success(response.message);
    localStorage.removeItem("token-rcbackend");
    return toast.error(response?.error);
  }

    return (
      <Button onClick={handleFav}>
        
     
          <LuHeart />
        
        
      </Button>
    )}