'use strict';
var assert = require('assert');
var digitalRoot = require('./');

it('Should work', function () {
	assert.strictEqual(digitalRoot(65536), 7);
	assert.strictEqual(digitalRoot(1853), 8);
	assert.strictEqual(digitalRoot(2035), 1);
	assert.strictEqual(digitalRoot(5), 5);
});
