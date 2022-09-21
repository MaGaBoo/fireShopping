import React, { useState } from "react";
import { db} from "../firebase/index";
import { addNewTask } from "../firebase/taskController";

const task = {
  title: "Task title",
  description: "Description goes here",
};

const createNewTask = async () => {
  console.table(task);
  await addNewTask(task);
}

const ShoppingList = () => {
  const [task, setTask] = useState({ title: "", description: "" });

  return (
    <div>
      <h1 className="text-sky-700 font-semibold text-lg">Task List</h1>
      <div className="flex flex-col gap-4">
        <h2>Create a new task</h2>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Name of your task"
          className="border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full"
        />
        <textarea
          type="text"
          rows={3}
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Describe your task"
          className="border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full"
        />
        <button
          className="bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold"
          onClick={createNewTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
