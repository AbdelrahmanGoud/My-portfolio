import ecommerc from '../image/ecommerce.jpg';
import resto from '../image/rest.jpg';
import bazal from '../image/bazal.jpg';
import danlils from '../image/denils.jpg';
import backer from '../image/backer.jpg';
import crudone from '../image/crudone.jpg';
import crudtow from '../image/crudtow.jpg';
import popup from '../image/popup.jpg';
import anamit from '../image/anmit.jpg';
import navBar from '../image/nav.jpg';
import midical from '../image/midical.jpg';
import eng from '../image/eng.jpg';
import Footer from './Footer';
import { useState } from 'react';

function Projects()
{     
   const [showElement, setShowElement] = useState(false);

  const handleShowClick = () => {
    setShowElement(true);
  };

  const handleHideClick = () => {
    setShowElement(false);
  };
   return(
      <>
      <section className="proj-sec">
      {showElement && <div className='layar-black'>
       <div className='black-box'>
         <h4 className='text-warning p-3'>Warning!</h4>
         <p className='px-3 pb-5'>Is this website unresponsive on small screens?<br></br> 
         Do you attempt to open this website on a screen smaller than 1200 pixels?</p>
          <div className='button-box'>
          <button onClick={handleHideClick} className='btn btn-primary px-3 mx-2 text-black bot-yes'>Yes</button>
          <a href='http://animationswebsit.netlify.app' className='camcel'><button className='btn btn-success px-3 mx-2 text-black'>No</button></a> 
          <div className='Div-exit-icon'>
          <button onClick={handleHideClick} className='x-icon'><i class="fa-regular fa-circle-xmark exit-icon"></i></button>
         </div> 
          </div>
       </div>
      </div> }  
        
      <div className="container cont-proj">
         <div className="cont-title">
            <div className="title-proj-one">
               <h2>Projects</h2>
               <div className="title-proj-two">
                  <h3>Projects</h3>
               </div>
            </div>
         </div>
        <div className="row row-proj">
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ecommerc} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://e-commerceapp.surge.sh'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/E-commerce'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={midical} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://medical-site-web.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Medical'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={resto} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://restaurantewb.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Restaurant'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={bazal} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://bezelprot.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Bezel'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={danlils} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://dnaielsport.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/DANEILS'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={backer} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://backerweb.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/BACKER'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={eng} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://engineeringwebsite.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/engineering'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={crudone} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://crudappone.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Crud-App'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={crudtow} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://crudapptwo.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Crud2'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={popup} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://popupapp.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Popup'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={anamit} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><button onClick={handleShowClick} className='but-icon-anmat'><i class="fa-solid fa-magnifying-glass anmitin-icon"></i></button></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Animationswebsit'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div> 
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={navBar} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='http://navbaranm.netlify.app'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Navbar'><i class="fa-solid fa-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         </div> 
      </div>  
      </section>
      <Footer/>
      </>    
   )       
}
export default Projects;