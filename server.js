var express = require('express');
var app = express();
app.use('/admin',express.static('public'));


var ORM = require('./models/ORM');
var config = require('./config.json');

var _ = require('lodash');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/login', function (req, res) {
	if (req.body.email == 'admin' && req.body.password == 'admin'){
		res.json({ name : 'admin', email : 'admin@mail.com'})
	} else {
		 res.sendStatus(401);
	}
});


ORM.init(app, function(e){
	app.use('/api/categories', ORM.REST('category'))
	app.use('/api/post', ORM.REST('posts'))
	app.use('/api/tags', ORM.REST('tags'))

	var server = app.listen(3000, function () {
  		var host = server.address().address;
  		var port = server.address().port;

  		console.log('Example app listening at http://%s:%s', host, port);
	});
})

