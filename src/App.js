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
    if (mode === 'light' && altMode === 'dark') {
      setMode('dark')
      setAltMode('light')
      document.body.style.backgroundColor = '#424242'
      showAlert3000('Dark mode has been set', 'success')
      document.title = 'My React App - DarkMode'
    }
    else {
      setMode('light')
      setAltMode('dark')
      document.body.style.backgroundColor = '#ffffff'
      showAlert3000('Light mode has been set', 'success')
      document.title = 'My React App - LightMode'
    }
  }

  const showAlert3000 = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    let themeToggleSwitch = document.getElementById('themeTogggleSwitch')
    themeToggleSwitch.disabled = true
    setTimeout(() => {
      setAlert(null)
      themeToggleSwitch.disabled = false
    }, 3000);
  }
  const showAlert1500 = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <header>
        <Navbar title="My-React-App" home="Home-React" about="About-React" mode={mode} altMode={altMode} toggleTheme={toggleTheme} />
        <Alert alert={alert} />
      </header>

      <main>
        <section>
          <TextForm heading="Enter the text to analyze" mode={mode} altMode={altMode} showAlert1500={showAlert1500} />
        </section>
      </main>

      <footer>
      </footer>
    </>
  );
}

export default App;
