'use strict';

const success = (data) => {
  if (data) { console.log(data); }
};

const signUpSuccess = () => {
  $('#sign-up').hide();
  $('#message-user').text('Success. Please Sign in to play.');
};

const signInSuccess = () => {
  $('#sign-up').val('');
  $('#sign-in').val('');
  $('#edit-poll').show();
  $('#post-poll').show();
  $('#poll-destroy').show();
  $('#show-polls').show();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('#show-votes').show();
  $('#poll-listing').show();
  $('#message-user').text('Please select a button to get started');
};

const changePasswordSuccess = () => {
    $('#change-password').val('');
    $('#message-user').text('Your password has been changed.');
  };

const signOutSuccess = () => {
    $('#sign-out').hide();
    $('.dropdown-menu').hide();
    $('#change-password').hide();
    $('#edit-poll').hide();
    $('#poll-destroy').hide();
    $('#post-poll').hide();
    $('#show-polls').hide();
    $('#poll-listing').hide();
    $('#show-votes').hide();
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-up')[0].reset();
    $('#sign-in')[0].reset();
    $('#message-user').text('You are signed out.');
  };

const failure = (error) => {
  console.error(error);
  $('#message-user').text('Something went wrong. Please try again.');
};

module.exports = {
  changePasswordSuccess,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  failure,
  success,
};
