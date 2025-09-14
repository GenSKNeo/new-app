// src/Team.js
import { Link } from 'react-router-dom';
import { teamMembers } from './data';

function Team() {
  return (
    <div>
      <h1>Our Team</h1>
      <ul>
        {teamMembers.map(member => (
          <li key={member.id}>
            {/* Link to the dynamic profile route */}
            <Link to={`/profile/${member.id}`}>
              {member.name} - {member.role}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Team;