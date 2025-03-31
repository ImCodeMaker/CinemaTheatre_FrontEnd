import { fetchMovieData } from "@/hooks/fetchMovies";

export async function setMovieData(){
    return await fetchMovieData()
}