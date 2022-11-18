"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = __importDefault(require("./class"));
const newAnimal = new class_1.default("Harimau", 3, 2, true, 'Di Air', false);
newAnimal._name = "Kucing";
console.log(newAnimal.printHabits());
