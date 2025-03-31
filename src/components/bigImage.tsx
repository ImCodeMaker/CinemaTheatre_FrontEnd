"use client";
import React, { useEffect, useState } from "react";
import { setMovieData } from "@/services/fetchMovieService";
import { movieData } from "@/interfaces/moviesData";

function BigImage() {
  const [data, setData] = useState<movieData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const setMovies = async () => {
      try {
        const serverResponse: movieData[] = await setMovieData();
        setData(serverResponse);
      } catch (error) {
        console.error("Error fetching movie data", error);
      }
    };
    setMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        return nextIndex === 10 ? 0 : nextIndex;
      });
    }, 10000); 

    return () => clearInterval(interval); 

  }, [data]); 

  return (
    <div className="relative flex flex-col items-center text-center space-y-2 drop-shadow-2xl">
      {data[currentIndex]?.title && (
        <div className="flex justify-center mt-4 relative">
          <img
            src={`https://image.tmdb.org/t/p/original${data[currentIndex].backdrop_path}`}
            className="w-[850px] h-[500px] object-cover rounded-2xl" 
            alt="Movie poster"
          />
          <h1 className="absolute bottom-4 left-4 text-5xl font-bold text-white bg-black bg-opacity-50 p-2 rounded-xl"> {/* Changed to rounded-xl */}
            {data[currentIndex]?.title}
          </h1>
        </div>
      )}
    </div>
  );
}

export default BigImage;
