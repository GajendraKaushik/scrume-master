import projectImage from '../assets/no-projects.png'
import Button from './Button'

export default function ProjectNoteSelected({onStartaddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
        <img src={projectImage} alt="Project Image" className='mx-auto w-16 h-16 object-contain'/>
        <h2 className='font-bold text-stone-500 text-xl my-4'>No project selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or create a new project to add </p>
        <p>
       <Button onClick={()=> onStartaddProject()} lable="Creat New Project" />
        </p>
        </div>
        
    )
}