import Button from "./Button";

export default function ProjectSideBare({onStartaddProject, projects, onSelectedProject, selectedProjectID}){
    console.log(projects)
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
       <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your project</h2>
       <div className="">
        <Button onClick={()=>{onStartaddProject()}} lable="+ Add Project" />
        </div> 
        <ul className="mt-8">
         {projects.map((project) =>{
            let cssClasses = "rounded-sm w-full py-1 px-2 my-1 text-left hover:text-stone-200 hover: bg-stone-800"
            if (project.id === selectedProjectID){
                cssClasses += ' bg-stone-800 text-stone-200'
            }else{
                cssClasses +=' text-stone-400'
            }


            return <li key={project.id}>
                <button onClick={() => onSelectedProject(project.id)} className={cssClasses}>{project.title}</button>
            </li>
})}
        </ul>
    </aside>
};