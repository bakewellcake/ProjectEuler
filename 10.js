/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
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

while (value < 2000000) {
  var prime = isPrime(value)

  if (prime === true) {
    result += value
  }

  value++
}

console.log(result)