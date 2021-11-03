import { projectsSource } from "./projects.json";

const Projects = props => {
  return (
    <div>
      {projectsSource.map(proj => {
        return <Project name={proj["name"]} description={proj["description"]} set={() => props.set(proj["source"])} />
      })}
    </div>
  );
}

const Project = ({name, description, set}) => {
  return(
    <div>
    <p>hi</p>
      <span>{name}</span>
      <p>{description}</p>
      <p onClick={set}>read more</p>
    </div>
  )
}

export default Projects;