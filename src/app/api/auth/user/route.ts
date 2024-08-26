import axios from 'axios'
import { NextResponse } from 'next/server';

export async function GET(token: any) {
  try {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/usuarios/oneUser`,
      {
        headers: {
          'auth': token
        }
      }
    )
  //console.log(data);
  return NextResponse.json(data)
  } catch (error: any) {
    const errorData = {
      success: false,
      error: error.response?.data.message || "Error desconocido",
      status: error.response?.status || 500,
    };
    return NextResponse.json(errorData)
  }
}