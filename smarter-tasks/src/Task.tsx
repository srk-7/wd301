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
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">DueDate: {props.dueDate}</p>
        <p className="text-sm text-slate-500">Description: {props.description}</p>
        <button className="deleteTaskButton" onClick={() => props.remove(props.id)}>Delete</button>
    </div>
  );
};
export default Task;