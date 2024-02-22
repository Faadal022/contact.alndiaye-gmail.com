var douleur = prompt("Quel est votre douleur");
if (douleur == Abdomen){
    alert("Vous avez de l'Appendicite");
} 
else if(douleur == Gorge){
    alert("Voue avez de la Fievre");
}
var Fievre = prompt("Avez-vous de la fievre ? (oui/non)");
if (Fievre === "oui") {
    alert("Vous pourriez avoir un rhume.");
} else if (Fievre === "non") {
    alert("Vous pourriez avoir un mal de gorge.");
} else {
    alert("Reponse invalide. Veuillez repondre par 'oui' ou 'non'.");
}
var Douleur = prompt("Avez-vous un Toux");
if(douleur == Toux){
    alert("Vous avez aucune Toux");
}
var Toux = prompt("Avez-vous de la Toux ? (oui/non)");
if(Toux === "oui"){
    alert("Vous avez de la fievre");
} else if(Fievre === "non"){
    alert("Vous avez Rien");
}else {
    alert("Reponse invalide. Veuillez repondre par 'oui' ou 'non'.");
}
var Fievre = prompt("Avez-vous de la fievre ? (oui/non)");
if(Fievre === "oui"){
    alert("Vous avez de la Rhume");
} else if(Fievre === non){
    alert("Vous avez de la Refroidissement");
} else {
    alertt("Rponse invalide. Veuillez repondre par 'oui' ou 'non'.");
}