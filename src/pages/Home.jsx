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
            <h3>Hey, My name is <span className='name'>Mohamed Ghiouan</span>
              <br />but you can call me <span className='name'>Mr.G</span>
            </h3>
          </div>
          <div className='intro-small'>
            <p>I'm a Full-Stack Developer</p>
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
