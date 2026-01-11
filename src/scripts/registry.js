registries = {}

/**
 * Registers a key-value pair
 * @constructor
 * @param {string} path - Where to store the value, in the form of namespace.key
 * @param {string} value - The value to store
 */
function register(path, value) {
    namespace, key = path.split(".", 2)
    console.log(namespace, key)
}