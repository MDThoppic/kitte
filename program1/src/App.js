//import logo from './logo.svg';
import './App.css';
import './index.css'
import './compoent/Login.css'
import Login from "./Pages/Login";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Support from "./Pages/Support";
// import Book from "./compoent/Book";
// import  Navbar  from './HeaderFooter/Navbar'
// import { Fooder } from "./HeaderFooter/Fooder";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {  BrowserRouter as  Router, Route } from 'react-router-dom'

function App() {

  return (
    <div className='App'> 
<Router>
      
      
        {/* <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Support' element={<Support />} /> */}
        <Route path='/Login' element={<Login />} />
     
    </Router>
    </div>
  );


}
export default App;
