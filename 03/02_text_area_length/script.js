// eddig: custom components
// mostandtól fogunk ténylegesen komponensekről beszélni
// komponens: HTML + JS + CSS

// Izoláltság: shadow dom
class TextAreaWithLength extends HTMLElement {
    static #template = document.querySelector('template#textarea-template')

    constructor() {
        super();


        // shadow DOM
        // az eredeti DOM-tól elszigelt részfa
        // shadow DOM-ból nem jutnak ki (kivétel: legtöbb esemény) és nem jutnak be a dolgok (pl. css)
        // egy shadow DOM fa gyökerét shadow rootnak nevezzük
        // egy konkrét elemere csatoljuk ezt nevezzük shadow host-nak

        // closed: a shadow rootra nem tudunk referenciát szerezni
        // így nem tudunk később turkálni a részfába
        // open: ha szerzünk referenciát a shadowrootra el tudjuk érni kívülrül a shadow DOM-ot
        const shadowRoot = this.attachShadow({mode: 'closed'});

        // shadow !== this
        // this-re csak rácsatoltuk a shadow domot
        shadowRoot.append(TextAreaWithLength.#template.content.cloneNode(true));
        // így már nem jut ki a stílus
        // új probléma: shadow dom annyira izolál, hogy a textarea értéke nem jut ki űrlapelküldésnél
        // a probléma nagyon sok módon megoldható:
            // esemény kezelése űrlap szinten
            // szinkronba tartás egy shadow dom-on kívüli hidden inputtal
            // külső elem beküldése a template-be <slot> segítségével
            // form associated custom component

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

customElements.define('textarea-length', TextAreaWithLength);