// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import Theme from './components/Theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {

  // localStorage.setItem('themeKey', 'lightKey')

  // document.getElementById('themeTogggleSwitch').checked = true
  // console.log(document.getElementById('themeTogggleSwitch').checked);
  

  const [mode, setMode] = useState('light')
  const [altMode, setAltMode] = useState('dark')
  const [themeIcon, setThemeIcom] = useState('bi-moon-stars-fill')
  const [alert, setAlert] = useState(null)

  const toggleTheme = () => {
    if (mode === 'light' && altMode === 'dark') {
      setMode('dark')
      setAltMode('light')
      document.body.style.backgroundColor = '#424242'
      showAlert3000('Dark mode has been set', 'success')
      document.title = 'My React App - DarkMode'
      setThemeIcom('bi-sun-fill')
      localStorage.setItem('themeKey', 'darkKey')

    }
    else {
      setMode('light')
      setAltMode('dark')
      document.body.style.backgroundColor = '#ffffff'
      showAlert3000('Light mode has been set', 'success')
      document.title = 'My React App - LightMode'
      setThemeIcom('bi-moon-stars-fill')
      localStorage.setItem('themeKey', 'lightKey')
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
    <Router>
      <>
        <header>
          <Navbar title="My-React-App" home="Home" about="About" theme={"Theme"} mode={mode} altMode={altMode} toggleTheme={toggleTheme} themeIcon={themeIcon} />
          <Alert alert={alert} />
        </header>

        {/* <main>
          <section>
            <TextForm heading="Enter the text to analyze" mode={mode} altMode={altMode} showAlert1500={showAlert1500} />
            <Theme />
          </section>
        </main> */}

        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} altMode={altMode} showAlert1500={showAlert1500} />} />
          <Route exact path="/theme" element={<Theme />} />
        </Routes>
      </>
    </Router>

  );
  
}

export default App;
