const { open } = require("original-fs");
const { register, registryGet } = require("../registry/registry.mjs")

/**
 * @param {string} namespace - The namespace in wich to store the key-value pair
 * @param {string} key - The key.
 * @param {CustomElementConstructor} value - The component as a class (must extend HTMLElement)
 * @returns {*} - Leaves the choice to the registerer
 */
function componentRegisterer(namespace, key, value, registries) {
    customElements.define(key, value);
    registries[namespace][key] = value;
    return true;
}

register("registries.components", componentRegisterer)
