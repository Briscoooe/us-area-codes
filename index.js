'use strict';
const codes = require('./data/codes');

exports.get = code => {
	if (typeof code !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof code}`);
	}

	const state = codes[code];

	return state !== undefined ? state : null;
};
