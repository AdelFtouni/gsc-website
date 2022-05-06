// const search = document.getElementById("enterDetails");

// search.addEventListener("click", openRightDiv);


// function openRightDiv(event) {



//     event.preventDefault();
//     rightdiv.style.display = "flex";





// }


AOS.init();

AOS.init({
    startEvent: 'click'
  });

// Grap elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Something went, make sure that $(selector) exists or is typed correctly.`);
};


// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);