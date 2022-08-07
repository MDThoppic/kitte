import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './pages/Login';
import Header from './component/Nav';
import Routers from './navigates/Routes';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <div className="App">
      {/* <Routers /> */}
      <Login />
      
    </div>
  );
}

export default App;
