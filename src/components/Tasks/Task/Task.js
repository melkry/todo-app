import './Task.scss';

export default function Task(props) {

    const handleStatusClick = () => {
        const id = props.task.id;
        props.onStatusChange(id);
    }

    const handleRemoveClick = () => {
        const id = props.task.id;
        props.onTaskRemove(id);
    }

    return (
        <div className="task">
            <hr />
            <h3 className="task-title">{props.task.description}</h3>
            <div className="task-id">Id: {props.task.id}</div>
            <div className={`task-status ${props.task.done ? "complete" : "incomplete"}`}>
                Status: {props.task.done ? "Complete" : "Incomplete"}
            </div>

            <div className="task-buttons">
                <button className="status-btn" onClick={() => handleStatusClick(props.task.id)} >
                    Change Status
                </button>

                <button className="remove-btn" onClick={() => handleRemoveClick(props.task.id)}>
                    Remove Task
                </button>
            </div>
        </div>
    )
}