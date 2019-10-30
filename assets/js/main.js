
import { getGenres, getLatestMovies, getTrendingMovies, getPopularMovies } from './movies-api.js';
import { createRow } from './dom.js';
// create iife to call latest,trending,popular movies function;
(()=>{
    //create moviesData array store all server data 
    let moviesData = [];
    let genre;
    async function  getData(){
        genre = await getGenres();
        moviesData.push = (await getLatestMovies());
        moviesData.push = (await getTrendingMovies());
        moviesData.push = (await getPopularMovies());
    }
    
    async function hero(){
        await getData();
        moviesData.forEach((ele,idx)=>{
            createRow(ele.results,idx,genre.genres);
        });
    }
    hero();
console.log('welcome to js');
})();