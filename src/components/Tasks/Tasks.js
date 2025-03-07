import './Tasks.scss';
import Task from './Task/Task.js';

export default function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {

    return (
        <div className='tasks-container'>
            <h2>These are the tasks:</h2>
                <div className="task-list">
                    {tasks.map((task, index) => (
                        <Task key={index} task={task} onStatusChange={onStatusChange} onTaskRemove={onTaskRemove} />
                    ))}
                </div>
            <button onClick={() => onClearTasks()}>Clear Tasks</button>
        </div>
    );
} 