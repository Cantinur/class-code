var mittTall = 10;


function erTalletGyldig(tall) {
    switch (tall) {
        case 1:
            return true;
        case 2:
            return true;
        case 3:
            return true;
        case 5:
            return true;
        case 7:
            return true;
        default:
            return false;
    }
}

console.log(erTalletGyldig(mittTall));


var student = {
    navn: "Henrik",
    alder: 28,
    erAdmin: false
}


var ansatt = {
    navn: "Nils",
    alder: 56,
    erAdmin: true
}


function sjekkOMAdmin(person) {
    switch (person.erAdmin) {
        case true:
            console.log("Velkommen " + person.navn);
            return;

        default:
            console.log("Beklager " + person.navn + " har ikke adgang til denne siden");
    }
}

sjekkOMAdmin(student);