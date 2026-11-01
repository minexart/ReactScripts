import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Students from "./Students";
import Details from "./Details";
import "./App.css";


function App ()
{
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/students">Students</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/students" element={<Students />}/>
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;