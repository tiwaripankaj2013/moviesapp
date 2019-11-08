
function starReview(rateing){
    let rate = ''
    for(let i =1 ; i<=5 ;i++){
        rate = `${rate} <i class= "fa ${rateing >= i ?'fa-star' : 'fa-star-o'}"></i>`
    }
    return rate;
}

function dataMap(data){
    let datas = '';
    data.map(dataItem => datas += dataItem.name + ', ');
    return datas;
   }

const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;

export {dataMap}