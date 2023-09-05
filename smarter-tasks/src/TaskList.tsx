import React from "react";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}
interface TaskItem {
  title: string;
  dueDate:string;
  description:string;
}
interface State {}
// class TaskList extends React.Component<Props, State> {
  
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description}/>
//     ));
//   }
// }
const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
    />
  ));
  return <>{list}</>;
};
export default TaskList;