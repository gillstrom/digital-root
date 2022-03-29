'use strict';
var numberIsInteger = require('number-is-integer');
var isPositive = require('is-positive');

module.exports = function (val) {
	if (!numberIsInteger(val) || !isPositive(val)) {
		throw new TypeError('Expected a positive number');
	}

	val = val % 9;

	return val;
};
