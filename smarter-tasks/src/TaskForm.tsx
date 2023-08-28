import React from "react";
import { TaskItem } from "./types";
import "./TaskCard.css"

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
    this.setState({title: ""});
    this.setState({description: ""});
    this.setState({dueDate: ""});
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
        <input id="todoTitle" type="text" placeholder="Title" value={this.state.title} onChange={this.titleChanged} required/><br></br><br></br>
        <input  id="todoDescription" name="todoDescription" placeholder="Description" onChange={this.descriptionChanged} type="text" required /><br></br><br></br>
        <input id="todoDueDate" name="todoDueDate"  type="date" onChange={this.dueDateChanged} required /> <br></br><br></br>
        <button id="addTaskButton" type="submit">Add item</button>
      </form>
    )
  }
}
export default TaskForm;