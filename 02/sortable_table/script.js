/**
 * @param {HTMLTableElement} table 
 */
// function sortableTable(table) {
//     const tBody = table.tBodies[0];

//     table.addEventListener('click', event => {
//         if (!event.target.matches('th')) {
//             return;
//         }

//         const cellIndex = event.target.cellIndex;

//         const rows = [...tBody.rows];

//         const firstRow = rows.shift();

//         tBody.innerText = "";

//         tBody.append(firstRow)

//         tBody.append(...rows.sort((a, b) => a.cells[cellIndex].innerText.localeCompare(b.cells[cellIndex].innerText)))
//     })
// }

// sortableTable(document.querySelector('table'))


// class SortableTable {
//     tBody;

//     constructor(table) {
//         this.tBody = table.tBodies[0];

//         table.addEventListener('click', event => {
//             if (!event.target.matches('th')) {
//                 return;
//             }

//             this.sort(event.target.cellIndex);
//         })
//     }

//     sort(cellIndex) {
//         const rows = [...this.tBody.rows];
    
//         const firstRow = rows.shift();

//         this.tBody.innerText = "";

//         this.tBody.append(firstRow)

//         this.tBody.append(...rows.sort((a, b) => a.cells[cellIndex].innerText.localeCompare(b.cells[cellIndex].innerText)))
//     }
// }

// new SortableTable(document.querySelector('table'))


// class SortableTable {
//     tBody;

//     constructor(table) {
//         this.tBody = table.tBodies[0];

//         table.addEventListener('click', event => {
//             if (!event.target.matches('th')) {
//                 return;
//             }

//             this.sort(event.target.cellIndex);
//         })
//     }

//     sort(cellIndex) {
//         const rows = [...this.tBody.rows];
    
//         const firstRow = rows.shift();

//         this.tBody.innerText = "";

//         this.tBody.append(firstRow)

//         this.tBody.append(...rows.sort((a, b) => a.cells[cellIndex].innerText.localeCompare(b.cells[cellIndex].innerText)))
//     }
// }

// személyre szabott
class SortableTable extends HTMLTableElement {
    tBody;

    constructor() {
        super();

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

customElements.define('sortable-table', SortableTable, {"extends": "table"});