import logo from './logo.svg';
import './App.css';
import Home from './sections/Home';
import Skill from './sections/Skill';
import Projects from './sections/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
        <main>
        <Home/>
        <Skill/>
        <Projects/>
        </main>
      <Footer/>
      
      
    </div>
  );
}

export default App;
