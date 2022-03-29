import test from 'ava';
import m from './index.js';

test("tests", t => {
	t.is(m(65536), 7);
	t.is(m(301), 4);
	t.is(m(1853), 8);
	t.is(m(2035), 1);
	t.is(m(5), 5);
	t.is(m(1234567890), 9);
	t.is(m(95682), 3);
	t.is(m(674615), 2);
	t.is(m(6816), 3);
});
