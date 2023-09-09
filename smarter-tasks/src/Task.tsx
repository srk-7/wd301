import './TaskCard.css';
// import { TaskItem } from './types';
interface TaskItem {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  remove: (titleid: number) => void;
}

const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h3 className="text-base font-bold my-1"><a href={`/tasks/${props.id || ""}`}>{props.title}</a></h3>
      <p className="text-sm text-slate-500">DueDate: {props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="deleteTaskButton" id="deleteTaskButton" onClick={() => props.remove(props.id)}>[ X ]</button></p>
    </div>
  );
};
export default Task;