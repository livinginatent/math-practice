import "./App.css";
import Home from "./Pages/Home";
import AdditionMain from "./Pages/AdditionMain";
import MultiplicationMain from "./Pages/MultiplicationMain";
import SubtractionMain from "./Pages/SubtractionMain";
import DivisionMain from "./Pages/DivisionMain";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/addition-practice/" element={<AdditionMain />} />
            <Route
              path="/subtraction-practice/"
              element={<SubtractionMain />}
            />
            <Route
              path="/multiplication-practice/"
              element={<MultiplicationMain />}
            />
            <Route path="/division-practice/" element={<DivisionMain />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/register/" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
