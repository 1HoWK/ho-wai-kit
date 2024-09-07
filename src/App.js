import './App.css';
import { About, NavBar, Project, Contact, Skills } from './components/index';

function App() {
  return (

    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Project />
      <Contact/>     
    </div>
  );
}

export default App;
