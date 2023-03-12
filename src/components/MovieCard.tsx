import React from 'react'
import { Link } from 'react-router-dom';
import {FaStar} from'react-icons/fa';
import { MovieType } from "../types/movieType";
const  imageUrl = import.meta.env.VITE_IMG;

type Props={
    movie:MovieType,
    ShowLink?:boolean
}
const MovieCard = ({movie,ShowLink= true}:Props) => {
  return (
   <div className="movie-card">
       <img src={imageUrl + movie.poster_path} alt ={movie.title} />
       <h2>{movie.title}</h2>
       <p>
           <FaStar /> {movie.vote_average}
       </p>

       {ShowLink &&  <Link to={`/movie/${movie.id}`} >Detalhes</Link>}
   </div>
  )
}

export default MovieCard