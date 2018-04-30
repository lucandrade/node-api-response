const response = require('./response');

function success(body, code) {
    return response(body, null, code, true);
}

module.exports = success;