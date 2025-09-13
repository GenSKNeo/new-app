import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./V8-ReactApp/Sidebar";
import Home from "./V8-ReactApp/Home";
import Profile from "./V8-ReactApp/Profile";
import Programming from "./V8-ReactApp/Programming";
import Math from "./V8-ReactApp/Math";
import Module from "./V8-ReactApp/Module";

export default function App() {
  return (

      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ marginLeft: "200px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/math" element={<Math />} />
            <Route path="/module/:modulecode/:type" element={<Module />} />
            {/* ✅ NotFound route */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>
      </div>

  );
}
