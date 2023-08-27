import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
}
interface TaskFormState {
    title: string;
  }
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: ""
    }
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input type="text" />
        <button type="submit">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;