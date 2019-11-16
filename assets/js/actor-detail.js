
import {movieApi} from './movie-api.js';

import {utility} from './utility.js';


const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;
 
let allActor = [];
const ACTOR_ID = utility.getIdToURL('id');

allActor.push(
    movieApi.actorDetail(ACTOR_ID),
    movieApi.actorFilmography(ACTOR_ID)
        );

Promise.all(allActor).then(data => {
    let actorDetail= data.shift();
    let actorFilmography  = data.shift();

/*actor details insert data in template tag*/
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

    /*end details insert data in template tag */ 

    
		var filmYears = [];
		for(let i = 0 ; i < actorFilmography.cast.length ; i++){
			let filmYear = actorFilmography.cast[i].release_date.split("-")[0];
			if(filmYears.indexOf(filmYear) === -1){
				filmYears.push(filmYear);
			}
		}
        
        filmYears = filmYears.sort();
        for(j=0;j<filmYears.length;j++){
            
        }
// filmography html layout in insert data

        let filmoTemplate = document.querySelector('.filmography');
        let filmographyLayout = filmoTemplate.content.querySelector('.filmographyLayout');
        let filmographynode = document.importNode(filmographyLayout, true);


        // for(j=0;j<filmYears.length;j++){

        //     filmographynode.querySelector('.movie__year').append(document.createTextNode(filmYears[j]));

        //     for(k=0;k< actorFilmography.cast.length;k++){
        //         let year = filmYears.cast[k].release_date.split("-")[0];
        //         if(filmYears[j]==filmYear){
                    
        //         }
        //     }
        // }
      

       
        
            

            console.log(document.querySelector('#filmYear').length)
            document.querySelector('#filmYear').append(filmographyLayout);
    

       

 }).catch(err => document.querySelector('body').innerHTML=err);