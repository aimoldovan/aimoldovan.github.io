var activePage = "skills";
//utilities functions

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  console.info("hide %o element", id);
  $(`#${id}`).style.display = "none";
}

function show(id) {
  var page = $("#" + id);
  console.info("show %o", id, page);
  page.style.display = "block";
}

function showPage(id) {
  var oldLink = $(`#top-menu-bar a[data-page=${activePage}]`);
  oldLink.classList.remove("active");

  hide(activePage);

  activePage = id;

  var link = $(`#top-menu-bar a[data-page=${id}]`);
  link.classList.add("active");

  show(activePage);
}
function clickOnMenu(e) {
  var link = e.target.closest("a");
  // console.warm("click", link, e.target);
  if (link) {
    var id = link.dataset.page;
    // console.warn("click %o menu", e.target.getAttribute("data-page"));
    console.warn("click %o menu", id);
    if (id) {
      showPage(id);
    }
  }
}
function sortByEndorsements(a, b) {
  return b.endorsement - a.endorsement;
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function showSkills(skills) {
  skills.sort(sortByEndorsements);
  var htmlSkills = skills.map(function (skill) {
    var cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name} <span>- ${skill.endorsement}</span></li>`;
  });
  var ul = $("#skills ul");
  ul.innerHTML = htmlSkills.join("");
}

function loadSkills() {
  var response = fetch("skills.json");
  var loaded = response.then(function (r) {
    return r.json();
  });
  loaded.then(function (skills) {
    showSkills(skills);
  });
  // ...
}

//start our code

showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
loadSkills();
