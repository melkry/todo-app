import React, { useState } from "react";

export default function Form({handleAddTask}) {
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("open");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description === "") {
            setError("Enter a description");
        } else {
            //clear error
            setError("");
            // handle form
            handleAddTask({description,status});
            // reset form
            setDescription("");
            setStatus("open");
        }
    }

    render (
        <form onSubmit={handleSubmit}>
            <h2>Add a new task</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <label>
                Description:
                <input 
                type="text" 
                maxLength="150"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </label>

            <label>
                Status:
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="open">Open</option>
                    <option value="completed">Completed</option>
                </select>
            </label>

            <button type="submit">Add</button>
        </form>
    );
}