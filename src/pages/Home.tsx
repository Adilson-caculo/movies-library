import { useState,useEffect } from "react"
import MovieCard from "../components/MovieCard";
import { MovieType } from "../types/movieType";
//style
import'./MovieCreate.css'

//api url's
const moviesURl= import.meta.env.VITE_API;
const apiKey= import.meta.env.VITE_API_KEY;
const Home = () => {
  const [topMovies,setTopMovies]=useState<MovieType[]>([]);

    useEffect(()=>{
        const topRatedUrl = `${moviesURl}top_rated?${apiKey}`;
       getTopratedMovies(topRatedUrl);
    },[])

    const getTopratedMovies = async (url:string)=>{



        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results)

        
    }

    
  return (
    <div className="container">
        <h2 className="title">Melhores Filmes</h2>
        <div className="movies-container">
        {topMovies.length === 0  && <p>Carregando...</p> }

        {topMovies.length > 0 &&  topMovies.map((movie) =>(
           <MovieCard key={movie.id} movie={movie} /> 
        ))}
        </div>
    </div>
  )
}

export default Home