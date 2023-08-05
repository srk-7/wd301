import './TaskCard.css'
const TaskCard = (props) => {
    let date = "Due on: "+props.dueDate;
    if(!props.dueDate)
    {
        date = "Completed on: "+props.completedAtDate;
    }
    return (
        <div className="TaskItem">
            <h2 className="text-m font-bold">{props.title}</h2>
            <p>{date}</p>
            <p> Assignee: {props.assigneeName} </p>
        </div>
    )
}
export default TaskCard