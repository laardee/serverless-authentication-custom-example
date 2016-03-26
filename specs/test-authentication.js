'use strict';

let auth = require('../lib');

describe('Custom authentication', () => {
  describe('Test Custom authentication', () => {
    it('should return profile', () => {
      let event = {
        username: 'username',
        password: 'password'
      };

      auth.signin(event, {salt: process.env.PASSWORD_SALT}, (err, data) => {
        expect(err).to.be.null;
        expect(data.id).to.equal(1);
        expect(data.name).to.equal('Firstname Lastname');
        expect(data.email).to.be.null;
        expect(data.picture).to.equal('https://avatars3.githubusercontent.com/u/4726921?v=3&s=460');
      });
    });

    it('should fail to return profile', () => {
      let event = {
        username: 'username',
        password: 'wrong-password'
      };

      auth.signin(event, {salt: process.env.PASSWORD_SALT}, (err) => {
        expect(err).not.to.be.null;
      });
    });
  });
});