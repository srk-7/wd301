import './TaskCard.css';
import { TaskItem } from './types';
// class Task extends React.Component<TaskProp> {
//     render() {
//       return (
//         <div className="TaskItem shadow-md border border-slate-100">
//           <h2 className="text-base font-bold my-1">{this.props.title}</h2>
//           <p className="text-sm text-slate-500">{this.props.dueDate}</p>
//           <p className="text-sm text-slate-500">
//             Description: {this.props.description}
//           </p>
//         </div>
//       );
//       }
// }
const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">DueDate: {props.dueDate}</p>
        <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};
export default Task;