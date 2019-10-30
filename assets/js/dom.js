import {movieCard,rowMarkup} from './create-html.js';
const POSTER_PATH_PREFIX =`https://image.tmdb.org/t/p/w500/`;

export function createRow(rowData,idx,genre){
    rowMarkup(idx);
    rowData.forEach((ele,index) => {
        let movieGenreName = getGenre(ele.genre_ids,genre);
        if(index<=3){
            createMovieCard(ele,idx,movieGenreName)
        }
       
    });
}

function getGenre(movieGenreId, allGenere){
    let movieGenreName = [];
    movieGenreId.forEach((ele)=>{
        allGenere.forEach((all)=>{
            if(ele == all.id){
                movieGenreName.push(all.name)
            }
        })
    })
    return movieGenreName;
    // console.log(movieGenreName());
}

function  createMovieCard(singleMovie,idx,movieGenreName){
    let rating = calculateRating(singleMovie.popularity);
    let x =movieCard(singleMovie.title,rating,movieGenreName,`${POSTER_PATH_PREFIX}/${singleMovie.poster_path}`);
    console.log(idx)
    switch(idx){
        case 0:document.querySelector('.latest__list').insertAdjacentHTML('beforeend',x);
                break;
        case 1:document.querySelector('.trending__list').insertAdjacentHTML('beforeend',x);
                 break;
        case 2:document.querySelector('.mostwatched__list').insertAdjacentHTML('beforeend',x);
                break;
    }
    doc0ument.querySelectorAll('.fa-star')
    
}

function calculateRating(popularity){
    let rating = Math.ceil(popularity/100);
    return rating;
}

