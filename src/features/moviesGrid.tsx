import {useEffect, useState} from "react";
import {setMovieData} from "@/services/fetchMovieService";
import {movieData} from "@/interfaces/moviesData";

function MoviesGrid(){
    const [data, setData] = useState<movieData[]>([]);

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

    return(
        <>
            <h1 className={"text-3xl ml-5 font-bold text-white"}>New Movies at Caribbean Cinemas</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-4">
                {data.map((movie) => (
                    <div key={movie.id} className="flex flex-col items-center text-white">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                            className="h-72 w-48 object-cover rounded-md shadow-lg"
                        />
                        <h1 className="mt-2 text-lg font-semibold text-center">{movie.title}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MoviesGrid