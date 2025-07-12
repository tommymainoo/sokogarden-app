import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>SokoGarden-Buy and sell online</h2>
          <NavBar/>
        </header>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/add_products" element={<AddProducts />} />
          <Route path="/" element={<GetProducts />} />
        
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;