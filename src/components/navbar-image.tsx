import Image from "next/image";
import Link from "next/link";

export default function NavbarImage() {
  return (
    <div className=" h-20 w-64 flex justify-center items-center">
      <Link href={"/"} className="w-[100px] h-[70px] relative text-3xl flex justify-center items-center font-extrabold tracking-widest">
        {/* <Image src="/images/logo.webp" width={100} height={76} alt="klsdjdfh" className="w-auto h-16 mx-auto"/> */}
        <span>BENEMEX
          </span>
    </Link>
      </div>
  )
}
