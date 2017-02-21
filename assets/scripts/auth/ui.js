'use strict';

const success = (data) => {
  if (data) { console.log(data); }
};

const signUpSuccess = () => {
  $('#sign-up').hide();
  $('.message-player').text('Success. Please Sign in to play.');

  // if (data) {
  //   console.log(data);
  // }
};

const signInSuccess = () => {
  $('#sign-up').val('');
  $('#sign-in').val('');
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('#show-votes').show();
  $('#show-polls').show();
  $('.message-player').text('Please select a button to get started');

  // $('#board').show();
  // if (data) {
  //   console.log(data);
  // }
};

const changePasswordSuccess = () => {
    $('#change-password').val('');
    $('.message-player').text('Your password has been changed.');
  };

const signOutSuccess = () => {
    $('#sign-out').hide();
    $('.dropdown-menu').hide();
    $('#change-password').hide();
    $('#show-polls').hide();
    $('#show-votes').hide();
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-up').val('');
    $('#sign-in').val('');
    $('.message-player').text('You are signed out.');

    // if (data) {
    //   console.log(data);
    // }
  };

const failure = (error) => {
  console.error(error);
  $('.message-player').text('There was an error. Please try again.');
};

module.exports = {
  changePasswordSuccess,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  failure,
  success,
};
