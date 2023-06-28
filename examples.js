var employed = false; // boolean
var age = 24; // number
var name = "First Last"; // string

// object (array)
var skills = ["html", "css", "js"];
// object (json)
var person = {
  employed: true,
  age: 29,
};
// object (DOM, other)
var el = document.getElementById("el");

function printInfo() {
  console.log(typeof skills, skills, age);
  console.log("my name", name);
  console.warn("person type", typeof person, person);
}

var fVariable = () => {
  console.info("functie ca variabila");
};

var f1Variable = function () {
  console.info("functie ca variabila");
};

printInfo();
fVariable();

console.info("t1", typeof printInfo, printInfo);
console.info("t2", typeof fVariable, fVariable);
console.info("t4", typeof f1Variable, f1Variable);
