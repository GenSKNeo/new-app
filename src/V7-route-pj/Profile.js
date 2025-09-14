import { useParams, useNavigate } from 'react-router-dom';
import { teamMembers } from './data';
import './Profile.css';

function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find(m => m.id === userId);

  if (!member) {
    return (
      <div className="not-found-container">
        <h2>Member not found!</h2>
        <button onClick={() => navigate('/team')} className="back-btn">
          Back to Team
        </button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image">{member.image}</div>
        <div className="profile-info">
          <h1>{member.name}</h1>
          <h2>{member.role}</h2>
          <p className="profile-email">{member.email}</p>
        </div>
      </div>

      <div className="profile-content">
        <section className="profile-section">
          <h3>About Me</h3>
          <p>{member.bio}</p>
        </section>

        <section className="profile-section">
          <h3>Skills & Expertise</h3>
          <div className="skills-container">
            {member.skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        <div className="profile-actions">
          <button onClick={() => navigate('/team')} className="back-btn">
            ← Back to Team
          </button>
          <button onClick={() => navigate(-1)} className="back-btn">
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;