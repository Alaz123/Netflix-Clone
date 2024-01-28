const apiKey = process.env.REACT_APP_API_KEY;
// console.log(apiKey);

const requests = {
	fetchTrending: `/trending/all/week?apiKey=${apiKey}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?apiKey=${apiKey}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?apiKey=${apiKey}&language=en-US`,
	fetchActionMovies: `/discover/movie?apiKey=${apiKey}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?apiKey=${apiKey}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?apiKey=${apiKey}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?apiKey=${apiKey}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?apiKey=${apiKey}&with_genres=99`,
	fetchTvShow: `tv/popular?apiKey=${apiKey}&language=en-US&page=1`,
};

export default requests;

// https://api.themoviedb.org/3/movie/top_rated?apiKey=1de519d72c4139a2bd4d0f12828d69b6&language=en-US
