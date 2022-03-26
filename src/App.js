import './App.css';
import Header from "./Header";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Proyects from "./Proyects";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Proyects/>
      <Contact/>
    </div>
  );
}

export default App;
