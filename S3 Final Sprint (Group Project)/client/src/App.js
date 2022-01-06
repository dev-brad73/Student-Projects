import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const user = localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <SearchPage /> : <Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
