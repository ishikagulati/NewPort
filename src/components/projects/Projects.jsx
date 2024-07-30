import "./Projects.scss";
import { useRef } from "react";
import PropTypes from 'prop-types';


const items = [
    { id: 1, title: "MindEase", img: "project2.png", desc: "MindEase is a mental health app designed to provide users with tools and resources for managing stress, anxiety, and depression. It offers personalized exercises, meditation guides, mood tracking, and access to professional support, aiming to promote mental well-being and resilience through evidence-based practices." },
    { id: 2, title: "Streamify", img: "project1.png", desc: "Streamify is an innovative platform that simplifies video streaming by integrating multiple services into one seamless interface. Users can manage, discover, and stream content from various providers, create personalized playlists, and receive recommendations based on their preferences, enhancing their overall viewing experience." },
    { id: 3, title: "LyricsFinder", img: "LyricsFinder.png", desc: "LyricsFinder is a comprehensive music app that allows users to search and view lyrics for any song. It features a vast database, real-time syncing with music playback, and an intuitive interface. Users can also save favorite lyrics, share them, and explore song meanings, enhancing their musical experience." },
    { id: 4, title: "iTask-todo", img: "iTas-todo.png", desc: "iTask is a dynamic to-do app designed to boost productivity by organizing tasks efficiently. It offers features like task prioritization, deadline reminders, collaborative lists, and progress tracking. With its user-friendly interface and customizable options, iTask helps users stay focused and manage their time effectively." },
    { id: 5, title: "Spotify Clone", img: "spotifyclone.png", desc: "Spotify Clone is a music streaming app replicating the core features of Spotify. It offers an extensive library of songs, personalized playlists, and recommendations. Users can create, share, and explore playlists, follow artists, and enjoy high-quality audio streaming, delivering a comprehensive and immersive music experience." },
];

const Single = ({ item }) => {
    const ref=useRef();
    
    return (
        <section >
            <div className="container">
                <div className="imageContainer" ref={ref}>
            <img src={item.img} alt=""/>
            </div>
            <div className="textContainer"  >
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
            {/* Optionally render img and desc if needed */}
            </div>
            </div>
        </section>
    );
}; 



Single.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string,
        desc: PropTypes.string,
    }).isRequired,
};

const Projects = () => {
    const ref = useRef();
    

    return (
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>PROJECTS</h1>
                <div  className="progressBar"></div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Projects;
