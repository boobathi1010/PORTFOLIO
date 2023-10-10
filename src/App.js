import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from './Menu/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Certificate from './Certificate/Certificate';
import Design from './components/particles';
import Links from './components/links';
import Contact from './Contact/Contact';
import Skill from './Skill/Skill';

function App() {
  return (
   <> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Menu/>,<Home/>,<Design/>]}/>
          <Route path='/about' element={[<Menu/>,<About/>]}/>
          <Route path='/certificate' element={[<Menu/>,<Certificate/>]}/>
          <Route path='/skill' element={[<Menu/>,<Skill/>]}/>
          <Route path='/contact' element={[<Menu/>,<Contact/>,<Links/>]}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
      </BrowserRouter> 
   </>
  );
}

export default App;
