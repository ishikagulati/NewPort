

const skill = ({src= "computer.png" , name = "Java"}) => {
  
  return (
    <div className="i1">
    <img src={src} alt="" className='i2'/>
    {name}
  </div>
  )
}

export default skill

//https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg