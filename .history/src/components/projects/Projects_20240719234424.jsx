import "./Projects.scss"
import {motion,useScroll} from 'framer-motion';

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
    const ref=useRef
    const {scrollYProgress}=useScroll();
  return (
    < div className="projects" ref={ref}
    <div className="progress">
        <h1>PROJECTS</h1>
        <div className="progressBar"></div>
        </div>
    {items.map(item=>(
        <Single item={item} key={item.id}/> 
    ))}
    </div>
  )
}

export default Projects