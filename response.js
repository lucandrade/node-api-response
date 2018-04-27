function response(body, message = null, code = null) {
    return {
        payload: body,
        message: message,
        code: code,
        date: (new Date()).toUTCString()
    };
}

module.exports = response;