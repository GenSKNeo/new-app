// src/Home.js
import { useNavigate } from 'react-router-dom';

function Home() {
    // Get the navigate function
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the about page after 1 second
        setTimeout(() => {
            navigate('/about');
        }, 1000);
    };
    return (
        <div>
            <h1>Welcome to My Website!</h1>
            <p>This is the home page.</p>
            {/* Add a button that uses the navigate function */}
            <button onClick={handleClick}>Wait 1 second, then go to About</button>
        </div>
    );
}

export default Home;