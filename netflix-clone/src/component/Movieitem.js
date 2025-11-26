import { createImageUrl } from "../Services/movieServices";
import {FaHeart,FaRegHeart} from "react-icons/fa"

const Movieitem = ({ movie }) => {
  const { title, backdrop_path, poster_path } = movie;

  return (
    <div className="relative z-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">

      <img
        className="w-full h-40 sm:h-52 md:h-60 lg:h-72 object-cover object-top z-10"
        src={createImageUrl(backdrop_path ?? poster_path, 'w500')}
        alt={title}
      />

      <div
        className="
          absolute top-0 left-0 w-full h-full
          bg-black/80 text-white
          opacity-0 hover:opacity-100
          duration-300 z-20
          flex items-end p-3
        "
      >
        <p className="text-sm font-semibold">{title}</p>
      </div>

    </div>
  );
};

export default Movieitem;
