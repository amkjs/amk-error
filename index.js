
const { checkStatusCode } = require('./lib/check');

const defaultMessage = 'Something went wrong';

class AmkError extends Error {

	constructor(message, status) {
		super(message);
		this.message = message || defaultMessage;
		this.status = checkStatusCode(status);
	}

}
module.exports = AmkError;
