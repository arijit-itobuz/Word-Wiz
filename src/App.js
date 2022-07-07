import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <header>
        <Navbar title="My-React-App" home="Home-React" about="About-React" />
      </header>

      <main>
        <section>
          <TextForm heading="Enter the text to analyze" />
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
