import { movieApi } from './movie-api.js';
import { movieCard } from './movie-card.js';
import { modalPopup } from './modal-popup-layout.js';
import { utility } from './utility.js';


const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;


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

    let createGenres = (genresid) => {
        const currentGenres = generesData.genres.filter(genre => genresid.includes(genre.id))
        let genereName = '';
        currentGenres.forEach(item => genereName += item.name + ', ');
        genereName = genereName.slice(0, -2);
        return genereName.toLocaleLowerCase();
    }

// store movies in local storage
    localStorage.setItem('allMovies', JSON.stringify(allMovies));
    const localdata = JSON.parse(localStorage.getItem('allMovies'));


    // store genres name in local storage 

    localStorage.setItem('genres', JSON.stringify(generesData));
    const localGenres = JSON.parse(localStorage.getItem('genres'));


    /* utility.uniqueMovies method to find unique movies list  */

    // before search and filter show default movies list
    utility.uniqueMovies(localdata).slice(0, 12).forEach((localMovie) => {
        movieCard(
            `${POSTER_PATH}${localMovie.backdrop_path}`,
            localMovie.original_title,
            localMovie.title,
            createGenres(localMovie.genre_ids),
            utility.starReview(Math.round(localMovie.vote_average / 2)),
            localMovie.id,
            'searcMovieResult'
        )
    });

    document.querySelector('.searchMovie').addEventListener('keyup', getValue);
    document.querySelector('.filterMovie').addEventListener('input', getValue);


    function getValue(e) {

        /* serach movies by name */
        if (e && e.type == 'keyup') {
           let inputvalues = this.value.toLowerCase();

            if (inputvalues != '') {
                
                var localMovies = localdata.filter((singlemovie) => {
                    let localTitle = singlemovie.title.toLowerCase().includes(inputvalues);
                    let localGenres = createGenres(singlemovie.genre_ids).includes(inputvalues);

                    return(localTitle || localGenres);
                });
                document.querySelector('#searcMovieResult').innerHTML = '';
                
                // var localMovies = localdata.filter((singlemovie) => {
                //     return createGenres(singlemovie.genre_ids).includes(inputvalues)
                // });
               
              
                printMovieCard();
                
                if (localMovies.length == 0) {
                    document.querySelector('#searcMovieResult').innerHTML = `<p class="not-found">Movies Not found</p>`;
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
                document.querySelector('#searcMovieResult').innerHTML = `<p class="not-found">Movies Not found</p>`;
            }
        }

        // console.log('filter values');


        function printMovieCard(){
            utility.uniqueMovies(localMovies).forEach((localMovie) => {
              movieCard(
                `${POSTER_PATH}${localMovie.backdrop_path}`,
                  localMovie.original_title,
                  localMovie.title,
                  createGenres(localMovie.genre_ids),
                  utility.starReview(Math.round(localMovie.vote_average/2)),
                  localMovie.id,
                  'searcMovieResult'
              )
          })
      };
    }
    


    // modalpopup Data  

    // get movieId
    let modalPopupShow = (e) => {
        let modalImgClassget = document.querySelectorAll('.movie__figure');
        let showModal = (e) => {
            let moviId = e.target.getAttribute('data-id');
            //    console.log(moviId);
            movieApi.movieDetail(moviId).then((res, error) => {
                let movieName = res.original_title;
                let movieImage = `${POSTER_PATH}${res.poster_path}`;
                let movieImgTitle = res.title;
                let modalMovieDesc = res.overview;
                let modalMovieGenres = utility.dataMap(res.genres);
                let modalMovieCast = utility.dataMap(res.credits.cast.slice(0, 10));
                let modalMovieDirector = utility.directorName(res);
                let modalRating = utility.starReview(Math.round(res.vote_average / 2));
                modalPopup(movieName, movieImage, movieImgTitle, modalMovieDesc,
                    modalMovieGenres, modalMovieCast, modalMovieDirector, modalRating, 'body');
                // console.log(res);
            });

            return moviId;

        }
        for (let i = 0; i < modalImgClassget.length; i++) {
            modalImgClassget[i].addEventListener('click', showModal, false);
        }

    }
    modalPopupShow();

}).catch(error => console.log(error));
// .catch(error => document.querySelector('body').innerHTML=error);