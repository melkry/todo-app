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
        <div>
            <hr />
            <h3>{props.task.description}</h3>
            <div>Id: {props.task.id}</div>
            <div>Status: {props.task.done ? "Complete" : "Incomplete"}</div>
            <button onClick={() => handleStatusClick(props.task.id)}>Change Status</button>
            <button onClick={() => handleRemoveClick(props.task.id)}>Remove Task</button>
        </div>
    )
}