/** @type {{ [key: string]: {[key: string]: any}, registries: {[key: string]: ((namespace: string, key: string, value: any) => *)?} }} */
var registries = {};

/**
 * Registers a key-value pair
 * @constructor
 * @param {string} path - Where to store the value, in the form of namespace.key
 * @param {*|((namespace: string, key: string, value: any) => *)?} value - The value to store _(the registerer function if namespace is registries)_
 * @returns {boolean} Action success
 */
function register(path, value) {
    [namespace, key] = path.split(".", 2);
    // Check if namespace exists
    if (!(namespace in registries || namespace == "registries")) { console.error(`Namespace ${namespace} not recognized.`); return false; }
    if (namespace == "registries") {
        // Add registry, and edit the registerer function
        if (key in registries) { console.warn(`Namespace ${key} already registered.`); return false; }
        registries[key] = {};
        registries["registries"][key] = value;
    } else {
        if (registries["registries"][namespace]) {
            registries["registries"][namespace](namespace, key, value, registries);
        } else {
            registries[namespace][key] = value;
        }
    }
    return true;
}

/**
 * Registers a key-value pair
 * @constructor
 * @param {string} path - Where to store the value, in the form of namespace.key
 * @returns {(object?)} The value stored at path, or null if incorrect path.
 */
function get(path) {
    [namespace, key] = path.split(".", 2);
    if (!(namespace in registries || (namespace == "registries" && key in registries))) { console.error(`Namespace ${namespace} not recognized.`); return null; }
    if (namespace == "registries") {
        return registries[key];
    } else {
        if (!(key in registries[namespace])) { console.warn(`No value found at ${path}.`); return null; }
        return registries[namespace][key];
    }
}

export { register, get as registryGet };