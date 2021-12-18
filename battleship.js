
//Widok//

var view = {
displayMessage: function(msg){
var messageArea = document.getElementById("messageArea");
messageArea.innerHTML = msg;
},
displayHit: function(location){
var cell = document.getElementById(location);
cell.setAttribute("class", "hit");

},
displayMiss: function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
}
};

//MODEL//



var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [ 
        {locations: ["10", "20", "30"], hits: ["", "", ""]},
        {locations: ["32", "33", "34"], hits: ["", "", ""]},
        {locations: ["63", "64", "65"], hits: ["", "", ""]}],

    fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        var index = ship
            .locations
            .indexOf(guess);
        if (index >= 0) {
            ship.hits[index] = "hit";
            view.displayHit(guess);
            view.displayMessage("TRAFIONY!");
            if (this.isSunk(ship)) {
                this.shipsSunk++;
            }
            return true;
        }
    }
    view.displayMiss(guess);
    view.displayMessage("Pudło!");
    return false;

},
    
    isSunk: function(ship){
        for (var i =0; i < this.shipLength; i++){
            if(ship.hits !== "hit") {
                return false
            }
            return true
        }
    },

    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
            location = this.generateShip();
            } while (this.collision(locations));
                this.ships[i].locations = locations;          
        }
    },
    
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if( direction === 1 ) {
            //okret poziomy
        }else {
            //okręt pionowy
        }  
    }
     
   
    

    collision: function(){

    }
}

//KONTROLER//

var controller = {
    guesses: 0,

    processGuess: function(guess) {
        var location = parseGuess(guess);
        if(location) {
            this.guesses++;
            var hit = model.fire(location);
            if(hit && model.shipsSunk === model.numShips) {
                view.displayMessage("Zatopiłeś wszystkie okręty w, " + this.guesses + " próbach." )
            }
        }
    }

};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Twoje współrzędne są nieprawidłowe, wpisz literę z cyfrą.")
    }else{
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if(isNaN(row) || isNaN(column)){
            alert("Twoje współrzędne są nieprawidłowe, wpisz literę z cyfrą.")
        }else if (row < 0 || row >= model.boardSize || column <0 || column >= model.boardSize){
            alert("Strzeliłeś poza planszą!")
        }else {
            return row + column;
        }
    }
    return null;
}

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress
}
function handleFireButton () {
var guessInput = document.getElementById("guessInput");
var guess = guessInput.value;
controller.processGuess(guess);

guessInput.value = "";
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}


window.onload = init;