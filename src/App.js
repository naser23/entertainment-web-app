import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MovieApiProvider } from "./context/MovieApiContext";
import { SearchResultsProvider } from "./context/SearchResultsContext";
import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./pages/SearchResults";
import NavbarRoute from "./components/NavbarRoute";
import ProfileRoute from "./components/ProfileRoute";
import Home from "./pages/Home";
import Bookmarked from "./pages/Bookmarked";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <MovieApiProvider>
      <SearchResultsProvider>
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
            <Route path="/results" element={<NavbarRoute />}>
              <Route path="/results" element={<SearchResults />}></Route>
            </Route>
            <Route path="/results" element={<SearchResults />}></Route>

            <Route path="/log-in" element={<LogIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/:media_type/:id" element={<MovieDetails />}></Route>
            <Route path="/verify-email" element={<Loading />}></Route>

            <Route path="/profile" element={<ProfileRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </Router>

        <ToastContainer />
      </SearchResultsProvider>
    </MovieApiProvider>
  );
}

export default App;
