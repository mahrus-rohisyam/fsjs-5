class Sport {
  _sport: string;

  constructor(sport: string){
    this._sport = sport;
  }

  returnSportDetail(): string {
    return `Sport: ${this._sport}`
  }
}

class Player extends Sport {
  _name: string;
  _since: number;
  _section: string;

  constructor(name: string, since: number, _sport: string, section: string){
    super(_sport)
    this._name = name;
    this._since = since;
    this._section = section;
  }

  returnSportDetail(): string {
    return `Sport: ${this._sport}\nSections: ${this._section}\nPlayer Name: ${this._name}\nSince: ${this._since}`
  }

}

let output: Sport = new Sport("Football");
let outputTwo: Player = new Player("Ronaldo", 2002, "Football", "Striker")
console.log(output.returnSportDetail());
console.log(outputTwo.returnSportDetail());
