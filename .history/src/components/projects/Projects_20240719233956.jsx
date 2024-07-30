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
    <div className="projects">
    <div className="pr">Projects
    {items.map(item=>(
        <Single item={item} key={item.id}/> 
    ))}
    </div>
    </div>
  )
}

export default Projects