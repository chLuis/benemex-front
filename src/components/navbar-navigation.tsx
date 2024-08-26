"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { LuJapaneseYen, LuPersonStanding, LuShirt } from "react-icons/lu"
import { GiPowderBag } from "react-icons/gi";
import { BiSolidMovie } from "react-icons/bi";
import { FaRedhat } from "react-icons/fa";


export default function NavbarNavigation () {
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Navegá</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <Image src="/images/navigation_image.webp" alt="logo" width={110} height={96} className="h-auto w-auto m-auto" />
                    <div className="mb-2 mt-4 text-lg font-extrabold">
                      BENEMEX
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      ARTÍCULOS ANIMÉ
                    </p>
                    <p className="text-sm leading-tight text-muted-foreground">
                    ACCESORIOS
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/nosotros" title="Introduction">
                ¿Donde nació Benemex?
              </ListItem>
              <ListItem href="/nosotros/locales" title="¿Donde estamos?">
                Nuestros locales en Argentina
              </ListItem>
              <ListItem href="/categoria" title="Nuestra tienda">
                Navegá y mira nuestras categorías
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components?.map((component, index) => (
                <div key={index} className="flex items-center gap-2">
                <div className="w-6">
                  {component.icon}
                </div>
                <ListItem
                  //key={component.title}
                  title={component.title}
                  href={component.href}
                  >
                  {component.description}
                </ListItem>
                  </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/nosotros" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Quienes somos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"