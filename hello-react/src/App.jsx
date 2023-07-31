import TaskCard from "./TaskCard"
import './TaskCard.css'

function App() {
  return (
    <div>
      <div>
        <h1 className="text-xl underline py-1 font-bold text-gray-500">Pending Tasks:</h1>
        <TaskCard title="Build the website with static content" dueDate="10th August" Assignee="Shivaramakrishna"/>
        <TaskCard title="Review-1" dueDate="5th September" Assignee="Satya"/>
      </div>
      <div>
        <h1 className="text-xl underline py-1 font-bold text-gray-500">Done Tasks:</h1>
        <TaskCard title="Idea and Abstract" comDate="14th June" Assignee="Sathvik"/>
        <TaskCard title="Designed Mockup" comDate="21th July" Assignee="Amit"/>
        <TaskCard title="Structure and Associations" comDate="29th July" Assignee="Paul"/>
      </div>
    </div>
  )
}

export default App