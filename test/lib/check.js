
const { expect } = require('chai');
const { checkStatusCode } = require('../../lib/check');

describe('Error function', () => {
	it('Should return status when status is between 400 to 599', () => {
		for (let i = 400; i <= 599; i++) {
			const status = checkStatusCode(i);
			expect(status).to.be.equal(i);
		}
	});
	it('Should default to 500 when status is below 400', () => {
		const status = checkStatusCode(120);
		expect(status).to.be.equal(500);
	});
	it('Should default to 500 when status is below 400', () => {
		const status = checkStatusCode(699);
		expect(status).to.be.equal(500);
	});
	it('Should accept string value for status', () => {
		const status = checkStatusCode('404');
		expect(status).to.be.equal(404);
	});
});
