import { projectsSource } from "./projects.json";

const Projects = props => {
  return (
    <div className="m-10">
      <span className="lg:text-3xl  font-bold leading-tight text-3xl">My Projects:</span>
      <div className="flex justify-center">
        <div className="p-5 grid grid-flow-row grid-cols-3">
          {projectsSource.map(proj => {
            return <Project name={proj["name"]} description={proj["description"]} set={() => props.set(proj["source"])} />
          })}
        </div>
        </div>
    </div>
  );
}

const Project = ({name, description, set}) => {
  return(
    <div className="bg-gray-100 rounded-2xl shadow-lg w-56 h-32 border-2 border-blue-200 transition-all transform hover:scale-105 p-2 overflow-ellipsis cursor-default m-5" >
      <span className="absolute top-1 left-2 font-bold font-sans">{name}</span>
      <p className="h-16 overflow-hidden absolute left-3 top-6">{description}</p>
      <p onClick={set} className="absolute bottom-1 right-1 underline transition-all hover:opacity-80 cursor-pointer">read more</p>
    </div>
  )
}

export default Projects;