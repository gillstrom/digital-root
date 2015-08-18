'use strict';
var numberIsInteger = require('number-is-integer');
var isPositive = require('is-positive');
var digitSum = require('digit-sum');

module.exports = function (val) {
	if (!numberIsInteger(val) || !isPositive(val)) {
		throw new TypeError('Expected a positive number');
	}

	while (val.toString().length !== 1) {
		val = digitSum(val);
	}

	return val;
};
