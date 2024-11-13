import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationMenu className="max-w-full w-full justify-center bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <NavigationMenuList className="px-4 md:px-6 lg:px-8 py-2">
        <NavigationMenuItem>
          <Link to="/" className="font-semibold text-lg text-primary hover:text-primary/80">
            PawsomeCare
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
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
        <NavigationMenuItem>
          <Link to="/blog" className="px-4 py-2 hover:text-primary">
            Blog
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact" className="px-4 py-2 hover:text-primary">
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;