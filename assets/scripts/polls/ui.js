'use strict';

const showPollsTemplate = require('../templates/poll-listing.handlebars');
const showPollTemplate = require('../templates/poll-show.handlebars');

const indexSuccess = (data) => {
  console.log(data);
  let showPollsHtml = showPollsTemplate({
    polls: data.polls,
  });
  $('.content').empty().append(showPollsHtml);
};

const showSuccess = (data) => {
  console.log(data);
  let showPollHtml = showPollTemplate({
    poll: data.poll,
  });
  $('.content').show();
  $('.content').empty().append(showPollHtml);
  $('.show-input').val('');
  $('#edit-poll').show();
  $('#post-poll').show();
  $('#poll-destroy').show();
};

const createSuccess = (data) => {
  let showPollHtml = showPollsTemplate({
    polls: data.polls,
  });
  $('.content').empty().append(showPollHtml);
  console.log(data);
};

const updateSuccess = (data) => {
  let showPollHtml = showPollTemplate({
    poll: data.poll,
  });
  $('.content').empty().append(showPollHtml);
  console.log(data);
};

const destroySuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  // handles error
  console.error(error);
};

module.exports = {
  indexSuccess,
  showSuccess,
  createSuccess,
  updateSuccess,
  destroySuccess,
  failure,
};
