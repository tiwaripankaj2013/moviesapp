

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("modal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal__close")[0];

  // When the user clicks the button, open the modal
//   btn.onclick = function () {
//       modal.style.display = "block";
//   }

  // When the user clicks on <span> (x), close the modal
//   span.onclick = function () {
//       modal.style.display = "none";
//   }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  

function showmodal(e){
    var x = document.getElementsByClassName("modal-container");
  //  x.classList.remove("mystyle");
    // x.innerHTML='hellow world';
    // console.log('world')
}
 

 export {showmodal}