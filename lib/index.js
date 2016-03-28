'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = signin;

var _serverlessAuthentication = require('serverless-authentication');

function signin(_ref, options, callback) {
  var username = _ref.username;
  var password = _ref.password;

  // Do the authentication here, insert e.g. the hash salt and other things you need to authenticate to options
  if (username === 'username' && password === 'password') {
    // Get profile data from db
    var response = {
      id: 1,
      name: 'Firstname Lastname',
      email: null,
      picture: 'https://avatars3.githubusercontent.com/u/4726921?v=3&s=460'
    };
    callback(null, mapProfile(response));
  } else {
    callback(401);
  }
}

function mapProfile(response) {
  return new _serverlessAuthentication.Profile({
    id: response.id,
    name: response.name,
    email: response.email,
    picture: response.picture,
    provider: 'custom',
    _raw: response
  });
}