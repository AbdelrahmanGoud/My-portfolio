import { Link } from "react-router-dom";

function Homesec()
{
    return(
      <>
      <section className="hmoe-sec">
        <header className="head-back">
        <div class="center">
        <div className="desc">
<p className=" hello">Hello</p>
<h1>Im Abdelrahman Ahmed</h1>
<h3>Front End Developer</h3>
<p className="py-2">Welcome to my personal website, I hope you like it and find it useful.</p>
<Link to='/Projects'><button className="btn btn-danger mb-3">view projects</button></Link>
<div className='nav-icons'>
          <span className='icon-one px-2'><a href='https://github.com/AbdelrahmanGoud'><i class="fa-brands fa-github nav-i"></i></a></span>
          <span className='icon-tree px-2'><a href='https://www.linkedin.com/in/abdelrhman-ahmed-25635527b'><i class="fa-brands fa-linkedin"></i></a></span>
          <span className='icon-two px-2'><a href="mailto:abdoahmed132001@gmail.com"><i class="fa-regular fa-envelope nav-i"></i></a></span>
          <span className='icon-tree px-2'><a href='https://wa.me/+201148952582'><i class="fa-brands fa-whatsapp nav-i"></i></a></span>
          <span className='icone-four px-2'><a href='tel:01148952582'><i class="fa-solid fa-phone nav-i"></i></a></span>
        </div>
</div> 
       </div>
        </header>
      </section>
      </>
    )
}
export default Homesec;


{/* <div className="desc">
<p className=" hello">Hello</p>
<h1>Im Abdelrahman Ahmed</h1>
<h3>Front End Developer</h3>
<p className="py-2">Welcome to my personal website, I hope you like it and find it useful.</p>
<button className="btn btn-danger">view projects</button>
</div> */}