
const isValid = function (value) {
    if (typeof value === "undefined" || typeof value === null) return false
    if (typeof value === "string" && value.trim().length == 0) return false
    return true 
}

const isValidRequest = function (value) {
    if (Object.keys(value).length == 0 ) return false
    return true
}

module.exports = {isValid, isValidRequest}