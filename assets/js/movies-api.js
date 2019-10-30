const API_KEY = 'c3af9aa883165bf5f7b94ca5a97ada14';

// movies genres
async function getGenres() 
{
  let genreData = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
      genreData = await genreData.json()
  return genreData;
}

// latest movies data
async function getLatestMovies() 
{
  let latestMoviesData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`);
      latestMoviesData = await latestMoviesData.json()
  return latestMoviesData;
}

 
  // trending movies data
  async function getTrendingMovies() 
  {
    let trendingMoviesData = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`);
        trendingMoviesData = await trendingMoviesData.json()
    return trendingMoviesData;
  }
  
 
// most watched movies 
async function getPopularMovies() 
{
  let popularMoviesData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
      popularMoviesData = await popularMoviesData.json()
  return popularMoviesData;
}

export {getGenres,getLatestMovies,getTrendingMovies,getPopularMovies};

