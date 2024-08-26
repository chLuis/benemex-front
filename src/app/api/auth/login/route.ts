import axios from 'axios'
//const url = "http://localhost:3001"

export async function POST(Request: any) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/usuarios/login`, Request)
    // console.log("Request", Request);
    // console.log("Response", response.data);
    // console.log("POST");
    // console.log(response.data);
    return response.data;
  }
  catch (error) {
    //console.error("Error en la solicitud POST:", error);
    return error;
  }
  //return new Response("asd")
}