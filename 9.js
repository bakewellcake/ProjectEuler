/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var result = 0

for (var a = 0; a < 1000; a++) {
  for (var b = 0; b < 1000; b++) {
    for (var c = 0; c < 1000; c++) {
      var lessThan = a < b && b < c
      var squared = (a * a) + (b * b) === (c * c)
      var thousand = a + b + c === 1000

      if (lessThan && squared && thousand) {
        result = a * b * c
        break
      }
    }
  }
}

console.log(result)