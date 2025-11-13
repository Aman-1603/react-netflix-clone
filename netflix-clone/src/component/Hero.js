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

    const truncate = (str, length) =>{
      if(!str){
        return ""
      }

      return str.length > length ? str.slice(0,length) + '....' : str
    }
    const{title, backdrop_path,release_date, overview} = movie;
  
    return (
      <div className="w-full h-[550px] lg:h-[850px]">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"/>
            <img className="w-full h-full object-cover object-top"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
            />

            <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
              <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
              <div className="mt-8 mb-4">
                <button className="capitalize border bg-gray-300 text-black px-5 py-2">play</button>
                <button className="capitalize border border-gray-300 py-2 px-5 ml-4">watch later</button>
              </div>
              <p className="text-gray-400 text-sm">{release_date}</p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300">{truncate(overview,165)}</p>
            </div>
            
          
        </div>
      </div>
    );
}

export default Hero;
