"use client";
import React, { useEffect, useState } from "react";
import { setMovieData } from "@/services/fetchMovieService";
import { movieData } from "@/interfaces/moviesData";
import { ChevronLeft, ChevronRight } from "lucide-react";

function BigImage() {
  const [data, setData] = useState<movieData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(10);

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
  console.log(currentIndex)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex > 18 ? 11 : nextIndex; // Reset to 11 when exceeding 18
      });
    }, 10000);
  
    return () => clearInterval(interval);
  }, [data]);
  
  const AdvanceImage = (action: string) => {
    setCurrentIndex((prevIndex) => {
      if (action === "forward") {
        const nextIndex = prevIndex + 1;
        return nextIndex > 18 ? 11 : nextIndex; 
      } 
      if (action === "backwards") {
        return prevIndex === 11 ? 18 : prevIndex - 1; 
      }
      return prevIndex;
    });
  };
  

  return (
    <>
      <div className="relative flex flex-col items-center text-center space-y-2 drop-shadow-2xl">
        {data[currentIndex]?.title && (
          <div className="flex justify-center mt-4 relative">
            <img
              src={`https://image.tmdb.org/t/p/original${data[currentIndex].backdrop_path}`}
              className="w-[90dvw] h-[500px] object-cover rounded-sm drop-shadow-2xl"
              alt="Movie poster"

            />
            <div className="absolute bottom-3 flex justify-center items-center left-6 h-10 w-32 bg-red-600 rounded-2xl hover:bg-red-500">
              <span className="text-center font-bold text-lg text-white">Get tickets</span>
            </div>
          </div>
        )}
        <div className="relative flex justify-around items-center w-full px-10">
          <button onClick={() => AdvanceImage("backwards")}>
            <ChevronLeft size={45} color="white" className="cursor-pointer" />
          </button>
          <button onClick={() => AdvanceImage("forward")}>
            <ChevronRight size={45} color="white" className="cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
}

export default BigImage;
