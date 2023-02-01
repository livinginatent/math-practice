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
import FreeOrChallenge from "./components/FreeOrChallenge";
import UserDashboard from "./Pages/UserDashboard";
import {useSelector} from 'react-redux'
import Profile from "./Pages/Profile";

function App() {
  const user = useSelector((state)=>state.auth.user)
  return (
    <>
      <div  className="App">
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
            <Route path="/prac-challenge/" element={<FreeOrChallenge />} />
            <Route path="/dashboard/" element={user ? <UserDashboard/> : <Login/>} />
            <Route path="/profile/" element={<Profile />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
