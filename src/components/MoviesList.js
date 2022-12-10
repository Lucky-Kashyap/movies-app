import React from "react";

const MoviesList = (props) =>{

    return (
        <>
            {
                props.movies.map((movie)=><div className="styles-movie" key={movie.id}>
                    <img src={movie.Poster} alt="Not Found"/>
                    <div className="overlay d-flex align-items-center justify-content-center"></div>
                </div>)
            }
        </>
    )
}

export default MoviesList;