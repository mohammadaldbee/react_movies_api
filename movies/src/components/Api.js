import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import SingleMoviePage from './SingleMoviePage';

function Api() {
  const [Movie,setMovie]=useState([]);
  const [content, setContent] = useState([]);



    
  

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/2/recommendations?api_key=ac57188f35fb809c3ec1403202a7f29f&language=en-US&page=1%25')
      .then((response) => {
        setContent(response.data.results);
        console.log(response);

      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="all">
<div className="container text-center">
  <div className="row">

  {content.map((movie)=>{
return(


    <div className="col-3 mt-5">
    <div className="card">
      <img  id="movie_img" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        Rating : ( {movie.vote_average.toFixed(1)} )
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Movie Original Language : ( {movie.original_language} )</li>
        <li className="list-group-item">Release Date : ( {movie.release_date})</li>

      </ul>
      <div className="card-body">
    
                 <Link  to={'movie/' + movie.id}><button  className="btn btn-dark" >More Detales</button></Link>

      
      </div>
    </div>


    </div>
 )})}
  </div>
</div>



</div>
  

    

    


   
  );
}

export default Api;
