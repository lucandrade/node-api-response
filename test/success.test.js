const assert = require('assert');
const success = require('../success');

describe('Function: success', function () {
    it('Will return expected payload and code', function () {
        const responseData = success("::some-data::", "::some-code::");

        assert.strictEqual("::some-data::", responseData.payload);
        assert.strictEqual("::some-code::", responseData.code);
        assert.strictEqual(true, responseData.success);
    });

    it('Will return null message', function () {
        const responseData = success("::some-data::");

        assert.strictEqual(null, responseData.message);
    });
});