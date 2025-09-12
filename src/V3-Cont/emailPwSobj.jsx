import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div style={{ maxWidth: 520, margin: "2rem auto" }}>
      <h2>Controlled Form (single object)</h2>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <label htmlFor="password" style={{ display: "block", marginTop: 12 }}>Password</label>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <button type="button" onClick={() => setShowPassword((s) => !s)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <hr style={{ margin: "16px 0" }} />

      <p>Email: {form.email || <em>(empty)</em>}</p>
      <p>
        Password: {form.password ? `${"*".repeat(form.password.length)} (length: ${form.password.length})` : <em>(empty)</em>}
      </p>
    </div>
  );
}
