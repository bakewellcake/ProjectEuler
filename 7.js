/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var count = 0
var result = 0
var value = 2

function isPrime(n) {
  if (n <= 1) return false
  if (n <= 3) return true

  if (n % 2 == 0 || n % 3 == 0) return false

  for (var a = 5; a * a <= n; a = a + 6) {
    if (n % a === 0 || n % (a + 2) === 0) {
      return false
    }
  }

  return true
}

while (result === 0) {
  var prime = isPrime(value)

  if (prime === true) {
    count++
  }

  if (count === 10001) {
    result = value
  } else {
    value++
  }
}

console.log(result)