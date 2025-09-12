import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ maxWidth: 520, margin: "2rem auto", fontFamily: "system-ui, sans-serif" }}>
      <h3>Controlled Form (email + password)</h3>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        autoComplete="email"
      />

      <label htmlFor="password" style={{ marginTop: 12, display: "block" }}>Password</label>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          autoComplete="current-password"
        />
        <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          aria-pressed={showPassword}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <hr style={{ margin: "16px 0" }} />

      {/* For learning only: don't display raw passwords in production */}
      <p><strong>You typed:</strong></p>
      <p>Email: {email || <em>(empty)</em>}</p>
      <p>
        Password:
        {" "}
        {password ? `${"*".repeat(password.length)} (length: ${password.length})` : <em>(empty)</em>}
      </p>
    </div>
  );
}
