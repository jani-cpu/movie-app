import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/movie/:imdbID' element={<MovieDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
