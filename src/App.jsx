import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProjectSideBare from './components/ProjectSideBar'
import NewProject from './components/NewProject'
import ProjectNoteSelected from './components/ProjectNoteSelected'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[]
  });
  
  function handleStartProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:null,
      }
    })
  }
   
  function handleAddProject(projectData){
    setProjectState(prevState =>{
      const newProject={
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState, 
        projects:[...prevState.projects, newProject]
      };
    })
  }

// console.log(projectState.projects)
  let projectContent;

  if (projectState.selectedProjectId === null){
    projectContent = <NewProject onAddProjectDetail={handleAddProject}/> 
  }else if (projectState.selectedProjectId === undefined){
    projectContent = <ProjectNoteSelected onStartaddProject ={handleStartProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectSideBare onStartaddProject ={handleStartProject} />
    {projectContent}
    </main>
  )
}

export default App
