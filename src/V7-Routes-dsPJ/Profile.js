// src/Profile.js
import { useParams, useNavigate } from 'react-router-dom';
import { teamMembers } from './data';

function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Find the member whose `id` matches the `userId` parameter
  const member = teamMembers.find(m => m.id === userId);

  // If no member is found, show an error message
  if (!member) {
    return (
      <div>
        <h2>Member not found!</h2>
        <button onClick={() => navigate('/team')}>Back to Team</button>
      </div>
    );
  }

  // If member is found, show their details
  return (
    <div>
      <h1>{member.name}</h1>
      <h2>{member.role}</h2>
      <p><strong>Bio:</strong> {member.bio}</p>
      <p><strong>Email:</strong> {member.email}</p>
      <button onClick={() => navigate('/team')}>Back to Team List</button>
      <button onClick={() => navigate(-1)}>Go Back (History)</button>
    </div>
  );
}
export default Profile;