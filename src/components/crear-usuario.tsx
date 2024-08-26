'use client'
import {
Dialog,
  DialogClose,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import axios from "axios";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
// import { POST } from '@/app/api/auth/login/route'
// import { useState } from "react";

export default function CrearUsuario() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="">
          Crear usuario
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogClose id="login-dialog"/>
        <DialogHeader>
          <DialogTitle>Crear</DialogTitle>
          <DialogDescription>
            {"Ingresa con tu cuenta para poder crear un carrito y poder agregar favoritos"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" placeholder="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Contraseña
            </Label>
            <Input type="password" id="password" placeholder="*********" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-blue-600">Creear</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}