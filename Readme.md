movies App 
features : (index.html)
1. Show latest movies
2. Popular Movies 
3. Trending Movies 

features 2(index.html)
1. Movies quick view click on show modal popup
    Show movies title,details,genres,cast,director name

features 3 (movie-details.html)
1. show more click on open movie details page 
    Show movies title,details,genres,cast,director name
2.  Show similar movies list

feature 4 (actor-details.html)

1. click on cast show actor name ,dob,bigrphy,rating
2. filmography show movie release year
    a. show movies title,release date ,character

feature 5(movie-search.html)
1. search movies by title
2. search movies ny genres 
3. filter  movies by rating show filter given rating to upper rating 


=================================================================
css files and details
1. actor details.css (in writeen css for actor details and bigraphy)
2. fontawsome.css (in writeen css icons)
3. movie card.css (movie card layout css )
4. movie-details .css (movie details page css )
5. movie-modal-popup.css (quick view modal popup css)
6. reset.css (written css for browser css resolve)(coreect this comment)
7. movie-search.css (movie search page css )
8. screen.css (text-color class and backgroun color class )
9. style.css (written css for navbar and import global css file)
10. variable.css (written varible of color code and font-family)
11. grid.css(define global class use grid lay outs 1 to 12 grids and col__1 for large device, col__sm-- for tabblet device , col__xs for mobile device  )
12. global.css (it's use for global entire project in title, heading and btn etc..  )


===================================================================================================

js file details 

1. actor-details
    import actor detials api and filmography api
    pass ACTOR__id and show acotor detilas and filmography

    filmography in get unique films years and sort in desending order
    and agin mathch year to film.cast to match release year and show release date, character of actor,movie title,

2. main 

it's file add on index.html page  show latest,trending,popular,movies,quick-view

 movieapi object to call trnding,popuplar,latest,genres(for get movies genres) movies method

3. modal-popup-layout
cretae function modalPopup() 
    it's select template tag  from html file and insert data as a arguments and show modal popup


4. movies-api

it's file create object movieapi and mthods to call api get data 
    methods :
            generes: call genres api
            latestMovie: call latest movies 
            trandingMovie:
            popularMovie:
            movieDetail:
            similarMovie:
            actorDetail:
            filmography:
            searchMovie:
5. movie-card 
    create function movieCard()
    movieCard : select templaet tag from html page and insert data as a arguments and also pass one arguments moviCardId for append moviecard layouts in webpages where you want to view 

6. movie-detail
   import movie api object and call  genres,moviedetail,similarMovie method get data
   createGenres function to match genres key show it's value 
7. movie-details-layoyt
    cretea function movieDetailLayout to select moviedetail tempalte tag from moviedetasils html page and insert 
    data as arguments prepare movie details layout structure and dom manipulation
    also pass one arguments moviDetailId (ID) it's append movie details layout where you want to show 

8. movies-search

   import movieApi object and  call trending,latest,popular method 

   keyup on serach movie by title and genres 
   and also user can filter movies according to movie rating
   movies rating work as you enter 2 rating movies will be show 2 all higher rating values movies data


8. utility

it's file in define one object utility and methods for use multiple times in diffrent diffrent files

methods name  and usage:

1. dataMap : it's use for get value from array and map it's name example cast ['23' : jaquinphonex ] outpu will jaquinphonex

2. getIdToURL :  it's get id from url (http://127.0.0.1:5502/movie-detail.html?id=475557) that's id pass in api show moviedetails,actor details 

3. starReview : get rating value from api and print star icon  

4. directorName : it's pas job id and and get director name 
5. rating : it's convert 1 to 10 rating in 1 to 5 rating round the value 1.6 to 2 use math.floor
6. uniqueMovies : pass all movies list data mathch movi's id return  unique movie list

