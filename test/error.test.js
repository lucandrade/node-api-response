const assert = require('assert');
const error = require('../error');

describe('Function: error', function () {
    it('Will return expected message and code', function () {
        const responseData = error("::some-message::", "::some-code::");

        assert.strictEqual("::some-message::", responseData.message);
        assert.strictEqual("::some-code::", responseData.code);
    });

    it('Will return null payload', function () {
        const responseData = error("::some-message::", "::some-code::");

        assert.strictEqual(null, responseData.payload);
    });
});