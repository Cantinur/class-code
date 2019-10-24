var knapp = document.getElementById("minKnapp");
var tekstFelt = document.getElementById("tekstInput");
var visTekst = document.getElementById("skrivTekstTilSkjerm");

var teller = 0;
var ermindreEnnFem = true;

while (ermindreEnnFem) {
    teller++;
    console.log("Teller = " + teller);
    
    if (teller === 5) {
        console.log("Teller er nå " + teller);
        console.log("Løkka vil slutte");
        ermindreEnnFem = false;
    }
}

while(teller < 10 ){
    //Noe kode skal være her
    teller++;
}

console.log("Etter at løkken er ferdig så er teller = " + teller);

for (var minTeller = 0; minTeller < 10; minTeller++) {
    console.log(minTeller);
}

var navn = ["Henrik", "Lene", "Mathias", "Nils"];

var tull = [42, "Hei", true];
var spillerTag = ["ALS", "NOP", "QSL", "WRT", "FLS"];
var spillScore = [76, 32, 28, 91, 100];

for (var i = 0; i < spillerTag.length; i++){
    console.log("Spiller " + spillerTag[i] + ", score: " + spillScore[i] + "pts");
}


function leggTilIDatabase(nyttNavn){
    navn.push(nyttNavn);
}

var tekstStreg = "Hei";
for (var tall = 0; tall < navn.length; tall++) {   
    console.log(navn[tall]);
    console.log(tekstStreg);
    tekstStreg = tekstStreg + tall;
}

function hilsen(){
    var navn = tekstFelt.value;
    
    if (tekstFelt != undefined || tekstFelt != null){
        visTekst.innerHTML = "Hei " + navn;
    } else {
        visTekst.innerHTML = "Vendligst skriv inn en gyldig navn";
    }
    
}

knapp.addEventListener("click", hilsen);











