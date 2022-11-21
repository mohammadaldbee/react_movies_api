import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Slider() {
  const [Movieid, setid] = useState("");
  const [content, setContent] = useState([]);

  const getid = (e) => {
    setid(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/2/recommendations?api_key=ac57188f35fb809c3ec1403202a7f29f&language=en-US&page=1%27"
      )
      .then((response) => {
        setContent(response.data.results);
        console.log(response);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://wallpapercave.com/wp/wp2861576.jpg"
              className="d-block w-100" style={{height: '660px'}}
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{color:'black', backgroundColor:"white"}}>Dark Knight</h5>
              <p  style={{color:'black', backgroundColor:"white"}}>
              July 9, 2008
              </p>
            </div>
          </div>


          {content.map((movie) => {
            return (
              <div class="carousel-item">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
                  }
                  className="d-block w-100"
                  style={{height: '660px' }}
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 style={{color:'black', backgroundColor:"white"}}>{movie.title}</h5>
                  <p style={{color:'black', backgroundColor:"white"}}>
                  {movie.release_date}
                  </p>
                </div>
              </div>
            );
          })}



          
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
