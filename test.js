var loopback = require('loopback');

//var Item = require('./models').Item;

var app = module.exports = loopback();
 
app.model({
  properties: {
    email: {
      type : "string"
    },
    createdAt: {
      type : "date"
    },
    lastModifiedAt: {
      type : "date"
    }
  }
});

app.use('/api', loopback.rest());
app.listen(8080);