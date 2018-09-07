
const { sanitizeStatusCode } = require('./lib/check');

const defaultMessage = 'Something went wrong';

class AmkError extends Error {

	constructor(message = defaultMessage, status) {
		super(message);
		this.status = sanitizeStatusCode(status);
	}

}
module.exports = AmkError;
