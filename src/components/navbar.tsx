import NavbarImage from "@/components/navbar-image";
import { NavbarMobile } from "@/components/navbar-mobile";
import NavbarNavigation from "@/components/navbar-navigation";
import NavbarProfile from "@/components/navbar-profile";
import { Toaster } from "@/components/ui/sonner";

export default function Navbar() {
  return (
    <nav className="relative flex md:flex-row items-center justify-center flex-nowrap">
      <NavbarImage />
      <NavbarMobile />
      <div className="hidden md:flex flex-col sm:flex-row items-center w-full justify-between">
        <NavbarNavigation />
        <NavbarProfile />
      </div>
      <Toaster richColors position="top-right" theme="light"  toastOptions={{className: "select-none", closeButton: true}}/>
    </nav>
  );
}

{/* <div className=" w-full justify-between flex md:hidden">

  <NavbarProfile />
</div> */}