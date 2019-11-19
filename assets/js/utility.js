import { modalPopup } from './modal-popup-layout.js';
import { movieApi } from './movie-api.js';
var utility = {
    dataMap: (data) => {
        let datas = '';
        data.map(dataItem => datas += dataItem.name + ', ');
        return datas;
    },
    getIdToURL: (parameterName) => {
        let result = null,
            tmp = [];
        window.location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    },
    posterPath: () => { return `https://image.tmdb.org/t/p/w500/` },

    starReview: (rateing) => {
        let rate = ''
        for (let i = 1; i <= 5; i++) {
            rate = `${rate} <i class= "fa ${rateing >= i ? 'fa-star' : 'fa-star-o'}"></i>`;
        }
        return rate;
    },
    directorName: (moviiDetailData) => {
        let director = moviiDetailData.credits.crew.filter(movieDirector => movieDirector.job === 'Director')[0];
        return director.name;
    },
    rating: (ratingValue) => {
        return Math.floor(ratingValue / 2);
    },
    uniqueMovies: (movies) => {
        var resultIds = [];
        var resultData = [];
        for (let movie of movies) {
            if (resultIds.indexOf(movie.id) == -1) {
                resultIds.push(movie.id);
                resultData.push(movie);
            }
        }
        return resultData;
    },
    createGenres: (genresid, generesData) => {
        const currentGenres = generesData.genres.filter(genre => genresid.includes(genre.id))
        let genereName = '';
        currentGenres.forEach(item => genereName += item.name + ', ');
        genereName = genereName.slice(0, -2);
        return genereName.toLocaleLowerCase();
    },
   
    modalPopupShow : () => {
        let modalImgClassget = document.querySelectorAll('.movie__figure');
        let showModal = (e) => {
            let moviId = e.target.getAttribute('data-id');
            //    console.log(moviId);
            movieApi.movieDetail(moviId).then((res, error) => {
                let movieName = res.original_title;
                let movieImage = `${utility.posterPath()}${res.poster_path}`;
                let movieImgTitle = res.title;
                let modalMovieDesc = res.overview;
                let modalMovieGenres = utility.dataMap(res.genres);
                let modalMovieCast = utility.dataMap(res.credits.cast.slice(0, 10));
                let modalMovieDirector = utility.directorName(res);
                let modalRating = utility.starReview(utility.rating(res.vote_average));
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
  
}

export { utility }