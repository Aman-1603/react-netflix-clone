const key = 'f3f2114d2519c2cb2100bcc4f635cf8a'

const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
  trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
  comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};

export default endpoints;