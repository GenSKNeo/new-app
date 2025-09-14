import { useState } from 'react'
import { Link } from "react-router-dom";

function ControlledForm(){
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value); // React state updates input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Name:", name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}  // uncontrolled, managed by the DOM
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <Link to={`/`}>Back to Profile</Link>
        </form>
    );
}

export default ControlledForm;