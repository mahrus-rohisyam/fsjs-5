class Behavior {
  _habit: string = '';
  _hasTail: boolean = false;

  constructor(habit: string, hasTail: boolean){
    this._habit = habit;
    this._hasTail = hasTail;
  }

  printHabits(): string {
    return `${this._habit} ${this._hasTail}`
  }
}

export default class Animal extends Behavior {
  _name: string = '';
  _feet: number = 0;
  _hasPaws: boolean = false;
  _age: number = 0;

  constructor(name: string, feet: number, age: number, hasPaws: boolean, _habit: string, _hasTail: boolean) {
    super(_habit, _hasTail)
    this._name = name;
    this._hasPaws = hasPaws;
    this._age = age;
    this._feet = feet;
  }

  printAll(): void {
    // return `${this.name} ${this.feet} ${this.age} ${this.hasPaws}`
    console.log(`${this._name} ${this._feet} ${this._age} ${this._hasPaws}`);
    return;
  }
}