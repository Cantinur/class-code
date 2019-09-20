//Typer

//Number
//Alle disse er av typen tall
4
9.3
-10

//String
//Tekst, selv om det ser ut som tall så er dette ansett som tekst
"Hello World"
'Hello World' //Begge skrive måter fungerer like bra
"42"

//Tomme verdi typer
null
undefined

//BOOLEAN
true
false

//Oprasjonstegn
> // Større enn
>= // Større eller lik
< //mindre enn
<= //Mindre eller lik
=== //Lik
!== //Ikke lik
    
//Logiske operatorer
&& //OG
|| //Eller
! //Ikke. Dette gjør det boolske uttrykket motsatt
    
//Oppgave 1
var x = 10;
var y = "a";
y === "b" || x >= 10
//TRUE

//Oppgave 2
var x = 3;
var y = 8;
!(x == "3" || x === y) && !(y != 8 && x <= y)

// While
var teller = 0;
while (teller < 10) {
    teller++; 
}

//FOR
for (var teller = 0; teller < 10; teller++) {
    console.log(teller);
}

//IF
var navn = "Anne";

if (navn === "Nils") {
    console.log("Hei Nils");
    
} else {
    console.log("Hei " + navn + " du er ikke Nils");
}


if (navn === "noe"){
    
} else if (navn == "Noe annet") {
    
}   

//Turnary
(navn === "Nils") ? console.log("Hei Nils") : console.log("Du er ikke Nils");

//Functions
function hilsen(navn) {
    console.log("Hei " + navn);
}

var n = "Henrik"
if (navn === "Henrik") {
    hilsen(n);
}

function pluss (a, b) {
    console.log(a+b);
}

function minus (a, b) {
    console.log(a-b);
}

var operator = "+";
var nummerEn = 10;
var nummberTo = 15;

if (operator === "+") {
    pluss(nummerEn, nummberTo);
} else if (operator === "-") {
    minus(nummerEn, nummberTo);
}
    








