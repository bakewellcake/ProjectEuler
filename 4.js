/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var result = 0

for (var a = 100; a < 1000; a++) {
  for (var b = 100; b < 1000; b++) {
    var prod = a * b
    var str = prod.toString()
    var build = []
    
    for (var c = str.length; c > -1; c--) {
      build.push(str[c])
    }

    if (str === build.join('')) {
      var palindrome = Number(str)

      if (palindrome > result) {
        result = palindrome
      }
    }
  }
}

console.log(result)