import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Api from './components/Api';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import SingleMoviePage from './components/SingleMoviePage';
import Slider from './components/Slider';

function App() {

  const Movieid='3';
  return (


    <div className="App">
     



    <BrowserRouter>
    <Nav />
      <Routes>
        <Route exact path='/' element={<Slider />} />
        <Route exact path='/all' element={<Api />} />
        <Route exact path="all/movie/:id" element={<SingleMoviePage  />} />
      </Routes>
    </BrowserRouter> 

    </div>
  );
}

export default App;
