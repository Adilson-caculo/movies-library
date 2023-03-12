import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { Form } from "react-router-dom";
import {BsGraphUp,BsWallet2,BsHourglassSplit,BsFillFileEarmarkTextFill}from'react-icons/bs'


//css 
import'./Movie.css';
import MovieCard from "../components/MovieCard";
import { MovieType } from "../types/movieType";

const moviesURl= import.meta.env.VITE_API;
const apiKey= import.meta.env.VITE_API_KEY;

const Movie = () => {
    const {id} = useParams()
    const[movie,setMovie]= useState<MovieType[]>([]);

    const getMovie =async (url:any) =>{
        
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data)
    }

    const formatcurrency = (number:number)=>{
        return number.toLocaleString("en-Us",{
            style:"currency",
            currency:"USD",
        })
    }

    useEffect(()=>{
        const movieUrl= `${moviesURl} ${id} ?${apiKey}`;
        getMovie(movieUrl)
    },[])
  return (
    <div className="movie-page">
        {
            movie &&
            <>
            <MovieCard movie={movie} ShowLink={false} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>
                <BsWallet2 /> Orçamento:
                </h3>
                <p> {formatcurrency(movie.budget)}</p>
            </div>
            <div className="info">
                <h3>
                <BsGraphUp /> Receita:
                </h3>
                <p> {formatcurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                <BsHourglassSplit /> Duração:
                </h3>
                <p> {movie.runtime} minutos</p>
            </div>
            <div className="info descripton">
                <h3>
                <BsFillFileEarmarkTextFill /> Descrição
                </h3>
                <p> {movie.overview}</p>
            </div>
            </>
        }
    </div>
  )
}

export default Movie