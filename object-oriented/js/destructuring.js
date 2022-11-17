let array1, array2, array3, object1, object2, object3;

array1 = ["Apple", "Orange", "Mango"];
array2 = ["Kiwi", "Melon"];
array3 = ["Pineapple"];

// Spread operator
/**
 * Untuk memecah isi (e.g memecah array atau object)
 */
// let newArray = [...array1, ...array2, ...array3]
// console.log(newArray);

object1 = { names: "Sinta", age: 21, array: [{ gradeMath: 10 }] };
object2 = { domisili: "Jawa Barat" };
object3 = { kodePos: 17777 };
let newObject = {...object1, names: 'Russ'}

// const newObject = { ...object1, ...object2, ...object3 };

const { names, age, array } = object1;

console.log(names, age, array[0].gradeMath);
