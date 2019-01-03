/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var result = 0
var count = 1
var compare = []
var max = 20

for (var a = 1; a <= max; a++) {
  compare.push(a)
}

while (result === 0) {
  var divisible = compare.every(a => count % a === 0)

  if (divisible === true) {
    result = count
  } else {
    count++
  }
}

console.log(result)