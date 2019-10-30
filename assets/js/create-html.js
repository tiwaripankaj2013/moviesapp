function movieCard(moviename,movierating,moviegenre,movieimg){
    let bestTwoGenre = [];
    
    //two show only two genre of movie on home page
    if(moviegenre.length>2){
        bestTwoGenre.push(moviegenre[0]);
        bestTwoGenre.push(moviegenre[1]);
    }
    let cardhtml = `
                      <!-- movie card start -->
                        <div class="movie">
                            <figure class="movie__figure">
                                <img src="${movieimg}" alt="" class="img-fill">
                            </figure>
                            <!-- movie description -->
                            <div class="movie__desc">
                                <h5 class="movie__tittle text-black">${moviename}<a href="" class="movie__likes text-red"><i
                                            class="fa fa-heart"></i></a></h5>
                                <p class="movie__type text-gray">${bestTwoGenre}</p>
                                <p class="d-flex align-around">
                                    <a href="" class="movie__rating">
                                        <i class="fa text-black ${movierating >=1 ?'fa-star' :'fa-star-o'}"></i>
                                        <i class="fa text-black ${movierating >=2 ?'fa-star' :'fa-star-o'}"></i>
                                        <i class="fa text-black ${movierating >=3 ?'fa-star' :'fa-star-o'}"></i>
                                        <i class="fa text-black ${movierating >=4 ?'fa-star' :'fa-star-o'}"></i>
                                        <i class="fa text-black ${movierating >=5 ?'fa-star' :'fa-star-o'}"></i>
                                        
                                    </a>
                                    <a class="movie__details text-blue" href="">Show More</a>
                                </p>
                            </div>
                            <!-- /movie description -->
                        </div>
                        <!-- movie card end -->
`
return cardhtml;
}


function rowMarkup(idx){
    console.log('in row markup')
}
export {movieCard,rowMarkup}