import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints from "../Services/movieServices";
import Movieitem from "./Movieitem";

const MovieRow = ({title,url}) => {

  const [movie,setmovie] = useState([]);
  useEffect(()=>{
    axios.get(endpoints.trending).then((response)=> {
        console.log(response);
        const movies = response.data.results;
        setmovie(movies);
    })
  },[])



  return(
    <>
    <h2 className="font-nsans-bold md:text-xl  p-4 capitalize">{title}</h2>
     <div id = {`slider`}
     className="px-5 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">

        {movie.map((movie) => {
            return(
               <Movieitem key = {movie.id} movie = {movie}/>
            );
        })}

     </div>
    </>
  );
}

export default MovieRow;