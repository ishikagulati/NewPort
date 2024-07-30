
import './footer.scss';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className="footer-content">
        <p>Designed and Developed by <a href="#">Ishika Gulati</a></p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <p className='secondary'>&copy; {date}  <a href="#"> All Rights Reserved.</a></p>
      </div>
    </footer>
  );
};

export default Footer;

