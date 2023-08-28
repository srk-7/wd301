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
      dueDate: "",
      description: "",
    }
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({title: "",description: "",dueDate: ""});
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };

  render(){
    return (
        <form onSubmit={this.addTask}>
        <input type="text" placeholder="title" value={this.state.title} onChange={this.titleChanged} required/>
        <input  id="todoDescription" name="todoDescription" placeholder="description" onChange={this.descriptionChanged} type="text" required />
        <input id="todoDueDate" name="todoDueDate"  type="date" onChange={this.dueDateChanged} required /> 
        <button id="addTaskButton" type="submit">Add item</button>
      </form>
    )
  }
}
export default TaskForm;