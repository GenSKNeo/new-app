import { Routes, Route } from 'react-router-dom';
import Home from './V7-routerDS/Home';
import About from './V7-routerDS/About';
import Contact from './V7-routerDS/Contact';
import Navigation from './V7-routerDS/Navigation';
import Profile from './V7-routerDS/Profile'; // will create this
import NotFound from './V7-routerDS/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Add the navigation bar */}
      <Navigation />
      {/* The Routes component is like a security guard. */}
      {/* It looks at the URL and decides which component to let through. */}
      <Routes>
        {/* Each Route is a rule for the security guard. */}
        {/* If the URL path is "/", show the <Home /> component. */}
        <Route path="/" element={<Home />} />
        {/* If the URL path is "/about", show the <About /> component. */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* :userId is a URL parameter. It can be any value! */}
        <Route path="/profile/:userId" element={<Profile />} />
        {/* Catch-all route - MUST be last! */}
        <Route path="*" element={<NotFound />} />        
      </Routes>
    </div>

  );
}

export default App;