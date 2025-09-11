import { useState } from 'react';

function WelcomeMessage() {
  // State to track the current heading text
  const [headingText, setHeadingText] = useState('Welcome to React!');
  
  // Function to handle the button click
  const handleClick = () => {
    // Change the heading text when the button is clicked
    setHeadingText('You clicked the button!');
  };
  
  return (
    <div>
      {/* Display the heading with the current text from state */}
      <h1>{headingText}</h1>
      
      {/* Button that triggers the text change when clicked */}
      <button onClick={handleClick}>Change Heading</button>
    </div>
  );
}

export default WelcomeMessage;