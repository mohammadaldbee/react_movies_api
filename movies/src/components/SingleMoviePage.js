import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";


function SingleMoviePage() {

    const { id } = useParams();
    const [movie, setMovie] =useState({
        movie: {
            id: '',
            title: '',
            image: '',
            overview: '',
            vote_average: '',
            release_date: '',
            media_type: '',
            poster_path:''
        }

    });
    
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=ac57188f35fb809c3ec1403202a7f29f&language=en-US')
            .then(response => {
                setMovie({
                    movie: response.data
                })
            })
            .catch(error => console.log(error))
    }, []);

 


   
       
      return (
        <div className="all p-5">
        <div className="container text-center">
            <div className='row'>
 <div className="col-7 ">
<div className="card mb-3">
  <img  src={"https://image.tmdb.org/t/p/original/" + movie.movie.backdrop_path} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{movie.movie.title}</h5>
    <p className="card-text">{movie.movie.overview}</p>
    <p className="card-text"><small className="text-muted">{movie.adult ?<h6 className="card-text">Suitable for children</h6>:<h6 className="card-text">[ PG-18 ]</h6>} </small></p>

  </div>
</div> 


        </div>  

        <div className="col-4 ">


        <div className="card" >
  <div className="card-body">
    <h5 className="card-title">More Detales</h5>
    <h6 className="card-subtitle mb-2 text-muted">Release Date : ( {movie.movie.release_date})</h6>
    <h6 className="card-subtitle mb-2 text-muted">Movie Original Language : ( {movie.movie.original_language} )</h6>

    <a href={'https://www.google.com/search?q='+movie.movie.title} className="card-link" target='_blanck'>Find More</a>
    <a href={'https://www.google.com/search?q='+movie.movie.title+'+trailer'} className="card-link" target='_blanck'>Trailer</a>

    </div>

    <img style={{height:"455px"}}  src={"https://image.tmdb.org/t/p/original/" + movie.movie.poster_path} class="card-img-bottom" alt="..." ></img>
  </div>
</div>















        </div>

          </div>
          </div>
      )


}

export default SingleMoviePage