import "./Projects.scss"

const items=[
    {
        id:1,
        title:"React app",
        img: "",
        desc:"",
    },
    {
        id:1,
        title:"React app",
        img: "",
        desc:"",
    },
    {
        id:1,
        title:"React app",
        img: "",
        desc:"",
    },
    {
        id:1,
        title:"React app",
        img: "",
        desc:"",
    },
    {
        id:1,
        title:"React app",
        img: "",
        desc:"",
    },
    

];
const Single=({item})=>{
    return (
        <section>
            {item.title}
        </section>
    )
}

const Projects = () => {
  return (
    < className="projects">
    <div className="projects">Projects
    {items.map(item=>(
        <Single item={item} key={item.id}/> 
    ))}
    </div>
  )
}

export default Projects