function Greeting({ name, age }) {
    // Only show greeting if both name and age have values
    if (!name.trim() || !age.trim()) return null;
    return (
    <h2>
        Hello {name}, you are {age}!
    </h2>

    );
}
export default Greeting;