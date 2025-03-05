import ecommerc from '../image/ecommerce.jpg';
import resto from '../image/rest.jpg';
import bazal from '../image/bazal.jpg';
import danlils from '../image/denils.jpg';
import backer from '../image/backer.jpg';
import crudone from '../image/crudone.jpg';
import crudtow from '../image/crudtow.jpg';
import popup from '../image/popup.jpg';
import anamit from '../image/anmit.jpg';
import midical from '../image/midical.jpg';
import eng from '../image/eng.jpg';
import photograph from '../image/photography.jpg';
import photo from '../image/phot.jpg';
import cafew from '../image/cafe.jpg'
import yournews from '../image/yournews.jpg';
import techno from '../image/techno.jpg';
import shop from '../image/shop-2.jpg';
import ym from '../image/ym2.jpg';
import shi from '../image/shi.jpg';
import vi from '../image/vi.jpg';
import gu from '../image/gu.jpg';
import ma from '../image/ma-2.jpg';
import st from '../image/st.jpg';
import wa from '../image/wa.jpg';
import ya from '../image/ya.jpg';
import popp from '../image/popp.jpg';
import ne from '../image/ne.jpg';
import cd from '../image/cd.jpg';
import app from '../image/app.jpg';
import dec from '../image/dec.jpg';
import gr from '../image/gr.jpg';
import ci from '../image/ci.jpg';
import ss from '../image/5s.jpg';
import va from '../image/va.jpg';
import hm from '../image/hm.jpg';
import ao from '../image/ao.jpg';
import az from '../image/az.jpg';
import oc from '../image/oc.jpg';
import sg from '../image/sg.jpg';
import ra from '../image/ra.jpg';
import vip from '../image/vip.jpg';
import pl from '../image/pl.jpg';
import sk from '../image/sk.jpg';
import ess from '../image/ess.jpg';
import mh from '../image/mh.jpg';
import bi from '../image/bi.jpg';
import as from '../image/as.jpg';
import bag from '../image/bag.jpg';
import pri from '../image/pri.jpg';
import drw from '../image/drw.jpg';
import wed from '../image/wad.jpg';
import pmp from '../image/pmp.jpg';
import wo from '../image/1mo.jpg';
import cust from '../image/cust.jpg';
import jok from '../image/jok.jpg';
import roy from '../image/roy.jpg';
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
            <img src={drw} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://drweud.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={wed} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://wadesignbanner.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
           <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={cust} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://customodoo.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={pmp} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://pmphit.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={wo} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://1matchoil.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
        <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ym} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://yemenibookstore.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/'><i class="fa-brands fa-wordpress-simple"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={shi} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://sahib-realestate.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/'><i class="fa-brands fa-wordpress-simple"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={vi} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://viziontools.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/'><i class="fa-brands fa-wordpress-simple"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={gu} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://theguruway.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/'><i class="fa-brands fa-wordpress-simple"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
           <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={bag} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://www.bahgatfarms.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ma} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://mamlakatsaba.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={st} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://dev-staybook.pantheonsite.io/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/'><i class="fa-brands fa-wordpress-simple"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={wa} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://wadestorefixtureplus.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/'><i class="fa-brands fa-wordpress-simple"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ya} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://yalladetroit.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/'><i class="fa-brands fa-shopify"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={popp} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://poppinusa.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/'><i class="fa-brands fa-wordpress-simple"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={as} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://amstardist.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
           <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ne} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://nevape.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
          <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={cd} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://shopcdw.com/shop'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
          <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={dec} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://decaturdist.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
          <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={app} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://app.vizionerp.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={gr} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://gr8wholesale.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ci} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://mydirectcigars.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ss} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://5starcigarsdepot.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={va} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://vapeshock.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={hm} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://hmdistroco.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ao} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://aonewholesaleinc.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={az} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://atoz.vizionerp.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={oc} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://oceanone.vizionerp.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={sg} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://saveandgo.vizionerp.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ra} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://ravisinternational.vizionerp.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={vip} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://vipdistronj.vizionerp.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={pl} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://planbwholesale.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={sk} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://skokie.vizionerp.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ess} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://essatrading.vizionerp.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={mh} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://hamptonimpex.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={bi} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://bigtimedist.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
        <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={shop} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://3ashop.netlify.app/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/A-Shop'><i class="fa-brands fa-github git-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={ecommerc} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://web-commerce-set.netlify.app/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/E-commerce'><i class="fa-brands fa-github git-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
          <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={techno} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://dev-technobase.pantheonsite.io'><i class="fa-solid fa-magnifying-glass"></i></a></span> 
      
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={yournews} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://dev-ab2news.pantheonsite.io'><i class="fa-solid fa-magnifying-glass"></i></a></span> 
      
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Medical'><i class="fa-brands fa-github git-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={cafew} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://websit-cafe.netlify.app/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Cafe'><i class="fa-brands fa-github git-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={roy} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://royalpremiumoil.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={jok} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://jokerkingpremiumoil.com/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={photograph} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://photography-web-site.netlify.app/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Photography'><i class="fa-brands fa-github git-link"></i></a></span>
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Restaurant'><i class="fa-brands fa-github git-link"></i></a></span>
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Bezel'><i class="fa-brands fa-github git-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={photo} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://web-photo.netlify.app/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Photography-web-seit'><i class="fa-brands fa-github git-link"></i></a></span>
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/DANEILS'><i class="fa-brands fa-github git-link"></i></a></span>
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/BACKER'><i class="fa-brands fa-github git-link"></i></a></span>
            </div>
            </div>  
            </div>
         </div>
         <div className="col-lg-4 mb-5">
            <div className="proj-item">
            <img src={pri} alt="project" className="img-fluid i-img"></img> 
            <div className='layar'>
            <div className='icon-layar'>
             <span className='icon-one px-1'><a href='https://dev-updatscode.pantheonsite.io/'><i class="fa-solid fa-magnifying-glass"></i></a></span>  
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/engineering'><i class="fa-brands fa-github git-link"></i></a></span>
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Crud-App'><i class="fa-brands fa-github git-link"></i></a></span>
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Crud2'><i class="fa-brands fa-github git-link"></i></a></span>
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Popup'><i class="fa-brands fa-github git-link"></i></a></span>
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
             <span className='icon-one px-1'><a href='https://github.com/AbdelrahmanGoud/Animationswebsit'><i class="fa-brands fa-github git-link"></i></a></span>
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