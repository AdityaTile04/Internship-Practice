// Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.

var a = 4;

function greet() {
  b = "hello";
  console.log(b);
  var b;
}

greet();
console.log(b);
