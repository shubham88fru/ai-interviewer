import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import Container from "./ui/container";
import LogoContainer from "./LogoContainer";
import NavigationRoutes from "./navigation-routes";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          <LogoContainer />

          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
