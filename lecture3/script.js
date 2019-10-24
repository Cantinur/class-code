var minTittel = document.getElementById("tittel");
//var minKnapp = document.getElementById('min-knapp');
var knapper = document.getElementsByClassName('knapp');

var navneListe = ["hENRIK", "sandberg", "nikolai", "blystad"];


/*
var teller = 0;
while (teller < navneListe.length){
    console.log(navneListe[teller]);
    teller++;
}*/


function hilsen(personNavn) {
    var navnMedHilsen = "Hei " + personNavn;
    return navnMedHilsen
}

function storeForbokstav(navn) {
    var storForbokstav = navn.charAt(0).toUpperCase();
    var småBokstaver = navn.slice(1).toLocaleLowerCase();
    return  storForbokstav + småBokstaver;
}

function slåSammen(fornavn, etternavn) {
    return storeForbokstav(fornavn) + " " + storeForbokstav(etternavn);
}

function nårViTrykkerPåKnapp() {
    var teller = 0;
    while ( teller < navneListe.length) {
        if (teller === 0){
            var fulltnavn = slåSammen(navneListe[teller],navneListe[teller+1])
            minTittel.innerHTML = hilsen(fulltnavn);
        } 
        teller += 2;
    }
}

/*minKnapp.addEventListener('hover', function () {
    nårViTrykkerPåKnapp();
    minTittel.style.color = 'pink';
});*/
var verdi = 0;
for (var teller = 0; teller < knapper.length; teller++){
    knapper[teller].addEventListener('click', function () {
        if (this.value === "+") {
            verdi++;
        } else if (this.value === "-") {
            verdi--;
        }
        
        minTittel.innerHTML = verdi;
    });
}


//Oppgave
function test(x) {
    if (x % 3 === 0){
        return x*2;
    } else {
        console.log(x);
        return x/2;
    }
}

//10 % 2 -> 0
//2 + 2 + 2+ 2+ 2
//10 % 3 => 1
//3 + 3 + 3 + 1  

test(40);

//Svar: 













