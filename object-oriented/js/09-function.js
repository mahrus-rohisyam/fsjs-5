let a, b, c, d, e, f, g;

a = 10
b = 10
/**
 * Fungsi native
 * function namaFunction(argumen) {action}
 * - Argumen adalah kumpulan dari parameter
 * - Cara pemanggilan adalah namaFunction(argumen)
 */

function fungsiPertama() {
  console.log(a + b);
}
// fungsiPertama()

function fungsiKedua(parameterPertama, parameterKedua) {
  console.log("Ini parameter pertama " + parameterPertama);
  console.log("Ini parameter kedua " + parameterKedua);
  console.log(parameterPertama + parameterKedua);
}
// fungsiKedua("Hello", "World")

function fungsiKetiga(parameterPertama = 2, parameterKedua = 3) {
  console.log("Ini parameter pertama " + parameterPertama);
  console.log("Ini parameter kedua " + parameterKedua);
  console.log(parameterPertama - parameterKedua);
}
// fungsiKetiga(12, 32)

function fungsiKeempat(parameterPertama = 2, parameterKedua = 2) {
  console.log("Ini parameter pertama " + parameterPertama);
  console.log("Ini parameter kedua " + parameterKedua);
  console.log(parameterPertama + parameterKedua);
}

/**
 * Fungsi yang menggunakan variable
 * Komponen utama:
 * - const fungsiVariable =       Variablenya
 * - function (argumen) {action}  Fungsinya (Komponen utama function)
 */

const fungsiVariable = function (a, b) {
  console.log(a + b);
};
// fungsiVariable(5, 10)

/**
 * Fungsi yang menggunakan tanda panah (Arrow Function)
 * - const arrowPertama =   Variablenya
 * - (argumen) => {action}  Fungsinya (Komponen utama function)
 */

const arrowPertama = (a, b) => {
  console.log(a + b);
};
