import { useState, useRef } from 'react'
function ControlledForm(){
    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Name:", nameRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={nameRef}  // uncontrolled, managed by the DOM
            />
            <button type="submit">Submit</button>

        </form>
    );
}

export default ControlledForm;