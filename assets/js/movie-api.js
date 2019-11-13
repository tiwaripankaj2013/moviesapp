const API_KEY = 'c3af9aa883165bf5f7b94ca5a97ada14';
let baseurl=`https://api.themoviedb.org/3/`;
let movieId;
let ACTOR_ID;
let search_query;
var URL_GENREE = `${baseurl}genre/movie/list?api_key=${API_KEY}&language=en-US`;
var URL_LATESTMOVIE = `${baseurl}movie/now_playing?api_key=${API_KEY}&language=en-US`;
var URL_TRANDINGMOVIE = `${baseurl}trending/movie/week?api_key=${API_KEY}&language=en-US`;
var URL_POPULARMOVIE = `${baseurl}movie/popular?api_key=${API_KEY}&language=en-US`;


export var movieApi = {
    generes: function generes(){
        return fetch(URL_GENREE).then(res => res.json())
    },
    latestMovie:  function latestMovie(){
        
        return fetch(URL_LATESTMOVIE).then(res => res.json())
    },
    trandingMovie:  function trandingMovie(){
        
        return fetch(URL_TRANDINGMOVIE).then(res => res.json())
    },
    popularMovie: function popularMovie(){
       
        return fetch(URL_POPULARMOVIE).then(res => res.json())
    },

    movieDetail: function movieDetail(movieId){
        var URL_MOVIEDETAIL = `${baseurl}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits `;
        return fetch(URL_MOVIEDETAIL).then(res => res.json()).catch(error => error);
    },
    similarMovie:function similarMovie(movieId){
        var URL_SIMILARMOVIE = `${baseurl}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
        return fetch(URL_SIMILARMOVIE).then(res => res.json())
    },
    actorDetail:function actorDetail(ACTOR_ID){
    var URL_ACTORDETAIL = `${baseurl}person/${ACTOR_ID}?api_key=${API_KEY}&language=en-US`;
        return fetch(URL_ACTORDETAIL).then(res => res.json()).catch(error => error);
    },
    actorFimography:function actorFimography(ACTOR_ID){
        var URL_ACTORFIMOGRAPHY = `${baseurl}person/${ACTOR_ID}/movie_credits?api_key=${API_KEY}&language=en-US`;   
        return fetch(URL_ACTORFIMOGRAPHY).then(res => res.json())
    },
    searchMovie:function searchMovie(search_query){ 
    var URL_SEARCHMOVIE = `${baseurl}search/multi?api_key=${API_KEY}&language=en-US&query=${search_query}&page=1&include_adult=false`;  
            
        return fetch(URL_SEARCHMOVIE).then(res => res.json())
    },
}

