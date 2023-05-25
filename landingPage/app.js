/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('.navbar__menu');
const navBarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * 
 * FUNCTIONS
 * 
*/
// FUNCTION BUILDS NAV- CREATE/APPEND li-- links to section id
function navBuilder(){
    sections.forEach(section => {
        const navItem = document.createElement('li');
        navItem.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navBarList.appendChild(navItem);
    });
    navBar.appendChild(navBarList);
}

navBuilder();

//  CHANGE ACTIVE CLASS TO CURRENT VIEWED SECTION
// USE TO GET RELATIVE POSITION AND SIZE OF ELEMENT- GET LARGEST VALUE LESS OR EQUAL TO THE NUMBER
const offset = (section) =>{
    return Math.floor(section.getBoundingClientRect().top);
};

// FUNCTION REMOVES THE ACTIVE CLASS
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText ="background-color: none;";
};

// FUNCTION ADDS ACTIVE CLASS
const addActive = (condition, section) => {
    if (condition){
        section.classList.add('your-active-class');
        section.style.cssText ="border: 5px solid hsla(202, 89%, 50%, 0.57); background-color: hsla(0, 0%, 48%, 0.64); ";

    };
};


// FUNCTION TO CHECK ACTIVE SECTION 

const sectionActivation = () => {
    // loop through all sections
    sections.forEach(section => {
        const elementOffset = offset(section);

        // condition to add active function-- test to see if element offset 
        inviewport = () => elementOffset < 300 && elementOffset >=-300;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);

// SCROLL BEHAVIOR
const links = document.querySelectorAll("#navbar__list ul li a");
for (const link of links){
    link.addEventListener("click", clickHandler);
}

function clickHandler(event){
    event.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector("href").offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}



