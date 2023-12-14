const API_KEY = "22ea822c5a317e5c458e5e91343ab6c2";

const requests = {
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv/?api_key=${API_KEY}&with_network=12`,

  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=13`,

  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchAiringToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=13`,
};
export default requests;
