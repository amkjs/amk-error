
const checkStatusCode = (status) => {
	const numStatus = +status;
	if (numStatus >= 400 && numStatus < 600) {
		return numStatus;
	} else {
		return 500;
	}
};

module.exports = {
	checkStatusCode
};
