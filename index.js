'use strict';
var numberIsInteger = require('number-is-integer');
var numberLength = require('number-length');

module.exports = function (val) {
	if (!numberIsInteger(val) || !isPositive(val)) {
		throw new TypeError('Expected a positive number');
	}

	val = val % 9;

	return val;
};
