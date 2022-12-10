import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviesList from "./components/MoviesList";
import './App.css';
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

// const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

 
const getMovieRequest =async ()=>{
  const url = `http://www.omdbapi.com/?s=${search}&apikey=571f939b`;

  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.Search){
    setMovies(responseJson.Search);
  }

  // console.log(responseJson);
  // setMovies(responseJson.Search);
}

useEffect(()=>{
  getMovieRequest();
},[search]);
 

 

  return (
    <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mt-4 mb-4">
      <MovieListHeading heading='Movies'/> 
      <SearchBox search={search} setSearch={setSearch}/>
    </div>
     <div className="row">
     <MoviesList movies = {movies}/>
     </div>
     
    </div>
  );
}


export default App;
