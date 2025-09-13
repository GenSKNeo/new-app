import { Link, NavLink, Routes, Route } from "react-router-dom";
import Home from "./V7-Router/Home";
import Profile from "./V7-Router/Profile";
import About from "./V7-Router/About";
import Math from "./V7-Router/Math";
import './index.css';

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/profile">Profile</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/math">Math</NavLink>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/math" element={<Math />} />
      </Routes>
    </div>
  );
}
