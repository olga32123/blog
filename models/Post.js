var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'posts',
    tableName : 'posts',
    connection: 'mysql',

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: 'string',
            required: true
        },
        tags : 'array'
    }
});