export async function fetchMovies(filterItems: string) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=86295645360abb8d1078666e62bfdf66&language=en-US&page=1&${filterItems}`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}
