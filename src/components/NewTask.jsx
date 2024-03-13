import { useState } from "react";

function NewTask({OnAddTask}){
    const[enteredTask, setEnteredTask] = useState();

    function handleChange(event){
        setEnteredTask(event.target.value)
    }
    function handleClick(){
        OnAddTask(enteredTask);
        setEnteredTask('')
    }
    return <div className="flex items-center gap-4">
   <input   value={enteredTask} placeholder="Enter your task " onChange={handleChange} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
    <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
}

export default NewTask ;