// --> button btn-mobile-nav

const btnNavEl = document.querySelector('.btn-mobile-nav');

// --> to the header

const headerEL = document.querySelector('.header');

btnNavEl.addEventListener('click', function() {
  headerEL.classList.toggle('nav-open');
});



//  smooth scrolling animation 

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle('nav-open');
    // here we are removing that nav-open iif it is on the header
  });
});

