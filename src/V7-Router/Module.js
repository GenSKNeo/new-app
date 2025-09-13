import { useParams, useNavigate } from "react-router-dom";

export default function Module() {
  // Now we grab both modulecode and type from the URL
  const { modulecode, type } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Module Code: {modulecode}</h2>
      <h3>Type: {type}</h3>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
