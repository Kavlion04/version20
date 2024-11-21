
function toggleMenu() {
  const sideMenu = document.querySelector('.side-menu');
  const isActive = sideMenu.classList.toggle('active');

  if (isActive) {
    document.body.classList.add('no-scroll');
    window.addEventListener('click', closeMenuOnClickOutside);
  } else {
    document.body.classList.remove('no-scroll');
    window.removeEventListener('click', closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const sideMenu = document.querySelector('.side-menu');
  const menuButton = document.querySelector('.menu-button');
  if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
    sideMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
    window.removeEventListener('click', closeMenuOnClickOutside);
  }
}
const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  document.body.style.overflowY = "auto";
});





for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}















const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const cardWidth = 420;
const carouselPadding = 60;

let currentIndex = 0;
let startX = 0;
let moveX = 0;
let isDragging = false;

const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, cards[0]);
carousel.style.transform = `translateX(-${carouselPadding + cardWidth}px)`;


const nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(cards.length, currentIndex + 1);
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${carouselPadding + (currentIndex + 1) * cardWidth}px)`;
});

const startDrag = (x) => {
  startX = x;
  isDragging = true;
  carousel.style.transition = 'none';
};

const moveDrag = (x) => {
  if (!isDragging) return;
  moveX = x - startX;
  carousel.style.transform = `translateX(${moveX - (carouselPadding + (currentIndex + 1) * cardWidth)}px)`;
};

const endDrag = () => {
  if (!isDragging) return;
  isDragging = false;

  if (moveX > 50) {
    currentIndex = Math.max(-1, currentIndex - 1);
  } else if (moveX < -50) {
    currentIndex = Math.min(cards.length, currentIndex + 1);
  }

  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${carouselPadding + (currentIndex + 1) * cardWidth}px)`;

  carousel.addEventListener('transitionend', () => {
    if (currentIndex >= cards.length) {
      currentIndex = 0;
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(-${carouselPadding + cardWidth}px)`;
    } else if (currentIndex === -1) {
      currentIndex = cards.length - 1;
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(-${carouselPadding + cards.length * cardWidth}px)`;
    }
  });

  moveX = 0;
};

carousel.addEventListener('touchstart', (e) => startDrag(e.touches[0].clientX));
carousel.addEventListener('touchmove', (e) => moveDrag(e.touches[0].clientX));
carousel.addEventListener('touchend', endDrag);

carousel.addEventListener('mousedown', (e) => startDrag(e.clientX));
carousel.addEventListener('mousemove', (e) => {
  if (isDragging) e.preventDefault();
  moveDrag(e.clientX);
});
carousel.addEventListener('mouseup', endDrag);
carousel.addEventListener('mouseleave', () => {
  if (isDragging) endDrag();
});
const initializeCarousel = () => {
  if (window.innerWidth <= 700) {
    carousel.style.cursor = 'grab';
  } else {
    carousel.style.cursor = 'auto';
  }
};

initializeCarousel();
window.addEventListener('resize', initializeCarousel);









function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const icon = element.querySelector(".icon");

  // Close other open accordions
  const allItems = document.querySelectorAll(".accordion-content");
  allItems.forEach((item) => {
    if (item !== content) {
      item.style.display = "none";
      const itemIcon = item.previousElementSibling.querySelector(".icon");
      itemIcon.textContent = "+";
      itemIcon.classList.remove("open");
    }
  });

  // Toggle the clicked accordion
  if (content.style.display === "block") {
    content.style.display = "none";
    icon.textContent = "+";
    icon.classList.remove("open");
  } else {
    content.style.display = "block";
    icon.textContent = "×";
    icon.classList.add("open");
  }
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
