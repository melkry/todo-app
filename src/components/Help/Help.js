import './Help.scss';
import { Link, Outlet } from "react-router-dom";

export default function Help() {
    return (
        <div className="help-container">
            <Outlet />

            <div className="help-links">
                <Link to="">Introduction</Link>
                <Link to="add">Adding Tasks</Link>
                <Link to="remove">Removing Tasks</Link>
                <Link to="change">Changing Status</Link>
            </div>
        </div>
    );
}