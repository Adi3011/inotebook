import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
/* React app is made of --> State and Component
 now context api is used for navigation and navigation events and navigation events are handled internally
 */
function App() {
  return (
    <>
    {/* include NoteState to use NoteContext(context api) */}
      <NoteState> 
        <Router>
          <div>
            <Navbar />
            <Alert  message ={'This is amazing react course'}/>
            <div className="container my-3">
              <Routes>
                <Route exact path="/" element={<Home />} />
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
