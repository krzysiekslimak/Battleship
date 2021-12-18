
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
    shipSunk: 0,

    ships: [ 
        {locations: ["10", "20", "30"], hits: ["", "", ""]},
        {locations: ["32", "33", "34"], hits: ["", "", ""]},
        {locations: ["63", "64", "65"], hits: ["", "", ""]}],

    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("TRAFIONY!");
                if(this.isSunk(ship)){
                    this.shipSunk++;
                }
                return true;
            }else{
                view.displayMiss(guess);
                view.displayMessage("Pudło!");
                return false;
            }

        }
    },
    isSunk: function(ship){
        for (var i =0; i < this.shipLength; i++){
            if(ship.hits !== "hit") {
                return false
            }
            return true
        }
    },
}