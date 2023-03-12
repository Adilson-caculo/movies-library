import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import { MovieType } from "../types/movieType";
//links urls
const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

//css
import './MovieCreate.css'
const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState<MovieType[]>([]);
    const query = searchParams.get("q");


    const getSearchMovies = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);


    }
    useEffect(() => {
        const searchWithQueryUrl = `https://api.themoviedb.org/3/search/movie?api_key=9a1833488f453075c2f221a3249cd928&query=${query}&language=pt-BR`;
        getSearchMovies(searchWithQueryUrl);
    }, [query]);
    return (
        <div className="container">
            <h2 className="title">Resultados : <span className="query-text">{query}</span></h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Search