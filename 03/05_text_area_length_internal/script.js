class TextAreaWithLength extends HTMLElement {
    // ha ez jelen van állítható válik mi küldődjön el ha az elem űrlapbban van
    static formAssociated = true;
    static #template = document.querySelector('template#textarea-template')

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'closed'});

        // az űrlapérték állítása az internals objektumon keresztül állítható
        const internals = this.attachInternals();

        shadowRoot.append(TextAreaWithLength.#template.content.cloneNode(true));

        const textarea = shadowRoot.querySelector('textarea');
        textarea.name = this.getAttribute('name');

        const charSpan = shadowRoot.querySelector('span');
        const charCounter = shadowRoot.querySelector('span.char-count');

        shadowRoot.addEventListener('input', () => {
            console.log(textarea.value.length);
            charCounter.innerText = textarea.value.length;

            charSpan.classList.toggle('error', textarea.value.length > 25)

            // setForm állítja be
            internals.setFormValue(textarea.value)
        })
    }
}

customElements.define('textarea-length', TextAreaWithLength);