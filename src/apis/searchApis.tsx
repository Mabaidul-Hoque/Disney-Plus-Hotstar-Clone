export async function fetchShowsBySearch(searchContent: string) {
  const baseUrl = "https://api.themoviedb.org/3/search/multi";
  const apiKey = "86295645360abb8d1078666e62bfdf66";
  const url = `${baseUrl}?api_key=${apiKey}&query=${searchContent}`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}
