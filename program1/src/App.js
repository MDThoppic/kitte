//import logo from './logo.svg';
import './App.css';
import './index.css';
import './compoent/Login.css';
import './HeaderFooter/Navbar.css';
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Support from "./Pages/Support";
// import Book from "./compoent/Book";
import { Footer } from "./HeaderFooter/Footer";
import Navbar from './HeaderFooter/Navbar';
import Login from './Pages/Login';


function App() {

  return (
    <div className='App'> 

      <Navbar /> 
      <Login /> 
      <Footer />  

    </div>
  );


}
export default App;
