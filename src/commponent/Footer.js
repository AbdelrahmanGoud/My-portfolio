import logofoot from '../image/logblsck.jpg';
function Footer()
{ 
       let ydata =new Date()
       let showdata =ydata.getFullYear()
       let logofot= '<GoudaDev/>'
    return(
        <>
        <footer> 
        <div className="foot">
        <div className="foot-logo">
          <h2>{logofot}</h2>
        </div>
        <div className='icon-foot my-4'>
          <span className='icon-one px-2'><a href='https://github.com/AbdelrahmanGoud'><i class="fa-brands fa-github foot-i"></i></a></span>
          <span className='icon-two px-2'><a href="mailto:abdoahmed132001@gmail.com"><i class="fa-regular fa-envelope foot-i"></i></a></span>
          <span className='icon-tree px-2'><a href='https://wa.me/+201148952582'><i class="fa-brands fa-whatsapp foot-i"></i></a></span>
          <span className='icone-four px-2'><a href='tel:01148952582'><i class="fa-solid fa-phone foot-i"></i></a></span>
        </div>
        <h6>All Rights Reserved GoudaDev © {showdata}</h6>
        </div>    
        </footer>
        </>  
    )      
}
export default Footer;