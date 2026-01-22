import("./toolbar_tab.js");

class OLToolbar extends HTMLElement {
    static observedAttributes = ["tabs"];

    constructor() {
        super();
    }
}

customElements.define("ol-toolbar", OLToolbar);