// Feladatsor: https://canvas.elte.hu/courses/43806/pages/feladatsor?module_item_id=641394

// #######################
// 1 - rendezhető táblázat
// #######################

// célunk: valahogy egységbe zárni a felületi elemeket
// három réteg: struktúra (html), megjelenés (css), viselkedés (js)
// komponens: újrahasználható, más kódoktól izolált csoport


// ########
// függvény
// legegyszerűbb megoldás
// buta táblázat -> rendezhetó táblázat

/**
 * @param {HTMLTableElement} table 
 */
function sortableTable(table) {
    const tBody = table.tBodies[0];

    table.addEventListener('click', event => {
        if (!event.target.matches('th')) {
            return;
        }

        const cellIndex = event.target.cellIndex;

        // rows: HTMLCollection
        // ... destrukturálás ...rows = row1, row2, ...
        // [...row] destrukturál majd egy tömbbe rakja
        // érdemes megjegyezni egész gyakran használjuk
        const rows = [...tBody.rows];

        const firstRow = rows.shift();

        tBody.innerText = "";

        // append váltakozó számú paramétert vár
        tBody.append(firstRow, ...rows.sort((a, b) => a.cells[cellIndex].innerText.localeCompare(b.cells[cellIndex].innerText)))
    })
}

// sortableTable(document.querySelector('table'))

// jogos kérdés: ha már lefutott a függvény, hogyan tudja az eseménykezelő mégis elérni a tableBody változót?
// válasz: függvény és lexikális környezete (általa használt változók) egységet ún. closure-t alkotnak
// a lefutást követően is elérhetőek maradnak
// majd ha minden változó elérhetetlenné vált fog felszabadulni


// #######
// osztály
// a függvényt könnyen át tudjuk alakítani osztállyá

class SortableTableClass {
    tBody;

    constructor(table) {
        this.tBody = table.tBodies[0];

        table.addEventListener('click', event => {
            if (!event.target.matches('th')) {
                return;
            }

            this.sort(event.target.cellIndex);
        })
    }

    sort(cellIndex) {
        const rows = [...this.tBody.rows];
    
        const firstRow = rows.shift();

        this.tBody.innerText = "";

        this.tBody.append(firstRow, ...rows.sort((a, b) => a.cells[cellIndex].innerText.localeCompare(b.cells[cellIndex].innerText)))
    }
}

// new SortableTableClass(document.querySelector('table'))

// ###############
// custom elements

// natívan biztosított megoldás saját elemek definiálásra
// webcomponents api egy része
// önmagában nem enkapszulál

// két típus:
// - személyre szabott (customized): meglévő HTML elemet egészítenek ki
// - önálló (autonomous): teljesen új viselkedést/jelleget definiál

// ##########
// customized
class SortableTable extends HTMLTableElement {
    tBody;

    constructor() {
        // szülő konstruktor hívás mindig kell
        super();
        // semmi olyan műveletet nem szabad végezni ami az elem attrúbitumaitól / gyerekelemeitől függ
        // (lehet működne de nincs garancia, őszintén próbálgattam de nem jöttem rá)
        // helyette: lifecycle callbacks (pl. connectedCallback)

        // fontos eltérés az eddigi megoldássak:
        // this a konkrét személyre szabott DOM elemre hivatkozik
    }

    // DOM-ba kerüléskor fut le
    connectedCallback() {
        this.tBody = this.tBodies[0];

        this.addEventListener('click', event => {
            if (!event.target.matches('th')) {
                return;
            }

            this.sort(event.target.cellIndex);
        })
    }

    sort(cellIndex) {
        const rows = [...this.tBody.rows];
    
        const firstRow = rows.shift();

        this.tBody.innerText = "";

        this.tBody.append(firstRow)

        this.tBody.append(...rows.sort((a, b) => a.cells[cellIndex].innerText.localeCompare(b.cells[cellIndex].innerText)))
    }
}

// a saját elemeket regisztrálni kell
// név formátum fontos: kisbetűvel kezdődik, van benne legalább egy kötőjel
// kell még egy options tömb is
// itt customized element esetén kötelesek vagyunk megadni, hogy milyen HTML elemet terjesztünk ki
customElements.define('sortable-table', SortableTable, {"extends": "table"});

// ezt követően ha az is="sortable-table" attribútumot adjuk egy elemnek automatikusan a kiterjesztett elemünkké válik
// ha megvizsgáljuk a böngésző console-t láthatjuk hogy megtörténik a connectedCallback-ben szereplő kiíratás

// ####
// alternatív megoldás:
// attribútum alapú vezérlés

class SortableTableAttr extends HTMLTableElement {
    // figyelt attribútumok
    static observedAttributes = ["order"];

    tableBody;

    constructor() {
        super();
    }

    connectedCallback() {
        this.tableBody = this.tBodies[0];

        this.addEventListener('click', event => {
            if (!event.target.matches('th')) {
                return;
            }

            // attribútum érték állítása
            this.setAttribute('order', event.target.cellIndex)
        });
    }

    /**
     * @param {number} cellIndex 
     */
    sort(cellIndex) {
        const rows = [...this.tableBody.rows];

        const firstRow = rows.shift();

        const sortedRows = rows.sort((a, b) => a.children[cellIndex].innerText.localeCompare(b.children[cellIndex].innerText))

        this.tableBody.innerHTML = "";

        this.tableBody.append(firstRow, ...sortedRows)
    }

    // ha változott valamelyik figyelt attribútum lefut
    attributeChangedCallback(name, oldValue, newValue) {
        this.sort(newValue)
    }    
}


customElements.define('sortable-table-attr', SortableTableAttr, {"extends": "table"});