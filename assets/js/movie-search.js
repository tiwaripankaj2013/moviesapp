import { movieCard } from './movie-card.js';
import { utility } from './utility.js';

// get movies from local storage 
var localMovies = JSON.parse(localStorage.getItem('localUniqueMovies'));
 //   get genres name from local storage
var localGenresData = JSON.parse(localStorage.getItem('localGenres'));


//create error msg div 
let notFound= `<div class="not__found">
                <p class="text-center"><i class="fa fa-search text-gray fa-3x"></i></p>
                    <p class="text-center">Your search  Not found !<p>
                </div>`;
// populate movie card template
    let movieData = (movie, id, idName) => {
        movieCard(
            `${utility.posterPath()}${movie.backdrop_path}`,
            movie.original_title,
            movie.title,
            utility.createGenres(movie.genre_ids, localGenresData),
            utility.starReview(utility.rating(movie.vote_average )),
            id,
            idName
        )
    }

// before search and filter show default movies list
    localMovies.slice(0, 12).forEach((localMovie) => {
        movieData(localMovie, localMovie.id, 'searcMovieResult');
    });

    document.querySelector('.searchMovie').addEventListener('keyup', getFilteredMovie);
    document.querySelector('.filterMovie').addEventListener('input', getFilteredMovie);

    // filter movies according to title, genre and movie rating

     function getFilteredMovie (e) {
        /* serach movies by name and genre */
        if (e && e.type == 'keyup') {
           let inputvalues = this.value.toLowerCase();

            if (inputvalues != '') {
                
                var searchMovies = localMovies.filter((singlemovie) => {
                    let localTitle = singlemovie.title.toLowerCase().includes(inputvalues);
                    let localGenres = utility.createGenres(singlemovie.genre_ids,localGenresData).includes(inputvalues);

                    //console.log(inputvalues)
                    return(localTitle || localGenres);
                });
                // remove previos movie card 
                document.querySelector('#searcMovieResult').innerHTML = '';
                
                printMovieCard();
                
                if (searchMovies.length == 0) {
                    document.querySelector('#searcMovieResult').innerHTML = notFound;
                }
            }
            else{
                document.querySelector('#searcMovieResult').innerHTML = '';
                localMovies.slice(0, 12).forEach((localMovie) => {
                    movieData(localMovie, localMovie.id, 'searcMovieResult');
                });
            }
            
        }
           
        /* filter value by rating */
        else if (e && e.type == 'input') {
            let filterValue = this.value;
            /* show input rating on webpage*/
            document.querySelector('.filterValue').innerHTML=filterValue;

            //   utility.rating function convert rating 10 to 5 rating floor value
            var searchMovies = localMovies.filter((singleMovie) => {
                if (filterValue <= utility.rating(singleMovie.vote_average)) 
                                     return singleMovie;
            });
            document.querySelector('#searcMovieResult').innerHTML = '';
            printMovieCard();
            if (searchMovies.length == 0) {
                document.querySelector('#searcMovieResult').innerHTML = notFound;
            }
        }
       
        function printMovieCard(){
            searchMovies.forEach((searchMovie) => {
                movieData(searchMovie, searchMovie.id, 'searcMovieResult');
          })
      };
     
    //   search and filtermovies after like
    utility.favouriteMovies();
      // show filter and seacrch  movies modal popup
      utility.modalPopupShow();
    }

// show similar movies modal popup
    utility.modalPopupShow();
    utility.favouriteMovies();