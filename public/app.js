
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var State = ReactRouter.State;
var Redirect = ReactRouter.Redirect;
var Navigation = ReactRouter.Navigation;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var Router = ReactRouter;

var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
var Grid = ReactBootstrap.Grid;
var Col = ReactBootstrap.Col;
var Row = ReactBootstrap.Row;
var Input = ReactBootstrap.Input;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
// var UserList = React.createClass({
// 	 mixins: [React.addons.LinkedStateMixin], 
// 	getInitialState : function(){
// 		return {
// 			name : 'test',
// 			users : [{name : "Vasya"}, {name : "Petya"}]
// 		}
// 	},
// 	remove : function(user, index){
// 		var newState = React.addons.update(this.state, {
// 			users : {
// 				$splice : [[index, 1]]
// 			}
// 		})
// 		this.setState(newState)
// 	},
// 	add : function(){
// 		var name = this.state.name;
// 		var newState = React.addons.update(this.state, {
// 			users : {
// 				$push : [{name : name}]
// 			},
// 			name : {
// 				$set : ''
// 			}
// 		})
// 		this.setState(newState)
// 	},
// 	renderUser : function(user, index){
// 		return <div>
// 			<div>{user.name}</div>
// 			<a href='javascript:void(0)' onClick={this.remove.bind(null, user, index)}>remove</a>
// 		</div>
// 	},
// 	render : function(){
// 		var users = this.state.users.map(this.renderUser)
// 		return <div>
// 			<div>
// 				<input valueLink={this.linkState('name')} type="text"/>
// 				<button onClick={this.add}>add</button>

// 			</div>
// 		    <div>{users}</div>
// 		</div> 
// 	}
// });

// var Login = React.createClass({
// 	 mixins: [React.addons.LinkedStateMixin],
// 	getInitialState : function(){
// 		return {
// 			login : '',
// 			password : '',
// 			error : false,
// 			userName : ''
// 		}
// 	},
// 	login : function(){
// 		if(this.state.login == 'admin' && this.state.password == 'admin'){
// 			this.setState({
// 				userName : 'admin'
// 			})
// 		} else {
// 			this.setState({
// 				error : true,
// 				login : '',
// 				password : ''
// 			})		
// 		}

// 	},
// 	render : function(){
// 		if (this.state.userName != '') return <div>hi, {this.state.userName}</div>;

// 		return <div> 
// 			<div>
// 				login
// 				<input valueLink={this.linkState('login')} type="text"/>
// 			</div>
// 			<div>
// 				password
// 				<input valueLink={this.linkState('password')} type="text"/>
// 			</div>
// 			<div>
// 			{this.state.error&&<div>incorrect login/password</div>}
// 			<button onClick={this.login}>login</button>
// 			</div>
// 		</div>
// 	}
// })

// var Button = React.createClass({
// 	getInitialState : function(){
// 		return {
// 			showContact : false
// 		}
// 	},
// 	showAddress : function(){
// 		this.setState({
// 			showContact : !this.state.showContact
// 		})
// 	},
// 	render : function(){
// 		return <div className="contact_button" onClick={this.showAddress}> {this.state.showContact?<div>11 Nezavisimisti str.</div> : <div>Contact us!</div>}</div>
		
// 	}
// })
var PostDetais = React.createClass({
	render : function(){
		return <div>post</div>	
	}
	
})

var Layout = React.createClass({
	render : function(){
		return <Grid>
			<Row>
				<Col xs={2}>
					  <Nav bsStyle='pills' stacked>
						    <NavItem eventKey={1} href='#/categories'>Categories</NavItem>
						    <NavItem eventKey={2} href='#/posts'>Posts</NavItem>
					  </Nav>
				</Col>
				<Col xs={10}>
					<RouteHandler/>
				</Col>
			</Row>	
		</Grid>	
		
	
	}
	
})


var obj = {

	ttt : function(){
		name = 'peta';

	},
	name : 'vasa'
}

var ToDos = React.createClass({
	render : function(){
		var items = this.state.todos.map(this.renderItem)
		return <ListGroup>
			{items}
			<ListGroupItem>
				<Input onKeyDown={this.onKeyDown} valueLink={this.linkState('value')} type='text'  buttonAfter={<Button onClick={this.addTodo}>add new todo</Button>} />	
			</ListGroupItem>
		</ListGroup>
	},
	onKeyDown : function(e){
		if (e.keyCode == 13){
			this.addTodo();
		}
	},
	renderItem : function(n, index){
		return <ListGroupItem>
			<span onClick={this.toogle.bind(null, n, index)} className={n.completed ? 'todo todo--complted' : 'todo'}>{n.title}</span>
			<Button bsSize='xsmall' onClick={this.remove.bind(null, n, index)} bsStyle='danger'>remove</Button>
		</ListGroupItem>
	},
	toogle : function(todo, index){

		var todosUpdate = {}
		todosUpdate[index] =  {
			completed : {
				$set : !todo.completed
			}
		}
		var newState = React.addons.update(this.state, {
			todos : todosUpdate
		})
		this.setState(newState)

	},
	mixins: [React.addons.LinkedStateMixin], 
	getInitialState : function(){
		return {
			todos : [{title : 'javascript', completed : true }, {title : 'gym', completed : false }],
			value : ''
		}
	},
	remove : function(n, index){
		var newState = React.addons.update(this.state, {
				todos : {
					$splice : [[index, 1]]
				}
			})
			this.setState(newState)
	},
	addTodo : function(){
		var newState = React.addons.update(this.state, {
				todos : {
					$push : [{title : this.state.value}]
				},
				value : {
					$set : ''
				}
			})
			this.setState(newState)
		}
})

var Categories = React.createClass({
	render : function(){
		
		var newItem = this.state.categories.map(this.renderItem);

		return <ListGroup>
			{newItem}
			<ListGroupItem>
				<Input  valueLink={this.linkState('value')} type='text'  buttonAfter={<Button onClick={this.addCategory}>add new category</Button>} />	
			</ListGroupItem>
		</ListGroup>

	},
	renderItem : function(n, index){
			return <ListGroupItem>
				{n.title} 
				<Button bsSize='xsmall' onClick={this.remove.bind(null, n, index)} bsStyle='danger'>remove</Button>
			</ListGroupItem>

	},
	mixins: [React.addons.LinkedStateMixin], 
	getInitialState : function(){
		return {
			categories : [],
			value : ''
		}
	},
	componentDidMount : function(){
			$.get('/api/categories').then(function(json){
			this.setState({
				categories : json
			})	
		}.bind(this))
	},
	addCategory : function(){
		$.post('/api/categories', {title : this.state.value}).then(function(json){
			var newState = React.addons.update(this.state, {
				categories : {
					$push : [json]
				}
			})
			this.setState(newState)
		}.bind(this))
	},
	remove : function(n, index){
		$.ajax({
			  url: '/api/categories/' + n.id,
		    type: 'DELETE'
		}).then(function(){
			var newState = React.addons.update(this.state, {
				categories : {
					$splice : [[index, 1]]
				}
			})
			this.setState(newState)
		}.bind(this))
		
	}
})

var AddPost = React.createClass({
	mixins: [Navigation, React.addons.LinkedStateMixin], 
	getInitialState : function(){
		return {
			value : '',
			error : false
		}
	},
	addPost : function(){
		if(!this.state.value){
			this.setState({
				error : true
			})
			return
		}
		$.post('/api/post', {text : this.state.value}).then(function(json){
			this.transitionTo('/posts')
		}.bind(this))	
	},

	render : function(){
		return <div>
			<form>
				<Input bsStyle={this.state.error ? 'error':null}  valueLink={this.linkState('value')} type='textarea' label='Text' placeholder='add new post' />
    			<Button onClick={this.addPost}>add new post</Button>
			</form>
		</div>
	}
})
var PostList = React.createClass({
	getInitialState : function(){
		return {
			selectedItem : null,
			posts : []
		}
	},
	componentDidMount : function(){

		$.get('/api/post').then(function(json){
			this.setState({
				posts : json
			})	
		}.bind(this))

		
	},
	showText : function(post){
		this.setState({
			selectedItem : post.id
		})
	},
	remove : function(post, index){
		$.ajax({
		    url: '/api/post/' + post.id,
		    type: 'DELETE'
		}).then(function(){
			var newState = React.addons.update(this.state, {
				posts : {
					$splice : [[index, 1]]
				}
			})
			this.setState(newState)
		}.bind(this));

		
	},
	renderPost : function(post, index){
		var text;
		if(post.id == this.state.selectedItem){
			text = post.text;
		} else {
			text = post.text.slice(0,5)
		}
		return <tr>
			<td><a href={"#/posts/" + post.id}>{text}</a></td>
			<td>
				<ButtonToolbar>
					<Button bsSize='xsmall' onClick={this.showText.bind(null, post)} bsStyle='info'>read more</Button>
				 	<Button bsSize='xsmall' onClick={this.remove.bind(null, post, index)} bsStyle='danger'>remove</Button>
			 	</ButtonToolbar>
			</td>
		</tr>
	},
	render : function(){
		var rows = this.state.posts.map(this.renderPost)
		// return <div>{posts}</div>
		var table = <Table striped bordered condensed hover>
		    <thead>
		      <tr>
		        <th>Post</th>
		        <th></th>
		      </tr>
		    </thead>
		    <tbody>
		      
		      {rows}
		    </tbody>
		  </Table>
		return  <div>
			<Grid fluid>
				<Row>
					<Col xs={12}>
						<Button href="#/add" className="addNewButton pull-right" bsStyle='success'>add new post</Button>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						{table}
					</Col>
				</Row>		
			</Grid>	
		</div>
	}
})



var routes = (
	<Route handler={Layout} path="/">
		<DefaultRoute handler={PostList} />
		<Route handler={PostDetais} path="posts/:id" />
		<Route handler={PostList} path="posts" />
		<Route handler={Categories} path="categories" />
		<Route handler={AddPost} path="add" />
		<Route handler = {ToDos} path="todo"/>
	</Route>);


Router.run(routes, function (Handler) { React.render(<Handler />, document.body);});

