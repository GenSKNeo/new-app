import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    margin: "10px 0",
    color: isActive ? "blue" : "black",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none"
  });

  return (
    <aside style={{ width: "180px", padding: "20px", borderRight: "1px solid #ccc" }}>
      <h3>Navigation</h3>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
      <NavLink to="/programming" style={linkStyle}>Programming</NavLink>
      <NavLink to="/math" style={linkStyle}>Math</NavLink>
    </aside>
  );
}
