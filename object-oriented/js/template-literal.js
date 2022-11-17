let templateLiteral, string, array1, array2, array3, object1, object2, object3;
let a, b, c, d, e, f;

expressionOne = 10;
expressionTwo = 15

// templateLiteral = `Ini adalah expresi pertama ${expressionOne} dan kedua ${expressionTwo}`

/**
 * Bisa multi line
 * Sedangkan petik biasa tidak bisa
 */

// templateLiteral = `Yth kepada
//                   Hrd....
//                   Mahrus Sayid
//                   `
// string = "Yth, kepada"

/**
 * Bisa memanggil ekspresi (e.g variable atau function)
 */
templateLiteral = `Jumlah dari ${expressionOne} + ${expressionTwo} adalah ${expressionOne + expressionTwo}`

console.log(templateLiteral);