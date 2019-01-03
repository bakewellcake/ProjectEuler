/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// UNSOLVED

var num = 600851475143
var half = Math.ceil(num / 2) + 1
var compare = [2, 3, 4, 5, 6, 7, 8, 9]
var current = half
var max = 1000000
var loop = true
var result = null
var primes = null
var arr = null

// while (current < half) {
//   var arr = []
//   for (var a = current; a < current + max; a += 2) {
//     arr.push(a)
//   }

//   current += max

//   var primes = arr.filter(a => compare.filter(b => a != b).every(b => a % b !== 0) === true)

//   for (var a = 0; a < primes.length; a++) {
//     if (num % primes[a] === 0) {
//       result = primes[a]
//       console.log(result)
//     }
//   }
// }

while (loop === true) {
  arr = []
  for (var a = current; a > current - max; a -= 2) {
    arr.push(a)
  }

  current -= max

  primes = arr.filter(a => compare.filter(b => a != b).every(b => a % b !== 0) === true)

  for (var a = 0; a < primes.length; a++) {
    result = primes[a]
    // process.stdout.write(`Current prime: ${result}\r`)

    if (num % result === 0) {
      loop = false

      console.log(`\nRESULT: ${result}`)
    }
    result = null
  }

  primes = null
  arr = null
}

// var num = 600851475143
// var half = Math.ceil(num / 2) + 1
// var value = 2

// function isPrime(n) {
//   if (n <= 1) return false
//   if (n <= 3) return true

//   if (n % 2 == 0 || n % 3 == 0) return false

//   for (var a = 5; a * a <= n; a = a + 6) {
//     if (n % a === 0 || n % (a + 2) === 0) {
//       return false
//     }
//   }

//   return true
// }

// while (value < half) {
//   var prime = isPrime(value)

//   if (prime === true && num % value === 0) {
//     console.log(value)
//   }

//   value++
// }