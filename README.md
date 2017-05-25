# iso4217 [![Build Status](https://travis-ci.org/a-x-/iso4217.svg?branch=master)](https://travis-ci.org/a-x-/iso4217)
iso4217 currency codes table and helpers

# usage
```js
import currencies, { utils } from 'iso4217';

/** 
 * @example 840 => ({
  "Location": "UNITED STATES",
  "Currency": "US Dollar",
  "Code": "USD",
  "Num": "840",
  "CCC": "",
  "Obsolete": "",
  "Symbol": "$",
  "Fraction": 2
}) */
const foo = currencyNum => currencies[currencyNum];

/**
 * @example 'RUB' => ({
    "Location": "RUSSIAN FEDERATION",
    "Currency": "Russian Ruble",
    "Code": "RUB",
    "Num": "643",
    "CCC": "",
    "Obsolete": "RUR",
    "TextSymbol": "руб.",
    "Symbol": "₽",
    "Fraction": 2
}) */
const bar = currencyCode => utils.getByCode(currencyCode);
```
