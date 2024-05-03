import './App.css';
import NavBar from './componentes/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuemSomos from './componentes/QuemSomos';
import Contato from './componentes/Contato';
import Home from './componentes/Home';
import Footer from './componentes/Footer';



function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <NavBar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Contato' element={<Contato/>} />
          <Route path='/QuemSomos' element={<QuemSomos/>} />
        </Routes>
        <Footer/>
      </header>
      </Router>
    </div>
  );
}

export default App;
