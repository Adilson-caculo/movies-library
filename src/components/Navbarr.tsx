import "./navBar.css";
import { Link,useNavigate } from 'react-router-dom';
//import icons
import {BiCameraMovie,BiSearchAlt2} from'react-icons/bi'
import { useState } from "react";
import { MovieType } from "../types/movieType";
const Navbarr = () => {

    const [search,setSearch]=useState("");
    const navigate = useNavigate();

    const handleSubmit =(e:any)=>{
       e.preventDefault();
       if(!search)return

       navigate(`./search?q=${search}`);
       setSearch('');
    }
  return (
    <nav className="navbar">
    <h2> 
      <Link to="/" ><BiCameraMovie /> Movies Lib</Link>
    </h2>
   <form onSubmit={handleSubmit}>
       <input type="text" 
       placeholder="Busque um filme" 
        onChange={(e)=> setSearch(e.target.value)} 
        value={search}
        />
       <button type='submit'>  <BiSearchAlt2 /></button>
   </form>
  </nav>
  )
}

export default Navbarr