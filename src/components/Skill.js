
import html5Icon from './assets/icons/html5.png';
import reactIcon from './assets/icons/react.png';
import cssIcon from './assets/icons/css-3.png';
import bootstrapIcon from './assets/icons/bootstrap.png';
import jsIcon from './assets/icons/js.png';
import mysqlIcon from './assets/icons/mysql.png';
import nodeIcon from './assets/icons/node-js.png';
import gitIcon from './assets/icons/git.png';
import githubIcon from './assets/icons/github.png';
import wordpressIcon from './assets/icons/wordpress.png';
import figmaIcon from './assets/icons/figma.png';
import sassIcon from './assets/icons/sass.png';



function Skill(props) {
    return (
        <div className="no-background">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='skill-div'>
                            <h1 className="skill-h1">Skills</h1>
                            <h3>{props.name}</h3>
                            <p className="skill-p">Pass the mouse over the skill to see the definition.
                                {props.content}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={reactIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={html5Icon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={cssIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={bootstrapIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={jsIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={mysqlIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={nodeIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={gitIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={githubIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={wordpressIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={figmaIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='skill-img-div'>
                                        <img className="skill-icon" src={sassIcon} alt="skill-icon"></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            )
    
}

            export default Skill;