
import { Link } from "react-router-dom";
function Home(){
    return (
        <div>
            <h2>Modules</h2>
            <p>
                <Link to="/module/IS3106/title">IS3106 (Title)</Link> |{" "}
                <Link to="/module/IS3106/description">IS3106 (Description)</Link>
            </p>
            <p>
                <Link to="/module/MA1301/title">MA1301 (Title)</Link> |{" "}
                <Link to="/module/MA1301/description">MA1301 (Description)</Link>
            </p>
        </div>
    );
}

export default Home;