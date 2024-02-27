class TextAreaWithLength extends HTMLElement {
    static #template = document.querySelector('template#textarea-template')

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.append(TextAreaWithLength.#template.content.cloneNode(true));

        const textarea = shadowRoot.querySelector('textarea');
        textarea.name = this.getAttribute('name');

        const charSpan = shadowRoot.querySelector('span');
        const charCounter = shadowRoot.querySelector('span.char-count');

        shadowRoot.addEventListener('input', () => {
            console.log(textarea.value.length);
            charCounter.innerText = textarea.value.length;

            charSpan.classList.toggle('error', textarea.value.length > 25)
        })
    }
}

document.querySelector('form').addEventListener('input', () => {
    // események kijutnak a shadow domból
    console.log("asd");
})

customElements.define('textarea-length', TextAreaWithLength);