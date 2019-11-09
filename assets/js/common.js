const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;

function starReview(rateing){
    let rate = ''
    for(let i =1 ; i<=5 ;i++){
        rate = `${rate} <i class= "fa ${rateing >= i ?'fa-star' : 'fa-star-o'}"></i>`
    }
    return rate;
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
        window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

export {starReview,findGetParameter}