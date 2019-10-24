//Array inneholder ord bruker skal taste inn
// Vi skla forstette å legge til helt til burker ønsker å slutte  
// Arry, While, FOR

var ordliste = [];
var forstettÅSpørreOmTall = true;


while(forstettÅSpørreOmTall) {
    var nyttOrd = prompt("Hva ønsker du å skrive?");
    
    ordliste.push(nyttOrd);
    
    var ønskerDuÅFortsette = prompt("Ønsker du å fortsette?");
    
    if (ønskerDuÅFortsette === "nei") {
        forstettÅSpørreOmTall = false;
    }
}
for (var teller = 0; teller < ordliste.length; teller++) {
    console.log(ordliste[teller]);
}