var boutonElt = document.getElementById("btnequip");
var detailsElt = document.getElementById("detailsequip");
detailsElt.innerHTML = "";

boutonElt.addEventListener("click",function() {
    detailsElt.innerHTML = "<ul><li>Literie haut-de-gamme (marque Treca),</li><li>Draps en lin et linge de toilette fournis,</li><li>Accès WIFI gratuit,</li><li>Télévision (chaînes TNT), lecteur DVD, lecteur CD,</li><li>Mise à disposition de livres, DVD et CD,</li><li>Possibilité de préparer café (cafetière Nespresso), thé ou infusion,</li><li>Fer et planche à repasser,</li><li>Séchoir.</li></ul>";
});



