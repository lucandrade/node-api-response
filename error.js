const response = require('./response');

function error(message, code) {
    return response(null, message, code, false);
}

module.exports = error;