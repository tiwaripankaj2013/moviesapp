// template Movie card lauyout in insert data 
let  movieCard = (movieImage, movieImgTitle, movieTitle, 
     moviePopularity, movieGeneries, movieRating, movieId, moviCardId)=> {
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

export { movieCard};
