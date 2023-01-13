import './App.css';
import { About, NavBar, Footer, Project, Contact, Skills } from './components/index';

function App() {
  return (

    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
