var boutonElt = document.getElementById("btnannul");
var annulationElt = document.getElementById("annulation");

boutonElt.addEventListener("click", function() {
    annulationElt.innerHTML = "<p>Sans frais au plus tard deux jours avant la date d'arrivée.<br/>Au delà, la totalité du séjour est dûe.</p>";
});

