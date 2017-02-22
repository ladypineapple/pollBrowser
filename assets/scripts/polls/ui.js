'use strict';

const showPollsTemplate = require('../templates/poll-listing.handlebars');
const showPollTemplate = require('../templates/poll-show.handlebars');

const indexSuccess = (data) => {
  console.log(data);
  let showPollsHtml = showPollsTemplate({
    polls: data.polls,
  });
  $('.content').show();
  $('.content').empty().append(showPollsHtml);
  $('#message-user').text('Here are your polls.');
};

const showSuccess = (data) => {
  console.log(data);
  let showPollHtml = showPollTemplate({
    poll: data.poll,
  });
  $('.content').show();
  $('.content').empty().append(showPollHtml);
  $('.show-input').val('');
  $('#message-user').text('Showing Poll #' + data.poll.id);

  // $('#edit-poll').show();
  // $('#post-poll').show();
  // $('#poll-destroy').show();
};

const createSuccess = (data) => {
  let showPollHtml = showPollsTemplate({
    polls: data.polls,
  });
  $('.content').show();
  $('.content').empty().append(showPollHtml);
  $('#message-user').text('Success!');
  console.log(data);
};

const updateSuccess = () => {
  $('#message-user').text('Success. Poll updated.');

  // const updateSuccess = (data) => {
//   console.log(data);
//   let showPollHtml = showPollTemplate({
//     poll: data.poll,
//   });
//   $('.content').show();
//   $('.content').empty().append(showPollHtml);
//   $('.show-input').val('');
//   $('#message-user').text('Success.Showing Poll #' + data.poll.id);

  // $('#edit-poll').show();
  // $('#post-poll').show();
  // $('#poll-destroy').show();
};

const destroySuccess = () => {
  $('.content').empty();
  $('#message-user').text('Success! Poll deleted.');
};

const failure = (error) => {
  console.error(error);
  $('#message-user').text('Something went wrong. Please try again.');
};

module.exports = {
  indexSuccess,
  showSuccess,
  createSuccess,
  updateSuccess,
  destroySuccess,
  failure,
};
