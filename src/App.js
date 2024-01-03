import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
/* React app is made of --> State and Component
 now context api is used for navigation and navigation events and navigation events are handled internally
 */
function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2000)
  }
  return (
    <>
    {/* include NoteState to use NoteContext(context api) */}
      <NoteState> 
        <Router>
          <div>
            <Navbar />
            {alert && <Alert alert ={alert}/> }
            <div className="container my-3">
              <Routes>
                <Route exact path="/" element={<Home showAlert = {showAlert} />} />
                <Route exact path="/login" element={<Login showAlert = {showAlert} />} />
                <Route exact path="/signup" element={<Signup showAlert = {showAlert} />} />
                <Route exact path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
