import './App.css';
import pfp from './images/pfp.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import mail from './images/mail.png'

function App() {
  return (
    <>  
        <div className='row'>
            <div className='left'>
                <h1>Andy Hu</h1>
                <div className='about-section'>
                    <a href="http://github.com/andyh031" target="_blank" rel="noreferrer" className='about-link'><img src={github} alt='github' className='tiny-logo'/>Github</a>
                    <a href="https://www.linkedin.com/in/andy-hu-a78304280/" target="_blank" rel="noreferrer" className='about-link'><img src={linkedin} alt='linkedin' class='tiny-logo' />LinkedIn</a>
                    <a href="mailto:andy45.hu@gmail.com" className='about-link'><img src={mail} alt='mail' className='tiny-logo' />Email</a>
                </div>
                <h2>About Me</h2>
                    <p>
                        I am currently on my way to completing a Bachelor's degree specialized in 
                        Computer Science and Statistcs at the <a href="https://www.ubc.ca/" target="_blank" rel="noreferrer">University of British Columbia</a>. 
                        Previously, I completed my high school degree at <a href="https://school.cbe.ab.ca/school/DrEPScarlett/Pages/default.aspx" target="_blank" rel="noreferrer">Dr. E. P. Scarlett High School</a>,
                        achieving the Governor General's Bronze Academic Medal.
                    </p>
                <h2>Projects</h2>
                    <p>
                        You can find my most recent projects linked in my GitHub above. During my free time,
                        I like to keep myself occupied by continuously refining my ever expanding skillset, especially
                        in the technical fields surrounding computer science and statistics through project-based learning.
                    </p>
                <h2>Current Courses</h2>
                    <ul>
                        <li>CPSC 304: Relational Databases</li>
                        <li>STAT 201: Statistical Inference for Data Science</li>
                    </ul>
                <h2>For Fun</h2>
                    <p>
                        Outside of school, you might find me snowboarding and skiing 
                        down double blacks at Lake Louise or longboarding across
                        campus and the downtown area!
                    </p>
            </div>
            <img src={pfp} alt='profile' className='pfp right'/>
        </div>
    </>
)
}

export default App;
