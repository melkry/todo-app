import './Form.scss';

import React, { useState } from "react";

export default function Form({ onAddTask }) {
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("incomplete");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description === "") {
            setError("Enter a description");
        } else {
            setError(""); // Clear error
            onAddTask( description, status );
            setDescription(""); // Reset form
            setStatus("open");
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Add a new task</h2>

            {error && <p className="form-error">{error}</p>}

            <label className="form-label">
                Description:
                <input
                    type="text"
                    maxLength="150"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-input"
                />
            </label>

            <label className="form-label">
                Status:
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-select"
                >
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Completed</option>
                </select>
            </label>

            <button type="submit" className="form-button">Add</button>
        </form>
    );
}
