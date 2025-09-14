// src/Navigation.js
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    {/* Use Link for basic navigation */}
                    <Link to="/">Home (Basic Link)</Link>
                </li>
                <li>
                    {/* Use NavLink for navigation where you want to know if it's active */}
                    <NavLink to="/about">
                        About (Fancy NavLink)
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>

                {/* Add profile UserId link */}
                <li><NavLink to="/profile/abc123">
                        User ABC
                    </NavLink>
                </li>
                <li><NavLink to="/profile/def456">
                        User DEF
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;