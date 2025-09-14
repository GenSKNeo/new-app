import React, { useState, useEffect } from 'react';
import './App.css';

// Asian user data - localized for Singapore/Malaysia context
const asianUsers = [
  {
    id: 1,
    name: "Wei Chen",
    username: "weichen",
    email: "weichen@example.sg",
    phone: "+65 9123 4567",
    website: "weichen.dev",
    company: {
      name: "Singapore Technologies"
    },
    address: {
      street: "Orchard Road 123",
      city: "Singapore"
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Mei Ling",
    username: "meiling",
    email: "meiling@example.my",
    phone: "+60 12 345 6789",
    website: "meiling.com",
    company: {
      name: "Kuala Lumpur Innovations"
    },
    address: {
      street: "Jalan Ampang 456",
      city: "Kuala Lumpur"
    },
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    username: "rajeshk",
    email: "rajesh@example.sg",
    phone: "+65 8765 4321",
    website: "rajeshkumar.sg",
    company: {
      name: "Marina Bay Financial"
    },
    address: {
      street: "Raffles Place 789",
      city: "Singapore"
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    username: "sitinur",
    email: "siti@example.my",
    phone: "+60 13 456 7890",
    website: "siti.my",
    company: {
      name: "Penang Digital Solutions"
    },
    address: {
      street: "Gurney Drive 101",
      city: "Penang"
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 5,
    name: "Hiroshi Tanaka",
    username: "hiroshi",
    email: "hiroshi@example.jp",
    phone: "+81 90-1234-5678",
    website: "hiroshi.co.jp",
    company: {
      name: "Tokyo Tech Ventures"
    },
    address: {
      street: "Shibuya Crossing 567",
      city: "Tokyo"
    },
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

// Task 1: Toggle Message Component
function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <h2>Task 1: Event Handling</h2>
      <button className="btn-primary" onClick={toggleVisibility}>
        Toggle Message
      </button>
      {isVisible && (
        <p className="fade-in" style={{ marginTop: '20px' }}>
          Hello, welcome to React!
        </p>
      )}
    </div>
  );
}

// Task 2: Color Changer Component
function ColorChanger() {
  const [color, setColor] = useState('#f0f0f0');

  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="card">
      <h2>Task 2: State Management</h2>
      <input
        type="text"
        value={color}
        onChange={handleInputChange}
        placeholder="Enter a color name or hex code"
        className="color-input"
      />
      <div className="color-box-container">
        <div
          className="color-box"
          style={{ backgroundColor: color }}
        ></div>
        <p>Current color: {color}</p>
      </div>
    </div>
  );
}

// Task 3: User Profile Component with Asian Data
function UserProfile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(1);

  // Simulate API fetch with Asian data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUsers(asianUsers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    setSelectedUserId(parseInt(event.target.value));
  };

  const selectedUser = users.find(user => user.id === selectedUserId);

  return (
    <div className="card">
      <h2>Task 3: Data Fetching (Asian Data)</h2>
      
      {loading ? (
        <div className="loading">Loading user data...</div>
      ) : (
        <>
          <div className="user-selector">
            <label htmlFor="user-select">Select a user: </label>
            <select 
              id="user-select"
              value={selectedUserId} 
              onChange={handleUserChange}
              className="user-dropdown"
            >
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.address.city})
                </option>
              ))}
            </select>
          </div>
          
          {selectedUser && (
            <div className="user-profile fade-in">
              <div className="profile-header">
                <img 
                  src={selectedUser.image} 
                  alt={selectedUser.name}
                  className="profile-image"
                />
                <h3>{selectedUser.name}</h3>
                <p className="user-location">{selectedUser.address.city}</p>
              </div>
              <div className="profile-details">
                <p><strong>Username:</strong> {selectedUser.username}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Website:</strong> {selectedUser.website}</p>
                <p><strong>Company:</strong> {selectedUser.company.name}</p>
                <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>React Learning - Day 5</h1>
        <p>Interactive Components with Events, State, and Data Fetching</p>
        <p className="asia-badge">Featuring Asian User Data</p>
      </header>
      
      <div className="cards-container">
        <ToggleMessage />
        <ColorChanger />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;