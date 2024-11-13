import { Link } from 'react-router-dom';
import DotGrid from '../components/DotGrid';

function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="bg-water-effect">
          <DotGrid />
        </div>
        <div className='bg-intro'>
          <div className='intro-big'>
            <h3>Turning Your <span className='name'>Visions</span></h3>
            <h3>into Virtual <span className='name'>Reality</span> .</h3><br/>
          </div>
          <div className='intro-small'>
            <p>My name is Mohamed Ghiouan, and I'm a Fullstack Engineer.
               I invite you to explore my portfolio, a journey of learning 
               from mistakes and growing with each project.</p>
               <br />
          </div>
          <div className='link'>
            <div className='me-link'>
              <Link to="/project">
                <div>
                  <i className='bx bx-right-arrow-alt'></i>see my projects
                </div>
                <div className='link-underline'></div>
              </Link>
            </div>
            <div className='me-link'>
              <Link to="/about">
                <div>
                  <i className='bx bx-right-arrow-alt'></i>more about me
                </div>
                <div className='link-underline'></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
