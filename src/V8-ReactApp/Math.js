import { Link } from "react-router-dom";

export default function Math() {
  const modules = [
    { code: "MA101", name: "Calculus I" },
    { code: "MA201", name: "Linear Algebra" },
  ];

  return (
    <div>
      <h2>📘 Math Modules</h2>
      <ul>
        {modules.map((m) => (
          <li key={m.code}>
            <Link to={`/module/${m.code}/math`}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
