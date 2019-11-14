
import {movieApi} from './movie-api.js';

import {utility} from './utility.js';


const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;
 
let allActor = [];
const ACTOR_ID = utility.getIdToURL('id');

allActor.push(
    movieApi.actorDetail(ACTOR_ID),
    movieApi.actorFimography(ACTOR_ID)
        );

Promise.all(allActor).then(data => {
    let actorDetail= data.shift();
    let actorFimography  = data.shift();

/*actor details*/

   let actorDetailLayout = document.querySelector(".actorDetailTemplate");
   let actorDetailnode = actorDetailLayout.content.getElementById("actorDetailLayout");

   let node = document.importNode(actorDetailnode, true);
   let actorfigure = node.querySelector('.actor__profile--img img');
       actorfigure.src=`${POSTER_PATH}${actorDetail.profile_path}`;
       actorfigure.alt= actorDetail.name;
       actorfigure.title = actorDetail.name;

       node.querySelector(".actor__name").prepend(document.createTextNode(actorDetail.name));

       node.querySelector(".actor__DOB").append(document.createTextNode(actorDetail.birthday));
       node.querySelector(".actor__description").append(document.createTextNode(actorDetail.biography));
       node.querySelector(".actor__rating--number span").append(document.createTextNode(Math.round(actorDetail.popularity)));

       document.getElementById('actordetail').append(node);


       console.log(actorFimography);
    
    //    actorFimography = actorFimography.cast.forEach((actorFimoYear) =>{
    //         actorFimoYear.year = actorFimoYear.release_date ? parseInt(actorFimoYear.release_date.split('-')[0]) : '';
            
       
               
    //         // movieYears.push(actorFimoYear.year)
    //         return actorFimoYear;
    //         actorFimography.sort((x,y) =>(x.year, y.year) ? 1 :((y.year > x.year) ? -1 : 0));

    //         // console.log(actorFimography);

    //         let groupMovieYear = [];
    //         let movieYears = [];

    //         for(let i=0; i<actorFimography.length; i++)
    //             {
    //                 if(movieYears.includes(actorFimography[i].year)){
    //                     groupMovieYear.forEach(actorFimo =>{
    //                         if(actorFimo.year == actorFimography[i].year) actorFimo.films.push(actorFimography[i]);
    //                         else return actorFimo;
    //                     })  
    //                 }
    //                 else{
    //                     movieYears.push(actorFimography[i].year);
    //                         groupMovieYear.push({
    //                             year:actorFimography[i].year,
    //                             films:[actorFimography[i]]
    //                         })
    //                     }    
    //             }
                
    //             // insert movie year and name into html

    //             for(let i=0; i<groupMovieYear.length;i++){
    //                 if(groupMovieYear[i].year){
    //                   let movieyearIns =  document.querySelector('.movie__year--isert')
    //                     let h4 = document.createElement('h4');
    //                     h4.append(document.createTextNode(groupMovieYear[i].year));
    //                     movieyearIns.append(h4);

    //                     for(j=0;j<groupMovieYear[i].films.length;j++){
    //                         let movieYearData = document.querySelector('.filmography');
    //                         let article = document.createElement('article');
    //                             article.setAttribute('class','movie__years');
    //                             movieYearData.append(article);
    //                             debugger;
    //                             var h5 = document.createElement('h4');
    //                             h5.setAttribute('class','movie__years-data');
    //                             h5.append(document.createTextNode(groupMovieYear[i].films[j].title));
    //                             // console.log(h5);
    //                             article.append(h5);

    //                     }

    //                 }
    //             }
        
    //     });
})