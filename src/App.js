// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Theme from './components/Theme';


function App() {
  const [mode, setMode] = useState('light')
  const [altMode, setAltMode] = useState('dark')

  const toggleTheme = () => {
    if(mode === 'light' && altMode === 'dark') {
      setMode('dark')
      setAltMode('light')
    }
    else {
      setMode('light')
      setAltMode('dark')
    }
  }

  return (
    <>
      <header>
        <Navbar title="My-React-App" home="Home-React" about="About-React" mode={mode} altMode={altMode} toggleTheme={toggleTheme}/>
      </header>

      <main>
        <section>
          <TextForm heading="Enter the text to analyze" mode={mode} altMode={altMode}/>
        </section>
      </main>

      <footer>
        {/* <Theme/> */}
      </footer>
    </>
  );
}

export default App;
