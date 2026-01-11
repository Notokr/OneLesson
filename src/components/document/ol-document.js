class OLDocument extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");
        this.appendChild(document.createElement("ol-placeholder"));
    }
}

customElements.define("ol-document", OLDocument);