import { useState } from "react";

export default function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {

    return (
        <div>
            <h2>These are the tasks:</h2>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} onStatusChange={onStatusChange} onTaskRemove={onTaskRemove}/>
                ))}
            <button onClick={() => onClearTasks()}>Clear Tasks</button>
        </div>
    );
} 