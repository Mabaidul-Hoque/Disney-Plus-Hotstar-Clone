export async function fetchMovies(filterItems: string, page: number) {
  const baseUrl = "https://api.themoviedb.org/3/discover/movie";
  const apiKey = "86295645360abb8d1078666e62bfdf66";
  const url = `${baseUrl}?api_key=${apiKey}&language=en-US&page=${page}&sort_by=popularity.desc&${filterItems}`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function fetchMoviesByGenre(genreId: string, page: number) {
  const baseUrl = "https://api.themoviedb.org/3/discover/movie";
  const apiKey = "86295645360abb8d1078666e62bfdf66";
  const url = `${baseUrl}?api_key=${apiKey}&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function fetchMovieByMovieID(movieId: string) {
  const baseUrl = "https://api.themoviedb.org/3/movie";
  const apiKey = "86295645360abb8d1078666e62bfdf66";
  const url = `${baseUrl}/${movieId}?api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}
