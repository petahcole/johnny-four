const bcrypt = require('bcryptjs');

var hash = bcrypt.hashSync('password', 8);

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries\
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('user').insert({
                    username: 'Andy',
                    password: hash
                }),
                knex('user').insert({
                    username: 'Murph',
                    password: hash
                })
            ]);
        });
};
