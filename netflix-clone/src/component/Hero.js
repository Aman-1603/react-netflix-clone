import React, { useEffect, useState } from "react";
import endpoints from "../Services/movieServices";
import axios from "axios";

const Hero = () =>{
    const [movie, setmovie] = useState({});

    useEffect(() =>{
        axios.get(endpoints.popular).then((response) => {
            console.log(response.data);

            const movies = response.data.results;
            const randomMovies = movies[Math.floor(Math.random()*movies.length)];
            console.log(randomMovies);

            setmovie(randomMovies);
        });
    },[]);

    if(!movie){
      return(
        <>
        <p>Fething movie please wait....</p>
        </>
      );
    }

    const{title, backdrop_path,release_date, overview} = movie;
  
    return (
      <div className="w-full h-[550px] lg:h-[850px]">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black">
            <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
            />
            
          </div>
        </div>
      </div>
    );
}

export default Hero;
