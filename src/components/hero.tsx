import Image from "next/image"

export default function Hero () {
  const hero_banners = ["/images/principal_hero.webp", "/images/send_free.webp"]
    // const plugin = React.useRef(
    //   Autoplay({ delay: 4000 })
    //   //Autoplay({ delay: 1000, stopOnInteraction: true })
    // )
  return (
    <div className="w-full grid grid-cols-12">
      {hero_banners?.map((imagen, index) => (
      //Aqui esta funcionando el ancho entero, nose porque w-96
        <Image key={index} priority src={imagen} width={2000} height={384} alt="imagen" className="w-auto h-auto md:col-span-6 col-span-12 "/>              
      ))}
    </div>
  )
}

// 'use client'
// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

{/* <Image priority src={imagen} width={2000} height={384} alt="imagen" className="w-auto h-auto col-span-6 "/> */}
//  <Carousel
//         plugins={[plugin.current]}
//         className="h-fit max-w-screen flex justify-center items-center relative z-0"
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.play}
//       >
//         {/* Aqui tambien esta funcionando el ancho entero */}

//         <CarouselContent className="w-screen select-none">
//           {hero_banners.map((imagen, index) => (
//             //Aqui esta funcionando el ancho entero, nose porque w-96
//             <CarouselItem key={index} className="max-h-[400px] flex justify-center items-center">
//                   <Image src={imagen} width={2000} height={384} alt="imagen" className="w-auto h-auto col-span-12 "/>
//                   {/* <Image src="/images/campera mujer.webp" width={120} height={120} alt="imagen" className="w-auto h-auto content-center object-center object-cover col-span-6 bg-red-200 animate-goTopRight"/>
//                   <Image src="/images/zapatillas.webp" width={120} height={120} alt="imagen" className="w-auto h-auto content-center object-center object-cover col-span-6 bg-red-200 animate-goBotLeft"/>
//                   <Image src="/images/campera hombre.webp" width={120} height={120} alt="imagen" className="w-auto h-auto content-center object-center object-cover col-span-6 bg-red-200 animate-goBotRight"/> */}
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         {/* <CarouselPrevious />
//         <CarouselNext /> */}
//       </Carousel>