'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const auth = require('./auth/events.js');
const polls = require('./polls/events.js');

$(() => {
  setAPIOrigin(location, config);
});

$(() => {
  auth.addHandlers();
  polls.addHandlers();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
