"use strict";
class Sport {
    constructor(sport) {
        this._sport = sport;
    }
    returnSportDetail() {
        return `Sport: ${this._sport}`;
    }
}
class Player extends Sport {
    constructor(name, since, _sport, section) {
        super(_sport);
        this._name = name;
        this._since = since;
        this._section = section;
    }
    returnSportDetail() {
        return `Sport: ${this._sport}\nSections: ${this._section}\nPlayer Name: ${this._name}\nSince: ${this._since}`;
    }
}
let output = new Sport("Football");
let outputTwo = new Player("Ronaldo", 2002, "Football", "Striker");
console.log(output.returnSportDetail());
console.log(outputTwo.returnSportDetail());
