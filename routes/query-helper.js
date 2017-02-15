const knex = require('../db/db-connection.js');

module.exports = {
  validSignUp: function(username) {
    return knex('user').where({
        username: username
    }).first()
  },
  validSignIn: function(username, password) {
      return knex('user').where({
          username: username,
      })
  },
  createUser: function(userInfo) {
        if (userInfo.username.length < 3) {
          return Promise.reject({
            constraint: 'Username not long enough'
          });
        } else {
          return knex('user').returning('id').insert(userInfo)
        }
    },
}
