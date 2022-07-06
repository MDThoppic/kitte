//import logo from './logo.svg';
import './App.css';
import './index.css'
import './compoent/Login.css'
import Login from "./compoent/Login";
// import Home from "./compoent/Home";
// import About from "./compoent/About";
// import Support from "./compoent/Support";
// import Book from "./compoent/Book";
import { Fooder } from "./compoent/Fooder";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'

const App=()=> {

  return (
    <div className='App'>

      
          <Login />
          

      <Fooder />

    </div>
  );


}
export default App;
