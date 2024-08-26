import axios from "axios";

export async function GET(id: any) {

  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/productos/${id}`);
    //console.log(data);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    const errorData = {
      success: false,
      error: error.response?.data.message || "Error desconocido",
      status: error.response?.status || 500,
    };
    return new Response(JSON.stringify(errorData), { status: errorData.status, statusText: errorData.error });
  }
}