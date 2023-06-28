let activePage = "skills";
//utilities functions

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  // console.info("hide %o element", id);
  $(`#${id}`).style.display = "none";
}

function show(id) {
  const page = $("#" + id);
  // console.info("show %o", id, page);
  page.style.display = "block";
}

function showPage(id) {
  const oldLink = $(`#top-menu-bar a[data-page=${activePage}]`);
  oldLink.classList.remove("active");

  hide(activePage);

  activePage = id;

  const link = $(`#top-menu-bar a[data-page=${id}]`);
  link.classList.add("active");

  show(activePage);
}
function clickOnMenu(e) {
  const link = e.target.closest("a");
  // console.warm("click", link, e.target);
  if (link) {
    const id = link.dataset.page;
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
  const htmlSkills = skills.map((skill) => {
    const cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name} <span>- ${skill.endorsement}</span></li>`;
  });
  const ul = $("#skills ul");
  ul.innerHTML = htmlSkills.join("");
}

function loadSkills() {
  const response = fetch("skills.json");
  const loaded = response.then((r) => {
    return r.json();
  });
  loaded.then((skills) => {
    showSkills(skills);
  });
  // ...
}

//start our code

showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
loadSkills();
