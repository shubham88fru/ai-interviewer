import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import Home from "@/routes/home";
import AuthenticationLayout from "./layouts/auth-layout";
import SignInPage from "./routes/signin";
import SignUpPage from "./routes/signup";
import ProtedctedRoutes from "./layouts/protected-routes";
import MainLayout from "./layouts/main-layout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Authentication */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* Protected */}
        <Route
          element={
            <ProtedctedRoutes>
              <MainLayout />
            </ProtedctedRoutes>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
