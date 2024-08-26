import { Producto } from '@/types/products'
import axios, { AxiosError } from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/productos`)
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

export async function POST(product: any, token: any) {
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/productos`, product,
      {
        headers: {
          'auth': token
        }
      }
    )
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

export async function PUT(id: any, product: Producto, token: any) {
  try {
    const { data } = await axios.put(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/productos/${id}`, product,
      {
        headers: {
          'auth': token
        }
      }
    )
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

export async function DELETE(id: any, token: any) {
  try {
    const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/productos/${id}`,
      {
        headers: {
          'auth': token
        }
      }
    )
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