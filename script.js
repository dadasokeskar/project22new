var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);


var ms="extension of a filename="
console.log(ms);
filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());

var msg3="triple their sum="
console.log(msg3);

function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));
  