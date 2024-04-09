export async function fetchMovieGenres() {
  const baseUrl = "https://api.themoviedb.org/3/genre/movie/list";
  const apiKey = "86295645360abb8d1078666e62bfdf66";
  const url = `${baseUrl}?api_key=${apiKey}&language=en-US`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}
export async function fetchTVGenres() {
  const baseUrl = "https://api.themoviedb.org/3/genre/tv/list";
  const apiKey = "86295645360abb8d1078666e62bfdf66";
  const url = `${baseUrl}?api_key=${apiKey}&language=en-US`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}
