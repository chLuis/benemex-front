"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Producto } from "@/types/products";
import ProductsFiltered from "./list-products-filtered";
import React from "react";
import { Input } from "./ui/input";
import { IoMdOptions } from "react-icons/io";
import { PiSquaresFourThin } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { LuChevronRightCircle, LuMinus, LuSearch } from "react-icons/lu";

export default function ListProducts({ data }: { data: Producto[] }) {
  const [productosFiltrados, setProductosFiltrados] =
    React.useState<Producto[]>(data);
  const [rangeMin, setRangeMin] = React.useState<number>(50);
  const [rangeMax, setRangeMax] = React.useState<number>(1000000);
  const [open, setOpen] = React.useState(false);
  const [valueCategoria, setValueCategoria] = React.useState("Todos");
  const [valueText, setValueText] = React.useState("")

  const handleSearch = (e: string) => {
    setValueText(e);
    const filtrarProductos = data.filter((producto) => {
      const matchesText = producto.nombre.toLowerCase().includes(e.toLowerCase());
      const matchesPrice = producto.precio >= rangeMin && producto.precio <= rangeMax;
      const matchesCategory = valueCategoria === "Todos" || producto.categoria === valueCategoria;
      return matchesText && matchesPrice && matchesCategory;
    });
    setProductosFiltrados(filtrarProductos);
  }

  const onChangeCategoria = (value: string) => {
    setValueCategoria(value); // Actualiza el estado de la categoría seleccionada
    const filtrarProductos = data.filter((producto) => {
      const matchesCategory = value === "Todos" || producto.categoria === value;
      const matchesPrice = producto.precio >= rangeMin && producto.precio <= rangeMax;
      const matchesText = producto.nombre.toLowerCase().includes(valueText.toLowerCase());
      return matchesCategory && matchesPrice && matchesText;
    });
    setProductosFiltrados(filtrarProductos);
  };

  const handleMinMaxPrice = () => {
    const filtrarProductos = data.filter((producto) => {
      const matchesCategory = valueCategoria === "Todos" || producto.categoria === valueCategoria;
      const matchesPrice = producto.precio >= rangeMin && producto.precio <= rangeMax;
      const matchesText = producto.nombre.toLowerCase().includes(valueText.toLowerCase());
      return matchesCategory && matchesPrice && matchesText;
    });
    setProductosFiltrados(filtrarProductos);
  };

  return (
    <div className="col-span-12 grid grid-cols-12 gap-x-3 px-6 pt-2 min-h-screen">
      <div className="col-span-12 md:col-span-4 lg:col-span-3 md:px-4 pb-6">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger id="collapse-search">
              <div className="flex flex-nowrap gap-1 items-center justify-start text-base group hover:text-blue-700 cursor-pointer duration-150">
                <LuSearch />
                <span>Buscar</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col p-1 gap-2">
              <Input type="text" maxLength={30} onChange={(e) => handleSearch(e.target.value)}/>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger id="collapse-category">
              <div className="flex flex-nowrap gap-1 items-center justify-start text-base group hover:text-blue-700 cursor-pointer duration-150">
                <PiSquaresFourThin />
                <span>Categorías</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col p-1 gap-2">
              <h4 className="font-medium flex flex-nowrap gap-1 items-center justify-start">
                <LuMinus />
                <span>por Categoría</span>{" "}
              </h4>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full  justify-between"
                    >
                      {valueCategoria
                        ? tiposPrenda.find(
                            (framework) => framework.value === valueCategoria
                          )?.label
                        : "Elegí una categoría..."}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Categoría..."
                        className="h-9"
                        onSelect={() => onChangeCategoria("Todos")}
                      />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {tiposPrenda?.map((tipo) => (
                            <CommandItem
                              key={tipo.value}
                              value={tipo.value}
                              onSelect={(currentValue) => {
                                onChangeCategoria(
                                  currentValue === valueCategoria
                                    ? "Todos"
                                    : currentValue
                                );
                                //setValueCategoria(currentValue === value ? "" : currentValue)
                                setValueCategoria(
                                  currentValue === valueCategoria
                                    ? "Todos"
                                    : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              {tipo.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  valueCategoria === tipo.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger id="collapse-filter">
              <div className="flex flex-nowrap gap-1 items-center justify-start text-base group hover:text-blue-700 cursor-pointer duration-150">
                <IoMdOptions />
                <span>Otros filtros</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col p-1 gap-2">
              {/* <h3 className="text-2xl font-semibold">Filtrar</h3> */}
              <div>
                <h4 className="font-medium flex flex-nowrap gap-1 items-center justify-start">
                  <LuMinus />
                  <span>por Precio</span>{" "}
                </h4>
                <div className="flex flex-nowrap items-center gap-1">
                  
                  <Input
                    type="number"
                    min={0}
                    value={rangeMin}
                    onChange={(e) => setRangeMin(Number(e.target.value))}
                    className="w-full "
                  />
                  -
                  <Input
                    type="number"
                    value={rangeMax}
                    onChange={(e) => setRangeMax(Number(e.target.value))}
                    className="w-full"
                  />
                  <LuChevronRightCircle onClick={handleMinMaxPrice} className="w-6 h-6 min-h-6 min-w-6 stroke-2 hover:stroke-green-500 duration-200 cursor-pointer"/>
                </div>
              </div>
                {/* <div>
                <h4 className="font-medium flex flex-nowrap gap-1 items-center justify-start">
                  <LuMinus />
                  <span>por Color</span>{" "}
                </h4>
                <div className=" pt-2">
                
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full md:max-w-72 justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Elegí un color..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar color..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValueCategoria(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover> 
                </div>
              </div>*/}
              {/* <Button
                className="mt-4 w-full md:max-w-72 mx-2"
                onClick={() => {
                  document.getElementById("collapse-filter")?.click();
                }}
              >
                Listo
              </Button> */}
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              {
                " Yes. It's animated by default, but you can disable it if you prefer."
              }
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </div>
      <ProductsFiltered data={productosFiltrados} />
    </div>
  );
}

const tiposPrenda = [
  {
    value: "Todos",
    label: "Todos",
  },
  {
    value: "Indumentaria",
    label: "Indumentaria",
  },
  {
    value: "Accesorios",
    label: "Accesorios",
  },
  {
    value: "Figuras",
    label: "Figuras",
  },
  {
    value: "Peluches",
    label: "Peluches",
  }
];