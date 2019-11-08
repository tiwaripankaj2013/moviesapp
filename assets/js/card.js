// template Movie card lauyout in insert data 
function movieCard(movieImage, movieImgTitle, movieTitle, moviePopularity, movieGeneries, movieRating, movieId, moviCardId) {
    let moviecardTemplate = document.querySelector(".template");
    let tempItem = moviecardTemplate.content.querySelector("article");

    let node = document.importNode(tempItem, true);
    let Moviefigure = node.querySelector('.movie__figure img');
    Moviefigure.setAttribute("src", movieImage);
    Moviefigure.setAttribute("alt", movieImgTitle);
    Moviefigure.setAttribute("title", movieImgTitle);
    Moviefigure.setAttribute("data-id", movieId);

    let movieDesc = node.querySelector(".movie__desc h5");
    movieDesc.prepend(document.createTextNode(movieTitle));
    let movielike = node.querySelector(".movie__likes");
    movielike.setAttribute("href", moviePopularity);
    let movieGenries = node.querySelector(".movie__type");
    movieGenries.append(document.createTextNode(movieGeneries));
    let movieCardRating = node.querySelector("p .movie__rating").innerHTML = movieRating;
    let movieDetailLink = node.querySelector(".movie__details");
    movieDetailLink.setAttribute("href", '/movie-detail.html?id=' + movieId);

    document.getElementById(moviCardId).append(node);

    
}

let modalPopup = (movieName, movieImage, movieImgTitle, modalMovieDesc, modalMovieGenres, modalMovieCast,modalMovieDirector,modalRating, body) => {
    let modalImgClassget = document.querySelectorAll('.movie__figure');
    //let modalImgId = modalImgClassget.child.querySelector('data-id')[0].value;
  
     
    var showModal = () => {
        //let moviId = this.getAttribute("data-id");
        
        let modalTemplate = document.getElementById("modalTemplate");

        let modalTemplateLayout = modalTemplate.content.querySelector(".modal-container");
        let modalTemplateNode = document.importNode(modalTemplateLayout, true);
            modalTemplateNode.style.display="block";
        let modalTitle = modalTemplateNode.querySelector(".modal__header h2");
            modalTitle.prepend(document.createTextNode(movieName));

        let modalFigure = modalTemplateNode.querySelector('.modal__figure img');
            modalFigure.setAttribute("src", movieImage);
            modalFigure.setAttribute("alt", movieImgTitle);
            modalFigure.setAttribute("title", movieImgTitle);

        let modalDesc = modalTemplateNode.querySelector(".modal__description-movie p");
        modalDesc.prepend(document.createTextNode(modalMovieDesc));

        let modalGenries = modalTemplateNode.querySelector(".modal__description--content.genres");
        modalGenries.append(document.createTextNode(modalMovieGenres));

        let modalCast = modalTemplateNode.querySelector(".modal__description--content.cast");
        modalCast.append(document.createTextNode(modalMovieCast));

        let modalDirector = modalTemplateNode.querySelector(".modal__description--content.director");
        modalDirector.append(document.createTextNode(modalMovieDirector));

        let modalCardRating = modalTemplateNode.querySelector(".modal__rating").innerHTML = modalRating;

        document.querySelector(body).append(modalTemplateNode);

        let modalClose = document.querySelectorAll(".modal__popup--close")[0];
        
        modalClose.onclick = () => {
            document.querySelector('.modal-container').remove();
        }
        
    };

    for (var i = 0; i < modalImgClassget.length; i++) {
        modalImgClassget[i].addEventListener('click', showModal,false);
    }
  
};

// template movieDetails Layout in insert data;
function movieDetailLayout(movieBanner, movieBannerTitle, movieDetailTitle, movieDetailDesc, movieGeneries, movieDetailCast, mvoiDetailDirector, movieDetailRatings, moviDetailId) {

    let movieDetailLayout = document.querySelector(".moviDetailTemplate");
    let moviDetailLayout = movieDetailLayout.content.getElementById("moviDetailLayout");

    let node = document.importNode(moviDetailLayout, true);
    let Moviefigure = node.querySelector('.banner__img');
    Moviefigure.setAttribute("src", movieBanner);
    Moviefigure.setAttribute("alt", movieBannerTitle);
    Moviefigure.setAttribute("title", movieBannerTitle);

    let movieDetailHeading = node.querySelector(".movieDeatil__heading");
        movieDetailHeading.prepend(document.createTextNode(movieDetailTitle));
    let movieDetailDescription = node.querySelector(".movieDeatil__description");
        movieDetailDescription.prepend(document.createTextNode(movieDetailDesc));

    let movieDetailGenres = node.querySelector(".movieDetailGenres");
        movieDetailGenres.append(document.createTextNode(movieGeneries));
    let movieDetailCastCon = node.querySelector(".movieDetailCast");
        movieDetailCastCon.append(document.createTextNode(movieDetailCast));

    let moviedetailDirectorName = node.querySelector(".moviDetailDirector");
    moviedetailDirectorName.append(document.createTextNode(mvoiDetailDirector));

    let movieDetailRating = node.querySelector(".moviDetailRating").innerHTML = movieDetailRatings;
    document.getElementById(moviDetailId).append(node);
}

export { movieCard, movieDetailLayout,modalPopup };
