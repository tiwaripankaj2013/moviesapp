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
        }
 }

export {utility}