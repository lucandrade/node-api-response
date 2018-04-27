const assert = require('assert');
const apiResponse = require('../index');

describe('Module: Api Response', function () {
    it('Has response, success and error functions', function () {
        assert(apiResponse.response);
        assert(apiResponse.success);
        assert(apiResponse.error);
    });

    it('Can call its functions', function () {
        assert(typeof apiResponse.response === 'function');
        assert(typeof apiResponse.success === 'function');
        assert(typeof apiResponse.error === 'function');
    });
});