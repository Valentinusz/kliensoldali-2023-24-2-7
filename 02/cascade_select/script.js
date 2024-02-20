// const select = document.querySelector('select[name="pets"]')

// const groups = select.querySelectorAll('optgroup');

// const groupNames = [...groups].map(groupElement => groupElement.label)

// const containerDiv = document.createElement('div');

// select.insertAdjacentElement('afterend', containerDiv);

// select.style.display = 'none'

// const groupSelect = document.createElement('select');

// groupNames.forEach(name => {
//     const option = document.createElement('option');

//     option.innerText = name;

//     groupSelect.append(option)    
// });

// containerDiv.append(groupSelect)

// groupSelect.addEventListener('change', event => {
//     pickedGroupSelect.name = ""
//     pickedGroupSelect.style.display = "none"

//     pickedGroupSelect = containerDiv.querySelector(`select[data-group="${event.target.value}"]`);

//     console.log(pickedGroupSelect);
    

//     pickedGroupSelect.style.display = ""
//     pickedGroupSelect.name = "pets"
// })

// for (const group of groups) {
//     const petSelect = document.createElement('select');
//     petSelect.dataset.group = group.label;

//     for (const child of group.children) {
//         const option = document.createElement('option');

//         option.value = child.value;
//         option.innerText = child.innerText;

//         petSelect.append(option);
        
//     }
//     petSelect.style.display = "none"

//     containerDiv.append(petSelect)
// }

// let pickedGroupSelect = containerDiv.children[1];
// pickedGroupSelect.style.display = ""
// pickedGroupSelect.name = "pets"

// select.remove();

class CascadeSelect extends HTMLElement {
    pickedGroupSelect;

    constructor() {
        super();
    }

    connectedCallback() {
        const select = document.querySelector('select[name="pets"]')

        const groups = select.querySelectorAll('optgroup');

        const groupNames = [...groups].map(groupElement => groupElement.label)

        const groupSelect = document.createElement('select');

        groupNames.forEach(name => {
            const option = document.createElement('option');

            option.innerText = name;

            groupSelect.append(option)    
        });

        this.append(groupSelect)

        groupSelect.addEventListener('change', this.changeGroup)

        for (const group of groups) {
            const petSelect = document.createElement('select');
            petSelect.dataset.group = group.label;

            for (const child of group.children) {
                const option = document.createElement('option');

                option.value = child.value;
                option.innerText = child.innerText;

                petSelect.append(option);
                
            }
            petSelect.style.display = "none"

            this.append(petSelect)
        }

        this.pickedGroupSelect = this.children[2];
        this.pickedGroupSelect.style.display = ""
        this.pickedGroupSelect.name = "pets"

        select.remove();
    }

    changeGroup = (event) => {
        console.log(this);

        this.pickedGroupSelect.name = ""
        this.pickedGroupSelect.style.display = "none"

        this.pickedGroupSelect = this.querySelector(`select[data-group="${event.target.value}"]`)

        this.pickedGroupSelect.style.display = ""
        this.pickedGroupSelect.name = "pets"
    }
}

customElements.define('cascade-select', CascadeSelect);




