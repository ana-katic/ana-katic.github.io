//--> button btn-mobile-nav

  const btnNavEl = document.querySelector('.btn-mobile-nav');

// class nav-open --> to the header

  const headerEL = document.querySelector('.header');

  btnNavEl.addEventListener('click', function() {
  headerEL.classList.toggle('nav-open');
});


// JavaScript functionality to the "Blog" button
  const blogButton = document.getElementById('blogButton');

  blogButton.addEventListener('click', function () {
// Specify the URL to navigate to
  const blogUrl = blogButton.getAttribute('href');

// Navigate to the specified URL
  window.location.href = blogUrl;
});


/* smooth scrolling animation */

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
  });
});

// <!-- JS slide show code -->

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function(){
  let slides = document.querySelectorAll('.slides');
  slider.appendChild(slides[0])
});

prev.addEventListener('click', function(){
  let slides = document.querySelectorAll('.slides');
  slider.prepend(slides[slides.length - 1]);
});