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

  const removeBodyClasses=() =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
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

  // const toggleMode = () =>{
  //   if(mode === "light"){
  //     setMode("dark");
  //     // document.body.style.backgroundColor = "#061421";
  //     document.body.style.backgroundColor = "#202020";
  //     showAlert("Dark Mode has been enabled", "success");
  //     // document.title = 'TextUtils - Dark Mode';
  //     // setInterval(() => {
  //     //   document.title = 'Install TextUtils Now';
  //     // }, 2000);
  //     // setInterval(() => {
  //     //   document.title = 'TextUtils is Amazing';
  //     // }, 1500);
  //   }
  //   else{
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode has been enabled", "success");
  //     // document.title = 'TextUtils - Light Mode';
  //   }
  // }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>   {/* This title and about are props and can be accessed in J.S. like props.about or props.title */}
      <Alert alert={alert}/>
      <div className="container my-3">                       {/*container and my-3 are bootstrap classes my-3 for margin in y axis of 3px*/}
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