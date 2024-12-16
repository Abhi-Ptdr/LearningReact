// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {  //means Reacts uses "Function Based Components" nowadays erlier it use "Class Based Componentes"
  
  const [mode, setMode] = useState("light");  //state varible for whether the dark mode is enable or not 
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#202020";
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm className="mb-4" heading="Enter Your Text to Manipulate or Analyze" showAlert={showAlert} mode={mode}/>} />          
        </Routes>
      </div>
    </Router>
    
    </>
  );

}

export default App;
