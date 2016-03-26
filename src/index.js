'use strict';

import {Profile} from 'serverless-authentication';

export function signin({username, password}, options, callback) {
  // Do the authentication here, insert e.g. the hash salt and other things you need to authenticate to options
  if(username === 'username' && password === 'password') {
    // Get profile data from db
    let response = {
      id: 1,
      name: 'Firstname Lastname',
      email: null,
      picture: 'https://avatars3.githubusercontent.com/u/4726921?v=3&s=460'
    };
    callback(null, mapProfile(response));
  } else {
    callback(new Error('Unauthorized'));
  }
}

function mapProfile(response) {
  return new Profile({
    id: response.id,
    name: response.name,
    email: response.email,
    picture: response.picture,
    provider: 'custom',
    _raw: response
  });
}