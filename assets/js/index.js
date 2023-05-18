window.addEventListener('load', function() {
    const preloader = document.querySelector('#preloader');
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 500);
  });



  const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        totop.classList.add("active");
    } else {
        totop.classList.remove("active");
    }
})



window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".link-nav");
  if (window.pageYOffset > 110) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

AOS.init();

























