import LoaderPage from "@/routes/loader-page";
import { useAuth } from "@clerk/clerk-react";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const ProtedctedRoutes = ({ children }: PropsWithChildren) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoaderPage />;
  }

  if (!isSignedIn) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};

export default ProtedctedRoutes;
