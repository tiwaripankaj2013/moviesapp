
// modal popup layouts 
let modalPopup = (movieName, movieImage, movieImgTitle,
    modalMovieDesc, modalMovieGenres, modalMovieCast,
    modalMovieDirector,modalRating, body) => {
let modalTemplate = document.getElementById("modalTemplate");

let modalTemplateLayout = modalTemplate.content.querySelector(".modal-container");
let modalTemplateNode = document.importNode(modalTemplateLayout, true);
    modalTemplateNode.style.display="block";

let modalTitle = modalTemplateNode.querySelector(".modal__header h2");
    modalTitle.prepend(document.createTextNode(movieName));

let modalFigure = modalTemplateNode.querySelector('.modal__figure img');
    modalFigure.setAttribute("src", movieImage);
    modalFigure.setAttribute("alt", movieImgTitle);
    modalFigure.setAttribute("title", movieImgTitle);

let modalDesc = modalTemplateNode.querySelector(".modal__description-movie p");
    modalDesc.prepend(document.createTextNode(modalMovieDesc));

let modalGenries = modalTemplateNode.querySelector(".modal__description--content.genres");
    modalGenries.append(document.createTextNode(modalMovieGenres));

let modalCast = modalTemplateNode.querySelector(".modal__description--content.cast");
    modalCast.append(document.createTextNode(modalMovieCast));

let modalDirector = modalTemplateNode.querySelector(".modal__description--content.director");
    modalDirector.append(document.createTextNode(modalMovieDirector));

let modalCardRating = modalTemplateNode.querySelector(".modal__rating").innerHTML = modalRating;
    document.querySelector(body).append(modalTemplateNode);

let modalClose = document.querySelectorAll(".modal__popup--close");
    for(let i=0; i<modalClose.length;i++){
        modalClose[i].onclick = () => {
            document.querySelector('.modal-container').remove();
            }
    }
};
export {modalPopup};
