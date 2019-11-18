var utility = {
     dataMap:(data)=>{
        let datas = '';
        data.map(dataItem => datas += dataItem.name + ', ');
        return datas;
       },
    getIdToURL:(parameterName) => {
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
        starReview : (rateing) => {
            let rate = ''
            for(let i =1 ; i<=5 ;i++){
                rate = `${rate} <i class= "fa ${rateing >= i ?'fa-star' : 'fa-star-o'}"></i>`;
            }
            return rate;
        },
        directorName:(moviiDetailData) =>{
            let director = moviiDetailData.credits.crew.filter(movieDirector => movieDirector.job === 'Director')[0];
            return director.name;
        },
        rating:(ratingValue) =>{
            return Math.floor(ratingValue/2);
        },
        uniqueMovies : (movies) => {
            var resultIds = [];
            var resultData = [];
            for (let movie of movies) {
                if (resultIds.indexOf(movie.id) == -1) {
                    resultIds.push(movie.id);
                    resultData.push(movie);
                }
            }
            return resultData;
        }
 }

export {utility}