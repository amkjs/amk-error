
const { expect } = require('chai');
const { sanitizeStatusCode } = require('../../lib/check');

describe('SanitizeStatusCode function', () => {
	it('Should return status when status is between 400 to 599', () => {
		for (let i = 400; i <= 599; i++) {
			const status = sanitizeStatusCode(i);
			expect(status).to.be.equal(i);
		}
	});
	it('Should default to 500 when status is below 400', () => {
		const status = sanitizeStatusCode(120);
		expect(status).to.be.equal(500);
	});
	it('Should default to 500 when status is below 400', () => {
		const status = sanitizeStatusCode(699);
		expect(status).to.be.equal(500);
	});
	it('Should accept string value for status', () => {
		const status = sanitizeStatusCode('404');
		expect(status).to.be.equal(404);
	});
});
