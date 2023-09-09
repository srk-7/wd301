import React, { useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";



interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks",{
    tasks: [],
  });
  
  useEffect(() => {
    document.title = `You have ${taskAppState.tasks.length} items`;
  }, [taskAppState.tasks]);

  React.useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
    }, 5000);
    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const remove = (titleid: number) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((task) => task.id !== titleid),
    });
  };

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">
        Smarter Tasks
      </h1>
      <h2 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h3 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h3>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} remove={remove} />
        </div>
      </div>
    </div>
  );
};
export default TaskApp;