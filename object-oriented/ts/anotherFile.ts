import Hewan from "./class"


const newAnimal: Hewan = new Hewan("Harimau", 3, 2, true, 'Di Air', false);
newAnimal._name = "Kucing"

console.log(newAnimal.printHabits());


