var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'tags',
    tableName : 'tags',
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
        }
    }
});