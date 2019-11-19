// template Movie card lauyout in insert data 
let  movieCard = (movieImage, movieImgTitle, movieTitle, 
      movieGeneries, movieRating, movieId, moviCardId)=> {
    let moviecardTemplate = document.querySelector(".template");
    let tempItem = moviecardTemplate.content.querySelector("article");

    let node = document.importNode(tempItem, true);
    let imgNode =   node.querySelector('.movie__figure img')
                    imgNode.src = movieImage;
                    imgNode.alt = movieImgTitle;
                    imgNode.title = movieImgTitle;
                    imgNode.setAttribute("data-id", movieId);
                    
        node.querySelector(".movie__desc h5").prepend(document.createTextNode(movieTitle));
        node.querySelector(".movie__type").append(document.createTextNode(movieGeneries));
    
        node.querySelector("p .movie__rating").innerHTML = movieRating;
        node.querySelector(".movie__details").setAttribute("href", '/movie-detail.html?id=' + movieId);

    document.getElementById(moviCardId).append(node);
}

export { movieCard};
