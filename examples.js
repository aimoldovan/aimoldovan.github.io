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

console.log(typeof skills, skills, age);
console.log("my name", name);

console.warn("person type", typeof person, person);
