/*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var sumOfSquares = 0
var squareOfSums = 0
var result = 0

for (var a = 1; a <= 100; a++) {
  sumOfSquares += a * a
}

for (var a = 1; a <= 100; a++) {
  squareOfSums += a
}

squareOfSums *= squareOfSums
result = squareOfSums - sumOfSquares

console.log(result)