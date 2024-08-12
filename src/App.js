import './App.css';
import { About, NavBar, Project, Contact, Skills } from './components/index';

function App() {
  return (

    <div className="App">
      <NavBar />
      <About />
      <hr style={{ width: '2rem', borderColor: '#d2a85f' }} />
      <Skills />
      <hr style={{ width: '2rem', borderColor: '#d2a85f' }} />
      <Project />
      <hr style={{ width: '2rem', borderColor: '#d2a85f' }} />
      <Contact />
      <hr style={{ width: '2rem', borderColor: '#d2a85f' }} />
     
    </div>
  );
}

export default App;
