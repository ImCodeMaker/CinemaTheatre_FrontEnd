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

      <h1 className="text-3xl font-extrabold text-black absolute">
        Movies at Exibition
      </h1>

      <div className="relative flex justify-center items-center space-x-6 mt-12">
        {data.slice(0, 5).map((movie, index) => {
          const isCenter = index === currentIndex;
          const zIndex = isCenter ? 10 : 1;
          const scale = isCenter ? 0.9 : 0.8;
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
                className="w-[280px] h-[350px] object-cover rounded-2xl mt-8"
                alt={movie.title || "Movie poster"}
              />
              <h3 className="text-center font-bold mt-2 text-2xl text-black">
                {movie.title}
              </h3>
              <div className="flex justify-center">
                <button>
                  <div className="text-center mt-2 text-x drop-shadow-2xl bg-red-600 rounded-3xl h-14 w-36 flex justify-center items-center mx-auto">
                    <span className="font-bold text-xl text-white cursor-pointer">
                      Get Tickets
                    </span>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NowFeaturing;
