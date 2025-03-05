import $ from 'jquery'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Servicesec()
{  
  useEffect(()=>{
   
  },[])
    return(
        <>
        <section className="serv-sec"> 
        <div className="container">
         <div className='cont-title'>
           <div className="title-serv">
           <h2>Services</h2>      
           <div className="title-tow">
           <h3>Services</h3>
           </div>   
          </div>
         </div>
          <div className="row">
          <div className="col-md-6 mb-5">
           <div className="serv-item">
           <h3 className="pb-2"> WordPress developmen</h3>    
            <span className="mb-3 serv-icon post text-center"><i class="fa-brands fa-wordpress"></i></span>   
            <p className='dec-serv'>"Do you need a complete and easy-to-manage website? With my experience in developing websites using WordPress, I provide you with innovative solutions tailored to your needs. I will work to create a website with professional and attractive design, while ensuring a smooth and secure user experience"</p>  
           </div>
           </div> 
           <div className="col-md-6 mb-5">
           <div className="serv-item">
           <h3 className="pb-2">Shopify Developing</h3>    
            <span className="mb-3 serv-icon post text-center"><i class="fa-brands fa-shopify"></i></span>   
            <p className='dec-serv'>"Do you want to launch a professional and easy-to-use online store? With my experience in Shopify, I can help you create a premium store that allows you to sell your products easily. I will work with you step by step to ensure the success of <br></br> your online store."</p>  
           </div>
           </div> 
           <div className="col-md-6 mb-5">
           <div className="serv-item">
           <h3 className="pb-2">Development</h3>    
            <span className="mb-3 serv-icon post text-center"><i class="fa-solid fa-code"></i></span>   
            <p className='dec-serv'>" A development service is not only about creating technological solutions, but also involves understanding the customers' needs and analyzing their challenges, providing continuous support to ensure the continued growth and development of the provided <br></br> solutions"</p>  
           </div>
           </div>   
           <div className="col-md-6 mb-5">
           <div className="serv-item">
            <h3 className="pb-2">Clean Code</h3>   
            <span className="mb-3 serv-icon-clean post"><i class="fa-regular fa-circle-check"></i></span>  
            <p>"Writing clean code is a journey, not a destination. It requires discipline, patience, and constant effort to ensure that your code is readable, maintainable, and scalable. By adopting best practices, reducing complexity, and emphasizing clarity, you can create code that not"</p> 
           </div>
           </div> 
           <div className=" col-md-6 mb-5">
           <div className="serv-item">
           <h3 className="pb-2">Responsev</h3>    
            <span className="mb-3 serv-icon-resp post"><i class="fa-solid fa-mobile-screen"></i></span>   
            <p>"Response design is a crucial factor in determining the quality of user experience on a website, and it requires attention to different elements such as color schemes, icons, fonts, and element arrangement to improve usability and enable effective interaction with the website"</p>  
           </div>
           </div> 
           <div className="col-md-6 mb-5">
           <div className="serv-item">
           <h3 className="pb-2">Maintenance</h3>     
            <span className="mb-3 serv-icon-ment post"><i class="fa-solid fa-gear"></i></span>   
            <p>"User interface maintenance is essential for maintaining the safety and attractiveness of applications and websites. This maintenance includes many activities such as fixing errors and defects, updating content, and improving the overall user experience. Therefore, focusing on user interfaces"</p>  
           </div>
           </div>       
          </div>
          <Link to='/Contact'><button className="btn btn-danger mb-3">Contact Us</button></Link>

        </div>
        </section>
        <Footer/>
        </>  
    )      
}
export default Servicesec;