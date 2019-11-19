# Movie App

## Project Overview
A application that displays a list of movies as a list of cards. Each card provides movie detail such as movie title, movie Genre, movie poster, and movie rating. Whenever a user clicks on the poster a pop will appear after that user is able to see more information like movie description, movie cast, and all the details. App uses The Movie Database API taen from https://www.themoviedb.org/account/signup?language=en-EN.

## Technologies & tools 
    1. HTML5
    2. CSS3
    3. JavaScript
    4. Font Awesome
    5. Visual Studio Code
    6. Google Chrome Developer Console
    
 ## App functionality
1. Show latest movies
2. Popular movies
3. Trending movies
4. Movies quick view pop-up
5. Movie details showing
6. Similar movies list
7. Movie cast details showing
8. Filmography & release date

## Files & folder structure
    │   actor-details.html
    │   index.html
    │   movie-detail.html
    │   Readme.md
    │   search-movie.html
    │
    └───assets
        ├───css
        │       actor-details.css
        │       font-awesome.css
        │       global.css
        │       grid.css
        │       movie-card.css
        │       movie-details.css
        │       movie-modal-popup.css
        │       movie-search.css
        │       reset.css
        │       screen.css
        │       style.css
        │       variables.css
        │
        ├───fonts
        │       fontawesome-webfont.eot
        │       fontawesome-webfont.svg
        │       fontawesome-webfont.ttf
        │       fontawesome-webfont.woff
        │       fontawesome-webfont.woff2
        │       FontAwesome.otf
        │
        ├───images
        │       placeholder1920X800.jpg
        │       placeholder300X300.png
        │
        └───js
                actor-detail.js
                main.js
                modal-popup-layout.js
                movie-api.js
                movie-card.js
                movie-detail-layout.js
                movie-detail.js
                movie-search.js
                utility.js
                
## Detailed Info Zone
In this zone, you will get each and every detail of every single file and coding information. This particular area designed as documentation in this I am trying to write every single piece of information that is used in this project.
#### HTML
    index.html 
    You can this file is the entry point of my movie app. 
    In this file, I have only attached one CSS and one JavaScript file.     
    This file load when Url of the app will be open.
    
    actor-details.html 
    This file is responsible for actors or cast details page markup.
    
    movie-detail.html
    This file is responsible for Movie details page markup.
    
    search-movie.html
    This file is responsible for a searching movie for showing details 
    and able to apply the filter on this basis of rating.

#### CSS

        actor-details.css - Manage actor details and bigraphy Styling.
        
        font-awesome.css  - For icons
        
        movie-card.css    -  Movie card layout css
        
        movie-details.css - Manage movie details page
        
        Movie-modal-popup.css - Quick view modal popup css
        
        reset.css - Reset User agent stylesheet (Reset Browser css)
        
        movie-search.css - movie search page stylesheet
        
        screen.css - text-color class and background color class
        
        style.css - written css for navbar and import global css file
        
        variable.css - written varible of color code and font-family
        
        grid.css define global class use grid lay outs 1 to 12 grids and col__1 
        for large device, col__sm-- for tabblet device , col__xs for mobile device )
        global.css (it's use for global entire project in title, heading and btn etc.. )

#### JavaScript

My Entire focus in this app is to build a better application using the correct use of JavaScript. I have tried to put every single line of code on the correct place on the basis of application performance and functionality. I am also trying to write each and everything about all the things that are used in application as a from of Script.

    main.js - This js file is the main entry point of all the JavaScript files and this file is loaded when
    Index.html file come into the web browser. this file show latest movie, trending movies, popular movies, 
    quick-view of all the movies.
    There are 4 other js files attach to this file to make this file fully functional. 
    
    1. movieApi.js - In this file I have get all the data from TMDB API. 
    In the same file I have create object movieapi and mthods to call api get data methods : generes: call 
    genres api latestMovie: call latest movies trandingMovie: popularMovie: movieDetail: similarMovie: 
    actorDetail: filmography: searchMovie: movie-card create function movieCard() movieCard : select templaet
    tag from html page and insert data as a arguments and also pass one arguments moviCardId for append 
    moviecard layouts in  webpages where you want to view.
    
    2. movieCard.js - In this file I have created Movie card lauyout and insert data at a appropriate tags.
    
    3. modalPopup.js - In this file modal-popup-layout cretae function modalPopup() it's select template tag
    from html file and insert data as a arguments and show modal popup.
    
    4. utility.js - In this file in define one object utility and methods for use multiple times in diffrent 
    diffrent files.
    
    5.  actor-detail.js - This file comes in action when actor-details.html come to load in web browser.
    In this file, actor-details import actor detials api and filmography api pass ACTOR__id
    and show acotor detilas and filmography filmography in get unique films years and sort in desending order
    and agin mathch year to film.cast to match release year and show release date,
    character of actor, movie title and other stuff.
    
    6. movie-search.js - In this file import movieApi object and call trending, latest, popular method
    onkeyup on serach movie by title and genres and also user can filter movies according to movie rating
    movies rating work as you enter 2 rating movies will be show more than 2 rating values in movies data.
    
    7. movie-detail.js - In this file movie-detail import movie api object and call genres, moviedetail,
    similarMovie method get data createGenres function to match genres key show it's value.
    
    8. movie-detail-layout.js- in this file movie-details-layoyt cretea function movieDetailLayout to select
    moviedetail tempalte tag from moviedetasils html page and insert data as arguments prepare movie details
    layout structure and dom manipulation also pass one arguments moviDetailId (ID) it's append movie details
    layout where you want to show
    
#### Methods name and usage:
dataMap : This use for get value from array and map it's name example cast ['23' : jaquinphonex ] output will jaquinphonex

getIdToURL : it's get id from url (http://127.0.0.1:5502/movie-detail.html?id=475557) that's id pass in api show moviedetails,actor details

starReview : get rating value from api and print star icon

directorName : it's pas job id and and get director name

rating : it's convert 1 to 10 rating in 1 to 5 rating round the value 1.6 to 2 use math.floor

uniqueMovies : pass all movies list data mathch movi's id return unique movie list

createGenres: In this Method I have Pass genres id, genresdata and get return genres name

modalPopupShow: This method is responsable to call on select Moviefigure class and add 
click addEventListener and register event listner on click that show modal popup.
