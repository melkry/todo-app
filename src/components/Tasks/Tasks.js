import { useState } from "react";
import uuid from 'react-uuid';
import Task from './Task/Task'

export default function Tasks() {
    const [tasks, setTasks] = useState([
        { id: uuid(), description: "Get Dressed", done: false },
        { id: uuid(), description: "Feed pets", done: false },
        { id: uuid(), description: "Walk Dog", done: false },
    ]);

    const handleStatusChange = (id) => {
        const updatedTasks = [...tasks];
        updatedTasks.forEach((task) => {
        if (task.id === id) {
            task.done = !task.done;
        }
        });
        setTasks(updatedTasks);
    }

    const handleTaskRemove = (id) => {
        const filteredTasks = tasks.filter(
            (task) => task.id !== id
        );
        setTasks(filteredTasks);
    }

    const handleClearTasks = () => {
        setTasks([]);
    };

    return (
        <div>
            <h2>These are the tasks:</h2>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} onStatusChange={handleStatusChange} onTaskRemove={handleTaskRemove}/>
                ))}
            <button onClick={() => handleClearTasks()}>Clear Tasks</button>
        </div>
    );
} 