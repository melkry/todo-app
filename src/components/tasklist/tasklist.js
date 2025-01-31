import { useState } from "react";
import './tasklist.css';

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, description: "Get Dressed", complete: false },
        { id: 2, description: "Feed pets", complete: false },
        { id: 3, description: "Walk Dog", complete: false },
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, complete: !task.complete } : task
        ));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const clearTasks = () => {
        setTasks([]);
    };

    return (
        <div>
            <h1>Tasks List</h1>
            <ul id="tasks">
                {tasks.map(task => (
                    <li key={task.id} className='task-container'>
                        <div className="task-contents">
                            <h2 className="task-title">{task.description}</h2>
                            <span>Id: <span className="task-id">{task.id}</span></span>
                            <span>Status: <span className="task-status">{task.complete ? "Complete" : "Incomplete"}</span></span>
                            <span>
                                <button className="change-status" onClick={() => toggleTask(task.id)}>Change Status</button>
                                <button className="remove-task" onClick={() => removeTask(task.id)}>Remove Task</button>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={() => clearTasks()}>Clear Tasks</button>
        </div>
    );
} 