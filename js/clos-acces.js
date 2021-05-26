/*Création d'une fonction Ajax d'appel*/
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
           callback(req.responseText); 
	   } else {
           console.error(req.status + " " + req.statusText + " " + url);
       }
    });
    req.addEventListener("error", function() {
        console.error("Erreur réseau avec l'URL" + url);
    });
    req.send(null);
}

/*Création d'un événement où quand on clique sur le bouton météo, la météo de Weatherbit s'affiche en temps réel grâce à une requête ajax GET*/

var boutonmeteoElt = document.getElementById("bouton_meteo");
boutonmeteoElt.addEventListener("click",function() {
    ajaxGet("https://api.weatherbit.io/v2.0/current?city=Marseille&key=64cb8740558d4422a3b28881eec335b8", function(reponse) {
        var meteo = JSON.parse(reponse);
        var tempsfrance = "";
        var temps = meteo.data[0].weather.description ;
        if (temps = "Clear sky") {
            tempsfrance = "Beau temps.";
        }
        else if (temps = "Overcast clouds") {
            tempsfrance = "Temps couvert.";
        }
         else if (temps = "Scattered clouds") {
            tempsfrance = "Nuages épars.";
        }
         else if (temps = "Light rain") {
            tempsfrance = "Légères averses.";
        }
        else if (temps = "Few clouds") {
            tempsfrance = "Quelques nuages.";
        }
        else {
            tempsfrance = temps;
        }
    
        boutonmeteoElt.innerHTML = "La température est de " + meteo.data[0].app_temp + "°.<br/> " + tempsfrance;
    });
});



/*REMPLACE DANS VERSION RESPONSIVE PAR LIEN DIRECT COPIE DEPUIS GOOGLEMAPS DANS UN IFRAME*/
/*Code copier coller depuis internet pour intégrer une carte Google maps gratuite (jusqu'à gros trafic, puis payant) sur ma page*/
/*
var carteElt;
function initMap() {
    carteElt = new google.maps.Map(document.getElementById("map"),{
        center: {lat:43.926, lng:4.546},
        zoom:8,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:true
    });
    var marqueur = new google.maps.Marker({
    position:{lat:43.926, lng:4.546},
    map:carteElt
    });
}
*/