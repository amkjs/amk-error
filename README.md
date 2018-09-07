# AMK-ERROR

[![CircleCI](https://circleci.com/gh/amkjs/amk-error.svg?style=svg)](https://circleci.com/gh/amkjs/amk-error)
[![codecov](https://codecov.io/gh/amkjs/amk-error/branch/master/graph/badge.svg)](https://codecov.io/gh/amkjs/amk-error)
[![Known Vulnerabilities](https://snyk.io/test/github/amkjs/amk-error/badge.svg?targetFile=package.json)](https://snyk.io/test/github/amkjs/amk-error?targetFile=package.json)


http response error object for amk js

## Usage

to install: `npm i amk-error`

to use:
```
const ErrorObject = require('amk-error');

throw new ErrorObject('Not found', 404);
```

## API

#### ```constructor(message, status)```
---
Creating an error object

##### Arguments
* **message** **_(string)_** - message regarding the error (default: Something went wrong)
* **status** **_(number)_** - http status code, will only accept 400 to 599. (default is 500)

## Tests
1. install dependencies using `npm install`
2. run `npm test`

## Feedback

All bugs, feature requests, pull requests, feedback, etc., are welcome. [Create an issue](https://github.com/amkjs/amk-error/issues).

## License
[MIT](https://github.com/amkjs/amk-error/blob/master/LICENSE)
