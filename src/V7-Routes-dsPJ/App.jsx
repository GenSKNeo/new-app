import { Routes, Route } from 'react-router-dom';
import Home from './V7-Routes-dsPJ/Home';
import About from './V7-Routes-dsPJ/About';
import Contact from './V7-Routes-dsPJ/Contact';
import Navigation from './V7-Routes-dsPJ/Navigation';
import Profile from './V7-Routes-dsPJ/Profile'; // will create this
import NotFound from './V7-Routes-dsPJ/NotFound';
import Team from './V7-Routes-dsPJ/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} /> {/* Add this line */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;