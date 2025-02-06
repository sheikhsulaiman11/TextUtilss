import './App.css';
import About from './components/about';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
import React, { useState } from 'react';



function App() {
  const[mode, setmode]=useState('light');
  const[mode2]=useState('green');
  const [alert, setAlert]= useState(false);

  const showAlert=(message, type)=>{
       setAlert({
        msg: message,
        type: type
       })
       setTimeout(() => {
        setAlert(false);
       }, 3000);
  }

  const togglemode = ()=>{
    if(mode=== 'light'){
      setmode ('dark');
      document.body.style.backgroundColor = '#424242';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled","Success");
      document.title = 'TextUtils - Darkmode';
    }else{
      setmode ('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode enabled", "Success");
      document.title = 'TextUtils - lightmode';
    }
  }

  const togglemode2 = ()=>{
    if(mode=== 'light'){
      setmode('#052601');
      document.body.style.backgroundColor = '#052601';
      document.body.style.color = 'white';
      showAlert("green mode enabled","Success");
      document.title = 'TextUtils - Greenmode';
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode enabled", "Success");
      document.title = 'TextUtils - lightmode';
    }
  }
   
  


  return (
  <>
  <Navbar title="TextUtils" mode={mode} togglemode={togglemode}mode2={mode2} togglemode2={togglemode2}/>
  <Alert alert = {alert}/>
  <div className="container my-3">
  <Textform showAlert={showAlert}heading="Enter your text" mode={mode}/> 
  <About mode={mode}/>
  </div>
  </>
  );
}

export default App;
