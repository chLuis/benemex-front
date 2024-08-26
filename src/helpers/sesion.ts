'use client';

import { toast } from "sonner";

export const closeSesionGlobal = () => {
  localStorage.removeItem("token-rcbackend");
  localStorage.removeItem("favoritos-rcbackend");
  toast.info("Sesión cerrada")
}