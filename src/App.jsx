import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProjectSideBare from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import ProjectNoteSelected from "./components/ProjectNoteSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[],
  });

  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleOnAddTask(text){
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        projectId: prevState.selectedProjectId,
        id : taskId,
      };
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }
  function handleOnDeleteTask() {}

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  console.log("selected", selectedProject);

  let projectContent = (
    <SelectedProject
      project={selectedProject}
      OnDelete={handleDeleteProject}
      OnAddTask={handleOnAddTask}
      OnDeleteTask={handleOnDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    projectContent = (
      <NewProject
        onAddProjectDetail={handleAddProject}
        onCancel={handleCancelProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    projectContent = (
      <ProjectNoteSelected onStartaddProject={handleStartProject} />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBare
        onStartaddProject={handleStartProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
      />
      {projectContent}
    </main>
  );
}

export default App;
