import './App.css';
import { About, NavBar, Footer, Project, Contact } from './components/index';

function App() {
  return (

    <div className="App">
      <NavBar />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
