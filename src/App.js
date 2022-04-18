import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarRoute from "./components/NavbarRoute";
import Home from "./pages/home/Home";
import Bookmarked from "./pages/Bookmarked/Bookmarked";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TV-Series/TvSeries";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavbarRoute />}>
          <Route path="/" element={<Home />}></Route>
        </Route>

        <Route path="/movies" element={<NavbarRoute />}>
          <Route path="/movies" element={<Movies />}></Route>
        </Route>

        <Route path="/tv-series" element={<NavbarRoute />}>
          <Route path="/tv-series" element={<TvSeries />}></Route>
        </Route>

        <Route path="/bookmarked" element={<NavbarRoute />}>
          <Route path="/bookmarked" element={<Bookmarked />}></Route>
        </Route>

        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
