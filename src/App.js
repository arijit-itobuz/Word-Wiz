// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert'
// import Theme from './components/Theme';


function App() {
  const [mode, setMode] = useState('light')
  const [altMode, setAltMode] = useState('dark')
  const [alert, setAlert] = useState(null)

  const toggleTheme = () => {
    if(mode === 'light' && altMode === 'dark') {
      setMode('dark')
      setAltMode('light')
      document.body.style.backgroundColor = '#424242'
      showAlert('Dark mode has ben set', 'success')
    }
    else {
      setMode('light')
      setAltMode('dark')
      document.body.style.backgroundColor = '#ffffff'
      showAlert('Light mode has ben set', 'success')
    }
  }

  const showAlert = (message, type)=> {
    setAlert({
      message: message,
      type: type
    })
  }
  return (
    <>
      <header>
        <Navbar title="My-React-App" home="Home-React" about="About-React" mode={mode} altMode={altMode} toggleTheme={toggleTheme}/>
        <Alert alert={alert}/>
      </header>

      <main>
        <section>
          <TextForm heading="Enter the text to analyze" mode={mode} altMode={altMode}/>
        </section>
      </main>

      <footer>
      </footer>
    </>
  );
}

export default App;
