const assert = require('assert');
const response = require('../response');

describe('Function: response', function () {
    it('Will mount json for string payload', function () {
        const responseData = response("::some-data::", "::some-message::", "::some-code::");
        assert.strictEqual("::some-data::", responseData.payload);
        assert.strictEqual("::some-message::", responseData.message);
        assert.strictEqual("::some-code::", responseData.code);
    });

    it('Will mount json for json payload', function () {
        const responseData = response({
            foo: "bar"
        }, "::some-message::", "::some-code::");
        assert.deepStrictEqual({
            foo: "bar"
        }, responseData.payload);
    });

    it('Will mount json for array of objects payload', function () {
        const responseData = response([
            {
                foo: "bar"
            }
        ], "::some-message::", "::some-code::");
        assert.deepStrictEqual([
            {
                foo: "bar"
            }
        ], responseData.payload);
    });

    it('Will mount json for array of numbers payload', function () {
        const responseData = response([1, 2, 3], "::some-message::", "::some-code::");
        assert.deepStrictEqual([1, 2, 3], responseData.payload);
    });

    it('Will return a valid date', function () {
        const responseData = response("::some-data::", "::some-message::", "::some-code::");

        const now = new Date();
        const responseDate = new Date(Date.parse(responseData.date));

        assert.strictEqual(now.getYear(), responseDate.getYear());
        assert.strictEqual(now.getMonth(), responseDate.getMonth());
        assert.strictEqual(now.getDate(), responseDate.getDate());
        assert.strictEqual(now.getMinutes(), responseDate.getMinutes());
    });

    it('Will return null as default message', function () {
        const responseData = response("::some-data::");
        assert.strictEqual(null, responseData.message);
    });

    it('Will return null as default code', function () {
        const responseData = response("::some-data::");
        assert.strictEqual(null, responseData.code);
    });
});