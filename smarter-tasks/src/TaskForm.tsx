import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate:"",
      description:"",
    }
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: "",
      description: "",
      dueDate: "",
      
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input type="text" />
        <input  id="todoDescription" name="todoDescription" type="text" required />
        <input id="todoDueDate" name="todoDueDate" type="date" required />
        <button id="addTaskButton" type="submit">  Add item</button>
      </form>
    )
  }
}
 export default TaskForm;