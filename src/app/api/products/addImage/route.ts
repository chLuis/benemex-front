import axios from "axios";

export async function POST(id: string, file: any, token:any) {
  const formData = new FormData();
  formData.append("imagen", file);
  try {
  const {data} = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/productos/agregarImagen/${id}`, formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Indica que se está enviando un formulario con archivos
        "auth": token
      },
    }
  );
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
  return new Response(JSON.stringify(errorData), { status: errorData.status , statusText: errorData.error});
}
}