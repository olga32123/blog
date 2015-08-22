var express = require('express');
var app = express();

//app.use('/admin',express.static('public'));
app.use(express.static('public'));


var ORM = require('./models/ORM');
var config = require('./config.json');

var _ = require('lodash');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var ECT = require('ect');
var ectRenderer = ECT({ watch: true, root: __dirname + '/views' });
app.engine('.html', ectRenderer.render);
app.set('view engine', 'html');

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

	app.use(ORM.middleware);


	app.get('/post/:id', function(req, res){
		req.db.posts.findOne(req.params.id, function(e, post){
			res.render('post', { post : post });
		})	
	})

	app.get('/', function(req, res){
		req.db.posts.find({}, function(e, posts){
			req.db.category.find({}, function(e, categories){
				res.render('home', { posts : posts, categories : categories });
			})
		})	
	})



	var server = app.listen(3000, function () {
  		var host = server.address().address;
  		var port = server.address().port;

  		console.log('Example app listening at http://%s:%s', host, port);
	});
})

