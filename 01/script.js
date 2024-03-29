// progresszív fejlesztés: meglévő tartalom felokosítása
// "unobtrusive js": az oldal funkciója nem függ attól, hogy van-e JS (max egy kicsit bénább)
// eléggé korlátozó megközelítés és gyakorlatban is nehéz megvalósítani


// #################
// 1 / naív megoldás
// #################

// const links = document.querySelectorAll("nav a");

// console.log(links);

// links.forEach(link => {
//     link.addEventListener("click", event => {
//         // alap link működés kikapcsolása
//         event.preventDefault();

//         // ki kell választani azt ami a linkre mutat
//         // string behelyettesítés
//         // az első # utáni részt vesszük
//         const id = event.target.href.split("#")[1];

//         const element = document.querySelector(`#${id}`);

//         console.log(element);

//         // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
//         // scrollIntoViewOptions objektumot adunk át
//         element.scrollIntoView({behavior: "smooth"});
//     });
// })

// kicsit ügyesebb megoldás: delegálás

// #############
// 1 / delegálás
// #############

const nav = document.querySelector("nav");

// delegálás: eseményt nem az elemen hanem annak szülőjén kezeljük
// a gyerekelem eseményei annak szülőiben is bekövetkeznek "felbuborékoznak"
// szülőra regisztrált eseménykezelőbe az eseményleíró objektumból ki tudjuk találni pontosan hova érkezett az esemény

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

// #######
// 1 / CSS
// #######

// JS csak egy szelete a kliensoldalnak (HTML, CSS, JS)
// nem kell mindent JS-el megoldani
// https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
// lásd: style.css

// #########
// 2 / natív
// #########

// ötlet: figyeljük a scroll eseményt
// probléma: egyetlen görgetés hatására alsóhangon 30 esemény történik, ez gyakran felesleges
// ha költséges számítás van kifjezetten be tud zavarni
// pl infite scrollinghoz kötött adatlekérés
// megoldás: throttling (lehetséges implementáció egy lock)

// let lock = false;

function onScroll() {
    nav.classList.toggle("navbar-scrolled", window.scrollY > 200)
}

// document.addEventListener("scroll", () => {
//     if (!lock) {
//         lock = true;
//         onScroll();
//         setTimeout(() => lock = false, 100)
//     }
// })


// ############
// 2 / könyvtár
// ############

// JS ökoszisztéma nagyon színes
// legtöbb dologra már van megoldás
// sokszor érdemes ezekhez nyúlni
// kész megoldás: lodash throttle wrapper függvény
// lodash különböző utility dolgokat tartalmaz
// behúzás script tagen keresztül (lásd landing_page.html)
// Content Delivery Network: erőforrás több helyen is létezik, így hozzád közelebbi szerverről van lehetőséged letölteni
// valamilyen időközönként szinkronizálnak
// legnagyobb: https://www.jsdelivr.com/

document.addEventListener("scroll", _.throttle(onScroll, 200));

// ###########
//      3  
// ###########

// azt figyelni hogy valami látható-e kifejzetten nehéz feladat (sok dologra kell figyelni, matekozni stb.)
// matek: http://webprogramozas.inf.elte.hu/webprog-client/lectures/01/#/m%C3%A9retek-6

// szerencsére van egy API amivel ez könnyen figyelhető
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// Intersection Observer bizonyos, megfigyelt elemek láthatóságát vizsgálja
// egy options obejektummal paraméterezzük fel

// megfigyelő beállításai
const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.5, 1.0],
};

// mi fusson le a metszés észrevételkor
function onObserve(entries) {
    // függvény automatikusan megkap egy entries tömböt
    entries.forEach(entry => {
        // ha isIntersecting igaz akkor az adott elem a viewportban van
        // egyszerre több is lehet metszésben
        // figyelt elemet IntersectionObserverEntry objektum target adattagján keresztül érhető el
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", `animate__${entry.target.dataset.scrollAnimation}`)
            console.log("asd");
        }
    });
}

// példányosítás
let observer = new IntersectionObserver(onObserve, options);

// figyelendő elemeket regisztrálni kell
const animated = document.querySelectorAll("[data-scroll]");

for (const element of animated) {
    observer.observe(element);
}