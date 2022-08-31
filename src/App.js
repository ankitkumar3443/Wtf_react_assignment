 
import './App.scss';
import Navbar from './Componentes/Navbar/Navbar';
import Dashboard from './Componentes/Dashboard/Dashboard';
import MainSection from './Componentes/MainSection/MainSection';
import Experience from './Componentes/Experience/Experience';
import Footer from './Componentes/Footer/Footer';


function App() {
  return (
    <div className="app">
      <Navbar/> 
      <Dashboard/>
      <MainSection/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
