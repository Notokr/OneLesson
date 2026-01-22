
class OLButton extends HTMLElement {
    // static observedAttributes = ["icon"];

    /** @type {HTMLSpanElement} */
    iconSpan;

    /**
     * Callback function that is called when the button is clicked
     * @type {Function}
     * @param {string} arg - The argument passed to the callback
     * @returns {boolean} The result of the callback function
     */
    onClickCallback;

    constructor() {
        super();
        this.iconSpan = document.createElement("span");
    }

    connectedCallback() {
        this.iconSpan.classList.add("material-symbols-outlined");
        this.iconSpan.innerText = this.hasAttribute("icon") ? this.getAttribute("icon") : "abc";
        this.appendChild(this.iconSpan);
    }

    connectedMoveCallback() { return; }

    /**
     * 
     * @param {string} name - The name of the attribute that changed
     * @param {string?} oldValue - The old value of the attribute
     * @param {string?} newValue - The new value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "icon":
                this.iconSpan.innerText = newValue ? newValue : "abc";
                break;
            default:
                break;
        }
    }
}

customElements.define("ol-button", OLButton);