var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false; 

while(isSunk == false){
guess = prompt("Wybierz cel! (podaj liczbę od 0 do 6)");
if (gusess <0 || guess >6) {
    alert("Proszę podać prawidłowy numer komórki!");
}else {
    guesses = guesses + 1;
}
}