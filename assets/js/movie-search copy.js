import { movieApi } from './movie-api.js';
import { movieCard } from './movie-card.js';
import { utility } from './utility.js';

let notFound= `<div class="not__found">
                <p class="text-center"><i class="fa fa-search text-gray fa-3x"></i></p>
                    <p class="text-center">Your search  Not found !<p>
                </div>`;

let allMovie = [];
allMovie.push(
    movieApi.generes(),
    movieApi.latestMovie(),
    movieApi.trandingMovie(),
    movieApi.popularMovie(),
);

Promise.all(allMovie).then(data => {
    let generesData = data.shift();
    let latestMovieData = data.shift().results;
    let trandingMovieData = data.shift().results;
    let popularMovieData = data.shift().results;

    let allMovies = [...latestMovieData, ...trandingMovieData, ...popularMovieData];

    let movieData = (movie, id, idName) => {
        movieCard(
            `${utility.posterPath()}${movie.backdrop_path}`,
            movie.original_title,
            movie.title,
            utility.createGenres(movie.genre_ids, generesData),
            utility.starReview(utility.rating(movie.vote_average )),
            id,
            idName
        )
    }

    // store movies in local storage
    localStorage.setItem('allMovies', JSON.stringify(allMovies));
    const localdata = JSON.parse(localStorage.getItem('allMovies'));
    // store genres name in local storage 

    localStorage.setItem('genres', JSON.stringify(generesData));
    var localGenresData = JSON.parse(localStorage.getItem('genres'));

    /* utility.uniqueMovies method to find unique movies list  */

    // before search and filter show default movies list
    utility.uniqueMovies(localdata).slice(0, 12).forEach((localMovie) => {
        movieData(localMovie, localMovie.id, 'searcMovieResult');
    });

    document.querySelector('.searchMovie').addEventListener('keyup', getValue);
    document.querySelector('.filterMovie').addEventListener('input', getValue);

     function getValue (e) {
        /* serach movies by name */
        if (e && e.type == 'keyup') {
           let inputvalues = this.value.toLowerCase();

            if (inputvalues != '') {
                
                var localMovies = localdata.filter((singlemovie) => {
                    let localTitle = singlemovie.title.toLowerCase().includes(inputvalues);
                    let localGenres = utility.createGenres(singlemovie.genre_ids,localGenresData).includes(inputvalues);
                    
                    //console.log(utility.createGenres(singlemovie.genre_ids,localGenresData));
                    //console.log(inputvalues)
                    return(localTitle || localGenres);
                });
                // remove previos movie card 
                document.querySelector('#searcMovieResult').innerHTML = '';
                
                printMovieCard();
                
                if (localMovies.length == 0) {
                    document.querySelector('#searcMovieResult').innerHTML = notFound;
                }
            }
            
        }
            /* serach movies by name  end */

        /* filter value by range */
        else if (e && e.type == 'input') {
            let filterValue = this.value;
            /* show input rating on webpage*/
            document.querySelector('.filterValue').innerHTML=filterValue;

            //   utility.rating function convert rating 10 to 5 rating floor value
            var localMovies = utility.uniqueMovies(localdata).filter((singleMovie) => {
              
                if (utility.rating(filterValue) <= utility.rating(singleMovie.vote_average)) {
                    return singleMovie;
                }
                return utility.rating(singleMovie.vote_average).toString().includes(utility.rating(filterValue).toString());
            });
            document.querySelector('#searcMovieResult').innerHTML = '';
            printMovieCard();
            if (localMovies.length == 0) {
                document.querySelector('#searcMovieResult').innerHTML = notFound;
            }
        }

        function printMovieCard(){
            utility.uniqueMovies(localMovies).forEach((localMovie) => {
                movieData(localMovie, localMovie.id, 'searcMovieResult');
          })
      };

      // show filter and seacrch  movies modal popup
      utility.modalPopupShow();
    }
    
// show similar movies modal popup
    utility.modalPopupShow();

}).catch(error => console.log(error));
// .catch(error => document.querySelector('body').innerHTML=error);