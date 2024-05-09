import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function TopNavbar() {
  return (
    //Navbar by Flowbite
    <section className="sticky top-0 z-40"> 
      <div className="py-2 lg:rounded-full shadow-2xl md:max-w-5xl xl:max-w-screen-xl mx-auto primary-grad-to-br">
        <Navbar fluid rounded className="bg-transparent md:flex px-6">
          <NavbarBrand as={Link} href="https://flowbite-react.com" className="md:hidden">
            <span className="font-Shrikhand text-white text-lg cursor-pointer">Mercy Bakes</span>
          </NavbarBrand>
          <NavbarToggle className="text-white hover:bg-primary" />
          <NavbarCollapse>
            <NavbarLink as={Link} href="/" className="text-white text-center hover:text-primary md:hover:text-secondary transition duration-200 transform md:hover:scale-110">Home</NavbarLink>
            <NavbarLink as={Link} href="/#categories" className="text-white text-center hover:text-primary md:hover:text-secondary transition duration-200 transform md:hover:scale-110">Deals & Offers</NavbarLink>
            <NavbarLink as={Link} href="/#about" className="text-white text-center hover:text-primary md:hover:text-secondary transition duration-200 transform md:hover:scale-110">About</NavbarLink>
            <NavbarLink href="#footer" className="text-white text-center hover:text-primary md:hover:text-secondary transition duration-200 transform md:hover:scale-110">Contact Us</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    </section>
  )
}
