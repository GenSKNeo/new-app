import { Link } from "react-router-dom";

export default function Programming() {
  const modules = [
    { code: "CS101", name: "Intro to Programming" },
    { code: "CS201", name: "Data Structures" },
  ];

  return (
    <div>
      <h2>💻 Programming Modules</h2>
      <ul>
        {modules.map((m) => (
          <li key={m.code}>
            <Link to={`/module/${m.code}/programming`}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
