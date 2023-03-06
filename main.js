const sections = document.querySelectorAll('.section');
const navLi = document.querySelectorAll("#topnav ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {this.hash
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
  

anchorLinks = document.querySelectorAll("#topnav ul li a")
anchorLinks.forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();
        let destination = document.querySelector(this.hash);
        var headerOffset = 70;
        var elementPosition = destination.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});