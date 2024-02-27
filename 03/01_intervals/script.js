class IntervalInput extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#interval-input');

    constructor() {
        super();

        console.log(IntervalInput.#template);

        this.append(IntervalInput.#template.content.cloneNode(true));
    }
}

customElements.define('interval-input', IntervalInput)


class IntervalInputGroup extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#interval-input-group');

    constructor() {
        super();

        this.append(IntervalInputGroup.#template.content.cloneNode(true));

        this.querySelector('button').addEventListener('click', this.add);
    }

    add = () => {
        const interval = new IntervalInput();

        interval.slot = "content";

        this.append(interval);
    }
}

customElements.define('interval-input-group', IntervalInputGroup);