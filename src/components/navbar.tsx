import NavbarImage from "./navbar-image";
import NavbarNavigation from "./navbar-navigation";
import NavbarProfile from "./navbar-profile";
import { Toaster } from "./ui/sonner";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center flex-nowrap">
      <NavbarImage />
      <div className="flex flex-col sm:flex-row items-center w-full justify-between">
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