'use client'
import React from "react"
import { LuShoppingCart } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import { AddCart } from "@/actions/cart"
import { toast } from "sonner"

export const AddCartButton = ({id} : {id: string}) => {
  const [sendInfo, setSendInfo] = React.useState(false)

  const handleCart = async () => {
    setSendInfo(true)
    const token = localStorage.getItem("token-rcbackend");
    //console.log(token);
    const response = await AddCart(id, token);
    //console.log(response)
    if(response.status === 200) {
      setSendInfo(false)
      return toast.success(response.message)
    }
    if(response.status === 409) {
      setSendInfo(false)
      return toast.info(response.message)

    }
    setSendInfo(false)
    localStorage.removeItem("token-rcbackend");
    return toast.error(response.message)
    //console.log(response);
  }

    return (
      <Button onClick={handleCart} disabled={sendInfo}><LuShoppingCart /></Button>
    )}