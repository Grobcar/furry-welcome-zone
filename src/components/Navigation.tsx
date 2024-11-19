import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const MenuItems = () => (
    <>
      <NavigationMenuItem className="w-full flex items-center mr-8">
        <img src="/logo.svg" alt="Veterinaria Gaiteira Logo" className="h-10 mr-2" />
        <Link to="/" className="block font-semibold text-lg text-primary hover:text-primary/80">
          Veterinaria Gaiteira
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="w-full mx-4">
        <NavigationMenuTrigger className="w-full">Servicios</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4">
            <li className="row-span-3">
              <Link to="/services" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md">
                <div className="mb-2 mt-4 text-lg font-medium text-white">
                  Servicios Veterinarios
                </div>
                <p className="text-sm leading-tight text-white/90">
                  Cuidado médico integral para tus mascotas
                </p>
              </Link>
            </li>
            <li>
              <Link to="/grooming" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Peluquería</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Servicios profesionales de peluquería
                </p>
              </Link>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem className="w-full mx-4">
        <Link to="/blog" className="block w-full px-4 py-2 hover:text-primary">
          Blog
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="w-full mx-4">
        <Link to="/contact" className="block w-full px-4 py-2 hover:text-primary">
          Contacto
        </Link>
      </NavigationMenuItem>
    </>
  );

  return (
    <div className="max-w-full w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <Link to="/" className="font-semibold text-lg text-primary">
          Veterinaria Gaiteira
        </Link>
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-lg font-semibold hover:text-primary">
                Inicio
              </Link>
              <Link to="/services" className="text-lg hover:text-primary">
                Servicios
              </Link>
              <Link to="/grooming" className="text-lg hover:text-primary">
                Peluquería
              </Link>
              <Link to="/blog" className="text-lg hover:text-primary">
                Blog
              </Link>
              <Link to="/contact" className="text-lg hover:text-primary">
                Contacto
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex justify-center">
        <NavigationMenuList className="px-4 md:px-6 lg:px-8 py-2">
          <MenuItems />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;