const API_KEY = 'c3af9aa883165bf5f7b94ca5a97ada14';
let baseurl=`https://api.themoviedb.org/3/`;
const URL_GENREE = `${baseurl}genre/movie/list?api_key=${API_KEY}&language=en-US`;
const URL_LATESTMOVIE = `${baseurl}movie/now_playing?api_key=${API_KEY}&language=en-US`;
const URL_TRANDINGMOVIE = `${baseurl}trending/movie/week?api_key=${API_KEY}&language=en-US`;
const URL_POPULARMOVIE = `${baseurl}movie/popular?api_key=${API_KEY}&language=en-US`;


function generes(){
    return fetch(URL_GENREE).then(res => res.json())
}
function latestMovie(){
    return fetch(URL_LATESTMOVIE).then(res => res.json())
}
function trandingMovie(){
    return fetch(URL_TRANDINGMOVIE).then(res => res.json())
}
function popularMovie(){
    return fetch(URL_POPULARMOVIE).then(res => res.json())
}
function movieDetail(movieId){
    const URL_MOVIEDETAIL = `${baseurl}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits `;
    return fetch(URL_MOVIEDETAIL).then(res => res.json())
}
function similarMovie(movieId){
    const URL_SIMILARMOVIE = `${baseurl}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    return fetch(URL_SIMILARMOVIE).then(res => res.json())
}
function actorDetail(ACTOR_ID){
    const URL_ACTORDETAIL = `${baseurl}person/${ACTOR_ID}?api_key=${API_KEY}&language=en-US`;
    return fetch(URL_ACTORDETAIL).then(res => res.json())
}
function actorFimography(ACTOR_ID){
    const URL_ACTORFIMOGRAPHY = `${baseurl}person/${ACTOR_ID}/movie_credits?api_key=${API_KEY}&language=en-US`;

    return fetch(URL_ACTORFIMOGRAPHY).then(res => res.json())
}
function searchMovie(search_query){ 
const URL_SEARCHMOVIE = `${baseurl}search/multi?api_key=${API_KEY}&language=en-US&query=${search_query}&page=1&include_adult=false`;  
    return fetch(URL_SEARCHMOVIE).then(res => res.json())
}

export {generes,latestMovie,trandingMovie,popularMovie,movieDetail,similarMovie,actorDetail,actorFimography,searchMovie};