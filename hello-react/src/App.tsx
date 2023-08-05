import React from "react"
import TaskCard from "./TaskCard"
import './TaskCard.css'

function App() {
  return (
    <div>
      <div>
        <h1 className="text-xl underline py-1 font-bold text-gray-500">Pending Tasks:</h1>
        <TaskCard title="Build the website with static content" dueDate="10th August" assigneeName="Shivaramakrishna"/>
        <TaskCard title="Review-1" dueDate="5th September" assigneeName="Satya"/>
      </div>
      <div>
        <h1 className="text-xl underline py-1 font-bold text-gray-500">Done Tasks:</h1>
        <TaskCard title="Idea and Abstract" completedAtDate="14th June" assigneeName="Sathvik"/>
        <TaskCard title="Designed Mockup" completedAtDate="21th July" assigneeName="Amit"/>
        <TaskCard title="Structure and Associations" completedAtDate="29th July" assigneeName="Paul"/>
      </div>
    </div>
  )
}

export default App