import { movieData } from "@/interfaces/moviesData";

export async function fetchMovieData(): Promise<movieData[]> {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=48bd6b3e003c20e5afdd558c4d47fdb6"
    );

    if (!response.ok) throw new Error("An error ocurred fetching the data!");

    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
    return [];
  }
}
