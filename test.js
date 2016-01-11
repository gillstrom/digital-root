import test from 'ava';
import m from './';

test(t => {
	t.is(m(65536), 7);
	t.is(m(1853), 8);
	t.is(m(2035), 1);
	t.is(m(5), 5);
});
