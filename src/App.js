
import CristImg from './components/CristImg';
import MeImg from './components/MeImg';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skill from './components/Skill';
import skills from './skills';


import './App.css';





function App() {
  return (
    <div className="white-div">

      {/* HOME  */}
      <div className="see">
      <h1 className="home-h1">Hi, There</h1>
      <Navbar />
      <div className='colored-div'>
        <p></p>
      </div>
      <CristImg />
      <p className="home-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br /> ut aliquip ex ea commodo consequat.
      </p>
      </div>

      {/* PROJECTS */}
      <div className="no-background">
        <Projects  />
      </div>

      {/* SKILLS */}
      {skills.map(item => <Skill key= {item.key} name= {item.name} content= {item.content} iconURL={item.iconURL} />)}

      {/* ABOUT */}
      <div className="about-brown-div"></div>
      <div className="text-color-div">
        <div className="about-MeImg-div">
          <h1 className="about-h1">Lucas Marques</h1>
          <MeImg />
          <p className="about-job">Software Developer</p>
        </div>
          <div className="about-content">
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
            <p className="contact-p">Contact Me</p>
          </div>
      </div>

        {/* FOOTER */}
        <div className="footer-brown-div text-color-div">
          <p className='footer-p'>Home</p>
          <p className='footer-p'>Projects</p>
          <p className='footer-p'>Skills</p>
          <p className='footer-p'>About</p>
          <p className="copyright">@copyright Lucas Marques </p>
        </div>
        
      
    </div>

  );
}

export default App;
