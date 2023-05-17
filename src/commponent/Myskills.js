import { Link } from "react-router-dom";
import Footer from "./Footer";

function Myskills(props)
{
  const { value } = props;
  return(
    <>
    <section className='skill-sec'>
      <div className='container cont-skill'>
        <div className="title-cont">
           <div className='titel-skill-one'>
        <h2>Skills</h2>
        <div className='title-skill-two '>
          <h3>Skills</h3>
        </div>

      </div>
        </div>
      <div className="row">
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog ">HTML</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${95}` }}>
      </div>
        </div>  
      </div>  
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog">CSS</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${90}` }}>
      </div>
        </div>  
      </div>  
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog">Bootstrap</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${85}` }}>
      </div>
        </div>  
      </div> 
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog">ReactBootstrap</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${85}` }}>
      </div>
        </div>  
      </div>  
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog">Js</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${80}` }}>
      </div>
        </div>  
      </div>  
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog"> jQuery</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${80}` }}>
      </div>
        </div>  
      </div>  
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog">ReactJs</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${75}` }}>
      </div>
        </div>  
      </div>  
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog">Commendline</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${70}` }}>
      </div>
        </div>  
      </div>  
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog">git/github</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${85}` }}>
      </div>
        </div>  
      </div>  
      <div className="col-lg-3 col-md-6 mb-5">
      <div className="skill-item "> 
      <h2 className="tit-prog">Scss</h2>
      <div className="prog-skill text-center" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': `${80}` }}>
      </div>
        </div>  
      </div>  
      
      </div>
      <Link to='/Projects'><button className="btn btn-danger mb-3">view projects</button></Link>

      </div>
    </section>
    <Footer/>
    </>
  )
}
export default Myskills;