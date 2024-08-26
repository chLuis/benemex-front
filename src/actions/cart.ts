import { DELETE, GET, POST } from "@/app/api/cart/route"

export const GetCart = async () => {
  try {
    const result = await (await GET()).json()
    return result
  } catch (error) {
    return {productos: []}
  }
}

export const AddCart = async (idProduct: any, token: any) => {
  try {
    const result = await (await POST(idProduct, token)).json()
    return result
  } catch (error) {
    return {productos: []}
  }
}

export const RemoveItemCart = async (product: any, token: any) => {
  try {
    const result = await (await DELETE(product, token)).json()
    return result
  } catch (error) {
    return {productos: []}
  }
}