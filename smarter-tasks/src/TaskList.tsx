import Task from "./Task";
interface Props {
  tasks: TaskItem[];
  remove: (titleid: number) => void;
}
interface TaskItem {
  id: number;
  title: string;
  dueDate:string;
  description:string;
}


const TaskList = (props: Props) => {


  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
      key={idx}
      id={task.id}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      remove={props.remove}
      />
  </li>
    
  ));
  return <ul>{list}</ul>;
};
export default TaskList;