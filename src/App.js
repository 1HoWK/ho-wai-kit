import logo from './logo.svg';
import './App.css';
import { About, NavBar, Footer, Resume } from './components/index';

function App() {
  return (

    <div className="App">
      <NavBar />
      <About />
      <Resume />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
    </div>
  );
}

export default App;
