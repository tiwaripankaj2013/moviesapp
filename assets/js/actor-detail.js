import {movieApi} from './movie-api.js';
import {utility} from './utility.js';

 
let allActor = [];
const ACTOR_ID = utility.getIdToURL('id');

allActor.push(
    movieApi.actorDetail(ACTOR_ID),
    movieApi.filmography(ACTOR_ID)
        );

Promise.all(allActor).then(data => {
    let actorDetail= data.shift();
    let filmography  = data.shift();

/*actor details insert data in template tag*/
   let actorDetailLayout = document.querySelector(".actorDetailTemplate");
   let actorDetailnode = actorDetailLayout.content.getElementById("actorDetailLayout");

   let node = document.importNode(actorDetailnode, true);
   let actorfigure = node.querySelector('.actor__profile--img img');
       actorfigure.src=`${utility.posterPath()}${actorDetail.profile_path}`;
       actorfigure.alt= actorDetail.name;
       actorfigure.title = actorDetail.name;

       node.querySelector(".actor__name").prepend(document.createTextNode(actorDetail.name));
       node.querySelector(".actor__DOB").append(document.createTextNode(actorDetail.birthday));
       node.querySelector(".actor__description").append(document.createTextNode(actorDetail.biography));
       node.querySelector(".actor__rating--number span").append(document.createTextNode(Math.round(actorDetail.popularity)));
       document.getElementById('actordetail').append(node);

    /*actor details insert data in template tag end*/ 

    
    /* filmo graphy  */

var panelSection = document.querySelector("#filmPanel");
var list = document.querySelector("#filmList");	
var panelBody = document.querySelector("#panelBody");

        var filmYears = [];
        // console.log(filmography);
        filmography.cast.forEach(item => {
            let filmYear = item.release_date.split("-")[0];

            if(filmYears.indexOf(filmYear) == -1){
                filmYears.push(filmYear);
            }
        })

        filmYears = filmYears.sort().reverse();
        // console.log(filmYears);

        filmYears.forEach(item => {
            let cloneYearList = document.importNode(list.content, true);
            let appendArticle = cloneYearList.querySelector('.movie-panel')
                cloneYearList.querySelector(".filmography__releaseYear").textContent = item;
                // console.log(item); 
                panelSection.append(cloneYearList);

            filmography.cast.forEach(ele => {
                let year = ele.release_date.split("-")[0];
                // console.log(ele);
                if(item == year){
                    let panelBodyContent = panelBody.content.querySelector(".filmography__description");
                    let clonePanelBody = document.importNode(panelBodyContent, true);

                    // console.log(clonePanelBody);
                    clonePanelBody.querySelector(".title").textContent = ele.title;
                    clonePanelBody.querySelector(".year").textContent = ele.release_date;
                    clonePanelBody.querySelector(".character").textContent = ele.character;
                    appendArticle.append(clonePanelBody);
                }
            })
        })

        

 }).catch(err => console.log(err));