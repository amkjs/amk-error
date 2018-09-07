
const { expect } = require('chai');
const AmkError = require('../index');

describe('Error function', () => {
	it('Should generate an error message and status upon instantiation', () => {
		const msg = 'Not found';
		const status = 400;
		const error = new AmkError(msg, status);

		expect(error.status).to.be.equal(status);
		expect(error.message).to.be.equal(msg);
	});
	it('Should default to error 500 when there is no status', () => {
		const msg = 'Not found';
		const error = new AmkError(msg);

		expect(error.status).to.be.equal(500);
		expect(error.message).to.be.equal(msg);
	});
	it('Should default to default message there is no message', () => {
		const msg = 'Something went wrong';
		const status = 500;
		const error = new AmkError(undefined, status);

		expect(error.status).to.be.equal(status);
		expect(error.message).to.be.equal(msg);
	});
	it('Should accept string value for status', () => {
		const msg = 'Not found';
		const status = '400';
		const error = new AmkError(msg, status);

		expect(error.status).to.be.equal(+status);
		expect(error.message).to.be.equal(msg);
	});
});
