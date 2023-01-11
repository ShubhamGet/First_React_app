import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been Enabled ", "Sucess");
      document.title = "TextUtils - Dark Mode";

      setInterval(() => {
        document.title = "Click over here, to remove the virus";
      }, 2000);

      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled ", "Sucess");
      document.title = "TextUtils - Light Mode";

      setInterval(() => {
        document.title = "Click over here, to remove the virus";
      }, 2000);

      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 1500);

    }
  }


  // this will return the following file, it is without rounting concept
  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below " mode={mode} />
      </div>
    </>
  );
}

export default App;

