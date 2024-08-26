"use client";
import { LuUser2, LuUserX } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { POST } from "@/app/api/auth/login/route";
import { useEffect, useState } from "react";
//import CrearUsuario from "./crear-usuario";
import { toast } from "sonner";
import { FavSheet } from "./navbar-fav-sheet";
import { CartSheet } from "./navbar-cart-sheet";
import { closeSesionGlobal } from "@/helpers/sesion";

export const User = () => {
  const [token, setToken] = useState<string>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token-rcbackend") || "";
    if (token?.length >= 0) {
      setToken(token);
    }
  }, []);

  const submitDataKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      submitData();
    }
  };

  const submitData = async () => {
    setLoadingLogin(true);
    const info = {
      email,
      password,
    };
    const data = await POST(info);

    if (!data.token) {
      setLoadingLogin(false);
      toast("Usuario o contraseña incorrectos");
      return;
    }
    localStorage.setItem("token-rcbackend", data.token);
    localStorage.setItem("favoritos-rcbackend", JSON.stringify(data.favoritos));
    localStorage.setItem("carrito-rcbackend", JSON.stringify(data.carrito));
    localStorage.setItem("nombre-rcbackend", data.rol);
    document.getElementById("login-dialog")?.click();
    toast(`"Bienvenido/a ${data.nombre}"`);
    setEmail("");
    setPassword("");
    setToken(data.token);
    setLoadingLogin(false);
  };

  function closeSesion(e: any) {
    e.stopPropagation();
    closeSesionGlobal()
    setToken("")
  }
  
  return (
    <div className="flex justify-center gap-2 items-center h-20 text-3xl px-4">
      {!token ? (
        <Dialog>
          <DialogTrigger>
            <LuUser2 className="w-12 h-12 stroke-[1.8] p-3 overflow-visible cursor-pointer hover:bg-neutral-200 hover:rounded-full hover:stroke-2 duration-200" />
          </DialogTrigger>
          {loadingLogin 
          ? <DialogContent className="sm:max-w-[425px] min-h-80">
            <DialogHeader className="h-full">
              <DialogTitle className="flex items-center justify-center h-full">
                <div className="w-12 h-12 border border-black border-t-white animate-spin rounded-full"></div>
                <span className="sr-only">Loading...</span>
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
          : <DialogContent
            className="sm:max-w-[425px]"
            onKeyDown={(e: any) => submitDataKey(e)}
          >
            <DialogClose id="login-dialog" />
            <DialogHeader>
              <DialogTitle>Ingresar</DialogTitle>
              <DialogDescription>
                {
                  "Ingresa con tu cuenta para poder crear un carrito y poder agregar favoritos"
                }
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="...@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Contraseña
                </Label>
                <Input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={submitData}
                className="bg-blue-600"
              >
                Ingresar
              </Button>
              <Link
                href="/account/register"
                onClick={() => {
                  document.getElementById("login-dialog")?.click();
                }}
              >
                <Button type="button" variant="ghost">
                  Crear usuario
                </Button>
              </Link>
            </DialogFooter>
          </DialogContent>}
        </Dialog>
      ) : (
        <div className="flex flex-nowrap items-center gap-2">
          <FavSheet />
          <CartSheet />
          <Link href="/account/admin" className="text-sm text-nowrap">
            Bienvenido Luis
          </Link>
          <LuUserX
            className="w-12 h-12 stroke-[1.8] p-3 overflow-visible cursor-pointer hover:bg-neutral-200 hover:rounded-full hover:stroke-2 duration-200"
            onClick={(e) => closeSesion(e)}
          />
        </div>
      )}
    </div>
  );
};