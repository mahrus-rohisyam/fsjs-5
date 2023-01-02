export default class ThreeDimensional {
  private _constant: number = 3.14;
  private _diameter: number;

  constructor(diameter: number) {
    this._diameter = diameter;
  }

  get constant(): number {
    return this._constant;
  }

  get diameter(): number {
    return this._diameter;
  }

  volume(): number {
    return this._diameter * this._diameter * this._constant;
  }
}