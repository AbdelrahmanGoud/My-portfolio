import { Link } from 'react-router-dom';
import aboutImg from '../image/Picsart_23-04-28_18-36-02-526.png';
import Footer from './Footer';
function About()
{
    return(
     <>
     <section className="about-section">
      <div className="container">
      <div className="row d-f">
      <div className="col-lg-6 ">
      <div className="about-item divition">
      <img src={aboutImg} alt='img' className='img-fluid'></img>
      </div>    
      </div>
      <div className="col-lg-6">
      <div className="about-item divition-tow">
      <h2>About Me</h2>
      <p className='pb-2'>I am a Front-end Developer and I have the necessary skills to convert designs into dynamic and attractive web pages that add value to the user experience. Using modern design and development tools and technologies, I can improve and simplify user interfaces and make them easy to use with an engaging user experience. With my expertise and knowledge of modern programming languages, I am capable of developing dynamic web applications using modern frameworks and API technologies while ensuring compatibility with different browsers.</p>
      <button className='btn btn-dark mx-2 down-but'>DownloadCV</button>
      <Link to='/Contact'><button className='btn btn-danger contact-but'>Contact</button></Link>
      </div>    
      </div>
      </div>    
      </div>
     </section>
     <Footer/>
     </>
    ) 
}
export default About;