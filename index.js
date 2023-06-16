function hideAllPages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

// // function showHome() {
// //   hideAllPages();
// //   var page = document.getElementById("home");
// //   page.style.display = "block";
// // }

// // function showSkills() {
// //   // document.getElementById("home").style.display = "none";
// //   hideAllPages();
// //   var page = document.getElementById("skills");
// //   page.style.display = "block";
// }

// function showLanguages() {
//   showPage("languages");
// }
// function showProjects() {
//   showPage("projects");
// }

function showPage(id) {
  hideAllPages();
  var page = document.getElementById(id);
  console.info(showPage);
  page.style.display = "block";
}

showPage("home");
