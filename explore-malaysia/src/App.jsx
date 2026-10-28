import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import "./App.css";




function App() {
  return(
    <BrowserRouter>
      <header>
        <h1>Explore Malaysia</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Register">Register</Link>

        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
        </Routes>
      </main>
      <footer>
        <p>&copy; 2026 Explore Malaysia</p>
      </footer>
    </BrowserRouter>

  );
}
export default App;