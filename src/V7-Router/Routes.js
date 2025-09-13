import { Routes, Route } from "react-router-dom";
import Home from "./V7-Router/Home";
import Profile from "./V7-Router/Profile";
import About from "./V7-Router/About";
import Contact from "./V7-Router/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
