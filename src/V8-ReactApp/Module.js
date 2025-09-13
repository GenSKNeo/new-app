import { useParams, useNavigate } from "react-router-dom";

export default function Module() {
  const { modulecode, type } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>📖 Module Details</h2>
      <p><b>Code:</b> {modulecode}</p>
      <p><b>Type:</b> {type}</p>
      <button onClick={() => navigate(-1)}>⬅ Back</button>
    </div>
  );
}
