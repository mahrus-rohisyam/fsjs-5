// JSON.stringify itu gunanya mengubah data mentah menjadi string
let result = document.querySelector('#result p');
console.log(result)

/**
 * Menghasilkan output HTML Collection (Jamak) dengan
 * parameter Nama Tag Elemen HTML
 */
let h1 = document.getElementsByTagName('h1');
// console.log(h1);
// h1[0].textContent = "SALT Academy";
// h1[1].textContent = "Selamat Datang";
for (let i = 0; i < h1.length; i++) {
  h1[i].style = "background-color: red; color: white;";
}

h1[0].style = "background-color: red; color: blue;";

/**
 * Menghasilkan output HTML Element (Tunggal)
 * dengan parameter Nama ID Elemen HTML
 */
let judulH1 = document.getElementById("judul");
// console.log(judulH1);
// judulH1.innerHTML = "<em>Test<em>"
// judulH1.textContent = "<em>Test<em>"

/**
 * Menghasilkan output HTML Collection (Jamak)
 * dengan parameter Nama Class
 */
let containerClass = document.getElementsByClassName("container");

// console.log(containerClass);

/**
 * QuerySelectorAll return Node List
 */

let queryContainer = document.querySelectorAll(".container")
// console.log(queryContainer);

// let singleQuery = document.querySelector("");















































// const p1 = document.getElementsByClassName("p1");
// // const p = document.getElementsByTagName("p");

// for (let i = 0; i <= p.length; i++) {
//   if (i > 1) {
//     p[i].style.fontWeight = "bolder";
//   } else if (i == 0) {
//     p[i].style.fontSize = "larger";
//   }
// }

// const p4 = document.querySelector("#b p");
// const li2 = document.querySelector("section ul li:nth-child(2)");
// console.log(p4);
// console.log(li2);
// p4.style.backgroundColor = "red";
// li2.style.backgroundColor = "salmon";