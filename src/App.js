//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react'
//imrc
function App() {
  const [mode, setMode]=useState('light');
  const [modeText, SetModeText]=useState('Enable Dark Mode');
  const [alert, setAlert]=useState(0);
  const showAlert=(message, type)=>{
    //state is an object now
    setAlert({
    msg:message,
    alertType: type,
  })
  setTimeout(() => {
    setAlert(0);
  }, 2000);
}
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
  }
  const toggleHandle=(cls)=>{
    removeBodyClasses();
    if(cls==='primary'){
      setMode('primary');
      document.body.classList.add('bg-'+cls);
      cls='null';
    }
    else if(mode==='dark')
    {
      setMode('light');
      SetModeText('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled !", "success");
    
    }
    else
    {
      setMode('dark');
      SetModeText('Enable Light Mode')
      document.body.style.backgroundColor='#212529';
      showAlert("Dark Mode has been enabled !", "success");
    }
  }
  return (
    <>   
      <Router>
      <Navbar Title='TEXT UTILS' home='Home' about='About Us' mode={mode} modetext={modeText} toggleHandle={toggleHandle}/>
      <Alerts alert={alert} />
          <Routes>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode}/> } />
          <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
      </Router>
    </>
    
  ) ;
}

export default App;
