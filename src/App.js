import './App.css';
import Homesec from './commponent/Homesec';
import Navgation from './commponent/Navgation';
import './commponentcss/Navgtionstyle.css';
import './commponentcss/Homestyle.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './commponent/About';
import './commponentcss/Aboutstyle.css';
import Servicesec from './commponent/Servicesec';
import './commponentcss/Servicestyle.css';
import './commponentcss/Skillstyle.css';
import Myskills from './commponent/Myskills';
import Projects from './commponent/Projects';
import './commponentcss/Projectstyle.css';
import Contact from './commponent/Contact';
import './commponentcss/Conactstyle.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navgation/>
      <Routes>
       <Route path='/' element={<Homesec/>}/>
       <Route path='About/' element={<About/>}/>
       <Route path='Servicesec/' element={<Servicesec/>}/>
       <Route path='Myskills/' element={<Myskills/>}/>
       <Route path='Projects/' element={<Projects/>}/>
       <Route path='Contact/' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
