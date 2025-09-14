import { Link } from 'react-router-dom';
import { teamMembers } from './data';
import './Team.css';

function Team() {
  return (
    <div className="team-container">
      <h1 className="team-title">Our Amazing Team</h1>
      <p className="team-subtitle">Get to know the talented people behind our success.</p>
      
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="member-image">{member.image}</div>
            <h2>{member.name}</h2>
            <p className="member-role">{member.role}</p>
            <p className="member-bio-preview">{member.bio.substring(0, 80)}...</p>
            <Link to={`/profile/${member.id}`} className="view-profile-btn">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;