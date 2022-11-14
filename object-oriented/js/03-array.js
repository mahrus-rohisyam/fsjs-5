let array = [1, [1 , 2], [3, 4], [1, [2]], 5, 6]

// console.log(array[2][1]);
// console.log(array[5]);

let array2 = [
  {
    name: "John",
    age: 21,
    state: "America"
  },
  {
    name: "Doe",
    age: 22,
    state: "California"
  },
  {
    name: "Foo",
    age: 23,
    state: "Australia"
  }
]

let array3 = [
  {
    name: "John",
    age: 21,
    state: "America",
    grade: [90, 80, 70]
  },
  {
    name: "Doe",
    age: 22,
    state: "California",
    grade: [90, 80, 70]
  },
  {
    name: "Foo",
    age: 23,
    state: "Australia",
    grade: [90, 80, 70]
  }
]

console.log(array2[1].name);