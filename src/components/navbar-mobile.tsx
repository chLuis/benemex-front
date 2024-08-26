'use client';
import React from "react";
import { BiMenu } from "react-icons/bi"
import { User } from "./navbar-user";
import { LuJapaneseYen, LuPersonStanding, LuShirt, LuX } from "react-icons/lu"
import { GiPowderBag } from "react-icons/gi";
import { BiSolidMovie } from "react-icons/bi";
import { FaRedhat } from "react-icons/fa";
import Link from "next/link";

export const NavbarMobile = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="md:hidden absolute right-2 z-10">
      {!showMenu 
      ?<BiMenu onClick={() => setShowMenu(true)} className="w-8 h-8"/>
      :<div  className="fixed flex justify-end top-0 p-2 right-0 h-full bg-gradient-to-r from-blue-400/40 via-35% via-blue-600/90 to-blue-700 w-full overflow-y-auto text-white animate-fade-in"> 
      <div className="flex flex-col items-end w-[90%] h-fit py-4">
        <LuX onClick={() => setShowMenu(false)} className="w-8 h-8 cursor-pointer"/>
        <User />
        <div className="flex flex-col items-end">
          {components.map((component, index) => (
            <div key={index} className="flex flex-col items-end w-60 gap-2">
              {component.icon}
              <Link onClick={() => setShowMenu(false)} href={component.href}>{component.title}</Link>
              <p className="text-xs">{component.description}</p>
            </div>
          ))}
          </div>
      </div>
      </div>}
    </div>
  )
}

const components: { title: string; icon: JSX.Element; href: string; description: string }[] = [
  {
    title: "Ver Todo",
    icon: <LuJapaneseYen className="w-8 h-8" />,
    href: "/categoria",
    description:
      "Productos para el hombre de la ciudad.",
  },
  {
    title: "Anime",
    icon: <LuJapaneseYen className="w-8 h-8" />,
    href: "/categoria/anime",
    description:
      "Productos para el hombre de la ciudad.",
  },
  {
    title: "Películas",
    icon: <BiSolidMovie className="w-8 h-8" />,
    href: "/categoria/peliculas",
    description: "Productos femeninos para la mujer de hoy",
  },
  {
    title: "Figuras",
    icon: <LuPersonStanding className="w-8 h-8" />,
    href: "/categoria/figuras",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Indumentaria",
    icon: <LuShirt className="w-8 h-8" />,
    href: "/categoria/indumentaria",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Accesorios",
    icon: <FaRedhat className="w-8 h-8" />,
    href: "/categoria/accesorios",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Mochilas",
    icon: <GiPowderBag  className="w-8 h-8" />,
    href: "/categoria/mochilas",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]