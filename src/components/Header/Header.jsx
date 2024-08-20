
import './GitHubButton.scss';
import SideBar from '../SideBar/SideBar'
import  Navbar from '../Navbar/navbar'
const GitHubButton = () => {
  const openGitHub = () => {
    window.open('https://github.com/ishikagulati', '_blank');
  };

  return (
    <>
    <button className="github-button" onClick={openGitHub}>
     Github👩🏻‍💻
    </button>
    <Navbar/>
    <SideBar/>
    </>
  );
};

export default GitHubButton;
