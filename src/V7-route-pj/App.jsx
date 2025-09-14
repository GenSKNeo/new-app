import { Routes, Route } from 'react-router-dom';
import Navigation from './V7-route-pj/Navigation';
import Home from './V7-route-pj/Home';
import About from './V7-route-pj/About';
import Contact from './V7-route-pj/Contact';
import Team from './V7-route-pj/Team';
import Profile from './V7-route-pj/Profile';
import NotFound from './V7-route-pj/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;