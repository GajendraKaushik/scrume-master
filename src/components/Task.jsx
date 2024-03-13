import NewTask from "./NewTask";

function Task({tasks, OnAddTask, OnDeleteTask, }){
    return <section>
       <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
       <NewTask OnAddTask={OnAddTask} OnDelteTask={OnDeleteTask} />
       {tasks.length === 0 &&<p className="text-stone-800 mb-4">
        This project does not have any tasks yet.
       </p>}
    {tasks.length > 0 && <ul>
        {tasks.map((task) => <li key={task.id} className="p-4 mt-8 rounded-md bg-stone-100">
           <span> {task.text} </span>
           <button className="text-stone-700 hover:text-red-500">Clear</button> 
            </li>)}
    </ul>}
    </section>
}
export default Task;