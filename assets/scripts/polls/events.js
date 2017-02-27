'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../auth/store');

const onMenu = function (event) {
  event.preventDefault();
  api.index()
  .then(ui.indexSuccess)
  .catch(ui.failure);
};

const onGetPolls = function (event) {
  event.preventDefault();
  let data =  getFormFields(event.target);
  if (data.poll.id.length === 0) {
    api.show.then(ui.failure);
  } else {
    api.show(data.poll.id)
    .then(ui.showSuccess)
    .catch(ui.failure);
  }
};

const onCreatePolls = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  $('#message-user').text('Success! Poll #' + data.poll.id + ' created.');
  api.create(data)
  // .then(ui.indexSuccess)
  .then(ui.showSuccess)
  .catch(ui.failure);
};

const onUpdatePolls = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.update(data.poll.id, data)
  .then(ui.updateSuccess)
  .catch(ui.failure);
};

const onDestroyPolls = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.destroy(data.poll.id)
  .then(ui.destroySuccess)
  .catch(ui.failure);
};

// const onDestroyPolls = function (event) {
//   event.preventDefault();
//   console.log('delete');
//   let data = getFormFields(event.target);
//   api.destroy(data.poll.id)
//     .then(() => {
//       api.index
//       .then(ui.indexSuccess);
//     })
//     .catch(ui.failure);
// };

const addHandlers = () => {
  $('#sign-up').form('clear');
  $('#sign-in').form('clear');
  $('#sign-up').val('');
  $('#sign-in').val('');
  $('#edit-poll').hide();
  $('#post-poll').hide();

  // $('#content').hide();
  $('#poll-destroy').hide();
  $('#menu').on('submit', onMenu);
  $('#poll-listing').on('click', onMenu);
  $('#poll-search').on('submit', onGetPolls);
  $('#poll-destroy').on('submit', onDestroyPolls);
  $('#edit-poll').on('submit', onUpdatePolls);
  $('#post-poll').on('submit', onCreatePolls);
};

module.exports = {
  addHandlers,
};
