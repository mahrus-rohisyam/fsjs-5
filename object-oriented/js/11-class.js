/**
 * Class tanpa constructor
 */

class Hello {
  string = "Hi";

  printString () {
    console.log(this.string);
  }

  methodKedua(){
    this.printString();
  }
}

let hello = new Hello();
// hello.printString();

/**
 * Class dengan constructor
 */

class Kalkulasi {
  _propertiX = 0;
  _propertiY = 1;

  constructor (propertiA, propertiB) {
    this._propertiX = propertiA;
    this._propertiY = propertiB;
  }

  methodPertama(){
    console.log(this._propertiX, this._propertiY);
    return this._propertiX + this._propertiY
  }

  methodKedua(){
    return this._propertiX * this._propertiY
  }

  methodKetiga(input){
    return "Kode ini akan mencetak input yang diberi, yakni: " + input;
  }
}
let testing = new Kalkulasi(5, 10);
console.log(testing.methodKetiga());
// console.log(testing.methodKetiga("Hello world"));
