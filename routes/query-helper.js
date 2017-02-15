const knex = require('../db/db-connection.js');

module.exports = {
    validSign: function(username) {
        console.log(username);
        return knex('user').where('username', username).first()
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
