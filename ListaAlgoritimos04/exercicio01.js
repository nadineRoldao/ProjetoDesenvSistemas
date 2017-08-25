/* Nadine - 24/08/17 - exercicio 01 da lista 04 */
var a = 1;
var b = 1;
var c = 1;
var va = a < (b + c);
var vb = b < (a + c);
var vc = c < (b + a);

if (va && vb && vc) {
	console.log("Os valores dos lados formam um triângulo: " + a + ", " + b + ", " + c);
}else {
	console.log("Os valores dos lados não formam um triângulo");
}