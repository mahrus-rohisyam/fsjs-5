export default class Calculate {
  private _fparam: number;
  private _sparam: number;

  constructor(fparam: number, sparam: number) {
    this._fparam = fparam;
    this._sparam = sparam;
  }

  get fparam(): number {
    return this._fparam;
  }

  get sparam(): number {
    return this._sparam;
  }

  addition(): number {
    return this._fparam + this._sparam;
  }
}
