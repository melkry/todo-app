import './MainMenu.scss';
import { Link } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav>
            <Link to="/">Tasks</Link>
            <Link to="/add">Add</Link>
            <Link to="/help">Help</Link>
        </nav>
    );
}