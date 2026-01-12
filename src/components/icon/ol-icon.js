class OLIcon extends HTMLElement {
    static observedAttributes = ["icon"];

    /** @type {HTMLSpanElement} */
    iconSpan;

    constructor() {
        super();
        this.iconSpan = document.createElement("span");
    }

    connectedCallback() {
        this.iconSpan.classList.add("material-symbols-outlined");
        this.iconSpan.innerText = this.hasAttribute("icon") ? this.getAttribute("icon") : "abc";
        this.appendChild(this.iconSpan);
    }

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

customElements.define("ol-icon", OLIcon);