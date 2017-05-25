import test from 'ava';
import iso4217 from '.';

test('returns correct object', t => {
  t.is(iso4217.utils.getByCode('USD').Code, 'USD');
});

test('returns null on incorrect code', t => {
  t.is(iso4217.utils.getByCode('ZZZ'), null);
});
