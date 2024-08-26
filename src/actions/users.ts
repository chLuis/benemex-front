import { GET  } from "@/app/api/auth/user/route"

export const GetOneUser = async (token: any) => {
  try {
    const result = await (await GET(token)).json()
    return result
  } catch (error) {
    return {}
  }
}