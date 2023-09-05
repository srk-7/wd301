import { useEffect } from "react";
import Task from "./Task";
import { useLocalStorage } from "./hooks/useLocalStorage";
interface Props {
  tasks: TaskItem[];
}
interface TaskItem {
  title: string;
  dueDate:string;
  description:string;
}


const TaskList = (props: Props) => {

  const [tasks, setTasks] = useLocalStorage<Props>("tasks", {
    tasks: [],
  });

  useEffect(() => {
    console.log("Triggered");
    localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks]);

  const deleteTask = (idx: number) =>  {
    const updatedTasks = [...props.tasks.slice(0, idx), ...props.tasks.slice(idx+1)]
    setTasks({tasks: updatedTasks});
    window.location.reload();
  };

  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      />
      <button id="deleteTaskButton" className="deleteTaskButton" onClick={() => deleteTask(idx)}>Delete{idx}</button>      
   
    </li>
    
  ));
  return <><ol>{list}</ol></>;
};
export default TaskList;