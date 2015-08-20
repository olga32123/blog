var express = require('express');
var app = express();
app.use('/admin',express.static('public'));

var _ = require('lodash');

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/login', function (req, res) {
	if (req.body.email == 'admin' && req.body.password == 'admin'){
		res.json({ name : 'admin', email : 'admin@mail.com'})
	} else {
		 res.sendStatus(401);
	}
});

var categories = [
	{ id : 1, title : 'category 1'},
	{ id : 2, title : 'category 2'},
	{ id : 3, title : 'category 3'}
]

app.get('/api/categories', function(req, res){
	res.json(categories)
})


app.delete('/api/categories/:id', function(req, res){
	var id = parseInt(req.params.id);
	_.remove(categories, function(p){
		return p.id == id;
	})
	res.json(categories)
})



app.post('/api/categories', function(req, res){
	var newPost = req.body;
	newPost.id = (new Date()).getTime()
	categories.push(newPost);
	res.json(newPost)
})



var tags = [
	{ id : 1, title : 'tag1'},
	{ id : 2, title : 'tag2'},
	{ id : 3, title : 'tag3'}
]

app.get('/api/tags', function(req, res){
	res.json(tags)
})


app.delete('/api/tags/:id', function(req, res){
	var id = parseInt(req.params.id);
	_.remove(tags, function(p){
		return p.id == id;
	})
	res.json(categories)
})



app.post('/api/tags', function(req, res){
	var newPost = req.body;
	newPost.id = (new Date()).getTime()
	tags.push(newPost);
	res.json(newPost)
})





var posts = [
	{ id : 1, text : 'post1  Lorem ipsum dolor sit amet, consectetur adipisicing'},
	{ id : 2, text : 'post3  Lorem ipsum dolor sit amet, consectetur adipisicing'},
	{ id : 3, text : 'post4   Lorem ipsum dolor sit amet, consectetur adipisicing'},
	{ id : 4, text : 'post5  Lorem ipsum dolor sit amet, consectetur adipisicing'}
]

app.get('/api/post', function(req, res){
	res.json(posts)
})

app.delete('/api/post/:id', function(req, res){
	var id = parseInt(req.params.id);
	_.remove(posts, function(p){
		return p.id == id;
	})
	res.json(posts)
})


app.put('/api/post/:id', function(req, res){
	var id = parseInt(req.params.id);
	var index = _.findIndex(posts, { id : id })
	posts[index] = req.body;
	res.json(posts[index])
})



app.post('/api/post', function(req, res){
	var newPost = req.body;
	newPost.id = (new Date()).getTime()
	posts.push(newPost);
	res.json(newPost)
})


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});