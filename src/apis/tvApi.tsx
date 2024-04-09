export async function fetchTVSeries(filterItems: string, page: number) {
  const baseUrl = "https://api.themoviedb.org/3/discover/tv";
  const apiKey = "86295645360abb8d1078666e62bfdf66";
  const url = `${baseUrl}?api_key=${apiKey}&language=en-US&page=${page}&sort_by=popularity.desc&${filterItems}`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}
