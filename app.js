// selecting the btns and the links

const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const topBtn = document.querySelector(".top-link");
const linksContainer = document.querySelector(".links-container");
const nav = document.getElementById("nav");

// ----setting date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// setting the scroll function when the window scroll is bigger than a number we want to display the fixed nav and the footer btn
window.addEventListener("scroll", function (e) {
  e.preventDefault();
  const navHeight = nav.getBoundingClientRect().height;
  let scrollHeight = window.pageYOffset;
  //   adding the footer btn
  if (scrollHeight > 500) {
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }
  //   adding the fixed nav
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  topBtn.addEventListener("click", function () {
    scrollHeight = 0;
  });
});

toggleBtn.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    //   setting the height to the linksHeight so in case we add more links the height manually
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //   prevent default means we want to remove the scrolling that we set in html and we want to set it here perfectly
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    const fixedNav = nav.classList.contains("fixed-nav");
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    // this to trigger the scrolling event we only want to scroll vertically
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
