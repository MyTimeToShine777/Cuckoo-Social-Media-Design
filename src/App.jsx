import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const user = true;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
