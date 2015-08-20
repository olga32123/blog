
var Form = function(){
	var self = this;
	this.email =  ko.observable('');
	this.password =  ko.observable('');
	this.shouldShowMessage = ko.observable(false);
	this.displayUser = ko.observable();
	this.username = ko.observable('dd');
	

	this.login = function(){
		var data = {
			email: this.email(),
			password: this.password()
		}
		$.post("/login", data).done(function(json){
	
			self.displayUser(true);
			self.username(json.name);
			
		}).fail(function(){
		
			self.shouldShowMessage(true)
		})
	};


};


$(function(){

	var form = new Form();
	ko.applyBindings(form);
});

