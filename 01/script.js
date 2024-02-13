// console.log("asd");

// const links = document.querySelectorAll("nav a");

// console.log(links);

// links.forEach(link => {
//     link.addEventListener("click", event => {
//         event.preventDefault();

//         const id = event.target.href.split("#")[1];

//         const element = document.querySelector(`#${id}`);

//         console.log(element);

//         element.scrollIntoView({behavior: "smooth"});
//     });
// })

const nav = document.querySelector("nav");

// console.log(nav);

// nav.addEventListener("click", event => {
//     if (!event.target.matches('a')) {
//         return;
//     }

//     event.preventDefault();

//     const id = event.target.href.split("#")[1];

//     const element = document.querySelector(`#${id}`);

//     console.log(element);

//     element.scrollIntoView({behavior: "smooth"});
// });

// let lock = false;

// document.addEventListener("scroll", () => {
//     if (!lock) {
//         lock = true;
//         nav.classList.toggle("navbar-scrolled", window.scrollY > 200)
//         setTimeout(() => lock = false, 100)
//     }
// })

console.log(_.throttle);

function onScroll() {
    nav.classList.toggle("navbar-scrolled", window.scrollY > 200)
}

document.addEventListener("scroll", _.throttle(onScroll, 200));

const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.5, 1.0],
};

function onObserve(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", `animate__${entry.target.dataset.scrollAnimation}`)
            console.log("asd");
        }
    });
}
  
let observer = new IntersectionObserver(onObserve, options);

const animated = document.querySelectorAll("[data-scroll]");

console.log(animated);

for (const element of animated) {
    observer.observe(element);
}