import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      {/* store user data */}
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
