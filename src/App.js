import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Bookmarked from "./pages/Bookmarked/Bookmarked";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TV-Series/TvSeries";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tv-series" element={<TvSeries />}></Route>
        <Route path="/bookmarked" element={<Bookmarked />}></Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
