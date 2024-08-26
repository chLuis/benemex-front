import { DELETE, GET, POST, PUT } from "@/app/api/products/route"
import { GET as GET_CATEGORY } from "@/app/api/products/category/route"

export const GetAllProducts = async () => {
  try {
    const result = await (await GET()).json()
    return result
  } catch (error) {
    return {productos: []}
  }
}

export const GetProductsCategory = async (category: string) => {
  try {
    const result = await (await GET_CATEGORY(category)).json()
    return result
  } catch (error) {
    return {productos: []}
  }
}

export const PostProduct = async (product: any, token: any) => {
  try {
    const result = await (await POST(product, token)).json()
    return result
  } catch (error) {
    return {productos: []}
  }
}

export const EditProductAction = async (id: string, product: any, token: any) => {
  try {
    const result = await (await PUT(id, product, token)).json()
    return result
  } catch (error) {
    return {productos: []}
  }
}

export const DeleteProduct = async (id: any, token: any) => {
  try {
    const result = await (await DELETE(id, token)).json()
    return result
  } catch (error) {
    return {productos: []}
  }
}

// export const PostProduct = async (product: any, token: any) => {
//   const result = await (await POST(product, token)).json()
//   console.log("result del postProduct", result)
//   return result
// }
// export const PostProduct = async (product: any, token: any) => {
//   const result = await (await POST(product, token)).json()
//   console.log("result del postProduct", result)
//   return result
// }