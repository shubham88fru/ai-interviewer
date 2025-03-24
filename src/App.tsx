import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import Home from "@/routes/home";
import AuthenticationLayout from "./layouts/auth";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* Protected */}
      </Routes>
    </Router>
  );
};

export default App;
