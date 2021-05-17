var btnElt = document.getElementById("btn_massages");
var detailsElt = document.getElementById("details_massages");
var closeElt = document.getElementById("closeicon");

btnElt.addEventListener("click", function() { 
    detailsElt.style.visibility = "visible";                                                                                   
	detailsElt.style.borderColor = "white";
});

closeElt.addEventListener("click", function() { 
    detailsElt.style.visibility = "hidden";                                                                                   
	detailsElt.style.borderColor = "none";
});