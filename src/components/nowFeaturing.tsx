"use client";

import React, { useState, useEffect } from "react";
import { setMovieData } from "@/services/fetchMovieService";
import { movieData } from "@/interfaces/moviesData";

function NowFeaturing() {
  const [data, setData] = useState<movieData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(2); 

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
        return nextIndex === 5 ? 0 : nextIndex; 
      });
    }, 10000); 

    return () => clearInterval(interval); 
  }, [data]); 


  //Todo Add Movies data, learn how GPT did all those things and continue improving the main ui, somehow it looks odd XD
  return (
    <div className="relative my-6 px-4">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-xl transition-all duration-500"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data[currentIndex]?.backdrop_path})`,
        }}
      />

      <h1 className="text-"></h1>

      <div className="relative flex justify-center items-center space-x-6">
        {data.slice(0, 5).map((movie, index) => {
          const isCenter = index === currentIndex;
          const zIndex = isCenter ? 10 : 1;
          const scale = isCenter ? 1 : 0.8;
          const opacity = isCenter ? 1 : 0.6;

          return (
            <div
              key={movie.id}
              className="relative transition-all duration-300 ease-in-out"
              style={{
                zIndex,
                transform: `scale(${scale})`,
                opacity,
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="w-[280px] h-[350px] object-cover rounded-2xl"
                alt={movie.title || "Movie poster"}
              />
              <h3 className="text-center font-bold mt-2">{movie.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NowFeaturing;
