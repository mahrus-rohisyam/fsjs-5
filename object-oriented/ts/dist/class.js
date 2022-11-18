"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Behavior {
    constructor(habit, hasTail) {
        this._habit = '';
        this._hasTail = false;
        this._habit = habit;
        this._hasTail = hasTail;
    }
    printHabits() {
        return `${this._habit} ${this._hasTail}`;
    }
}
class Animal extends Behavior {
    constructor(name, feet, age, hasPaws, _habit, _hasTail) {
        super(_habit, _hasTail);
        this._name = '';
        this._feet = 0;
        this._hasPaws = false;
        this._age = 0;
        this._name = name;
        this._hasPaws = hasPaws;
        this._age = age;
        this._feet = feet;
    }
    printAll() {
        // return `${this.name} ${this.feet} ${this.age} ${this.hasPaws}`
        console.log(`${this._name} ${this._feet} ${this._age} ${this._hasPaws}`);
        return;
    }
}
exports.default = Animal;
