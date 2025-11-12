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
  
    return (
      <div className="text-5xl">Hero</div>
    );
}

export default Hero;
