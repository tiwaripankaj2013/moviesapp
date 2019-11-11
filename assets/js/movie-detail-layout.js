 
// template movieDetails Layout in insert data;
let movieDetailLayout = (movieBanner, movieBannerTitle, movieDetailTitle,
                           movieDetailDesc, movieGeneries, movieDetailCast,
                            mvoiDetailDirector, movieDetailRatings, moviDetailId)=>{

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

export {movieDetailLayout};
