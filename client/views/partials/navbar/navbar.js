Template.NavBar.events({
	'click .login'(event){
		event.preventDefault();
		$('#loginModal').modal('show');
	},
	'click .logout'(event){
		Meteor.logout();
		FlowRouter.go('/');
		setTimeout(function(){
			Bert.alert('Esperamos volver a verte muy pronto', 'success');
		}, 750);
	}
});

Template.NavBar.helpers({
	isSelectedItem(name) {
		if(FlowRouter.getRouteName() == name){
			return 'active';
		}
		return null;
	}
});