import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      {/* store user data */}
      <img
        src="/assets/img/bg.png"
        className="absolute w-full h-full object-cover opacity-20"
      />
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
