'use strict';

const config = require('../config');
const store = require('../auth/store');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/polls',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/polls/' + id,
    method: 'GET',
  });
};

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/polls',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const update = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/polls/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/polls/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
