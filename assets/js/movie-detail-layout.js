 
/* template movieDetails Layout in insert data; */
let movieDetailLayout = (movieBanner, movieBannerTitle, movieDetailTitle,
                           movieDetailDesc, movieGeneries, movieDetailCast,
                            mvoiDetailDirector, movieDetailRatings, moviDetailId)=>{

    var movieDetailLayout = document.querySelector(".moviDetailTemplate");
    var moviDetailLayout = movieDetailLayout.content.getElementById("moviDetailLayout");

    var node = document.importNode(moviDetailLayout, true);
    var Moviefigure = node.querySelector('.banner__img');
        Moviefigure.src= movieBanner;
        Moviefigure.alt= movieBannerTitle;
        Moviefigure.title =  movieBannerTitle;

        node.querySelector(".movieDeatil__heading").prepend(document.createTextNode(movieDetailTitle));

        node.querySelector(".movieDeatil__description").prepend(document.createTextNode(movieDetailDesc));

        node.querySelector(".movieDetailGenres").append(document.createTextNode(movieGeneries));

     let castname =   node.querySelector(".movieDetailCast");
         movieDetailCast.slice(0,10).forEach(castName =>{
            let aTag = document.createElement('a');
                aTag.setAttribute('href','actor-details.html?id='+castName.id);
                aTag.innerText=castName.name;  
                castname.append(aTag);
              //   movieDetailData.credits.appendChild(aTag);
              //   movieDetailData.credits.append();
          }),

        node.querySelector(".moviDetailDirector").append(document.createTextNode(mvoiDetailDirector));

        node.querySelector(".moviDetailRating").innerHTML = movieDetailRatings;
        
    document.getElementById(moviDetailId).append(node);
}

export {movieDetailLayout};
