let array = [{nama: 'Mahrus', prodi: 'Informatika', ipk: [4, 4, 4]}, 'Kiwi', 'Orange']
// console.log(array.length);
// array[0]
// array[1]
// array[2]

// i => 0, 1, 2 

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//   // console.log(array[0]); // Apples
//   // console.log(array[1]); // Kiwi
//   // console.log(array[2]); // Orange
// }

array.map((value, index) => {
  console.log(index, value);
})