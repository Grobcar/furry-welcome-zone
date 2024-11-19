import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const MenuItems = () => (
    <>
      <NavigationMenuItem className="w-full">
        <Link to="/" className="block w-full font-semibold text-lg text-primary hover:text-primary/80">
          PawsomeCare
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="w-full">
        <NavigationMenuTrigger className="w-full">Services</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li className="row-span-3">
              <Link to="/services" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md">
                <div className="mb-2 mt-4 text-lg font-medium text-white">
                  Veterinary Services
                </div>
                <p className="text-sm leading-tight text-white/90">
                  Comprehensive medical care for your beloved pets
                </p>
              </Link>
            </li>
            <li>
              <Link to="/grooming" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Grooming</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Professional pet grooming services
                </p>
              </Link>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem className="w-full">
        <Link to="/blog" className="block w-full px-4 py-2 hover:text-primary">
          Blog
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="w-full">
        <Link to="/contact" className="block w-full px-4 py-2 hover:text-primary">
          Contact
        </Link>
      </NavigationMenuItem>
    </>
  );

  return (
    <div className="max-w-full w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <Link to="/" className="font-semibold text-lg text-primary">
          PawsomeCare
        </Link>
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-lg font-semibold hover:text-primary">
                Home
              </Link>
              <Link to="/services" className="text-lg hover:text-primary">
                Services
              </Link>
              <Link to="/grooming" className="text-lg hover:text-primary">
                Grooming
              </Link>
              <Link to="/blog" className="text-lg hover:text-primary">
                Blog
              </Link>
              <Link to="/contact" className="text-lg hover:text-primary">
                Contact
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