function response(body, message = null, code = null, success = true) {
    return {
        payload: body,
        message: message,
        code: code,
        date: (new Date()).toUTCString(),
        success,
    };
}

module.exports = response;