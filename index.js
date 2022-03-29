// 'use strict';
// let numberIsInteger = require('number-is-integer');
// let isPositive = require('is-positive');
import isPositive from 'is-positive';
import numberIsInteger from 'number-is-integer';

export default function digitalRoot(value) {
	if (!numberIsInteger(value) || !isPositive(value)) {
		throw new TypeError('Expected a positive number');
	}

	value %= 9;
	return (value === 0) ? 9 : value;
}
