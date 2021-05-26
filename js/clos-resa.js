var formElt = document.querySelector("form");
var msgElt = document.getElementById("submit");

formElt.addEventListener("submit", function(e) {
    e.preventDefault();
   msgElt.style.visibility = "visible";
});


