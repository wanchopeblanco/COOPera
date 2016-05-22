Template.myEvents.onCreated(function myEventsOnCreated() {
	this.segment1 = new ReactiveVar(true);
	this.segment2 = new ReactiveVar(false);
});

Template.myEvents.onRendered(function myEventsOnRendered() {

});

Template.myEvents.events({
	'click #segment1'(event, instance) {
		Template.instance().segment1.set(true);
		Template.instance().segment2.set(false);
	},
	'click #segment2'(event, instance) {
		Template.instance().segment1.set(false);
		Template.instance().segment2.set(true);
	}
});

Template.myEvents.helpers({
	my_events(){
		const user = Meteor.user();
		if(user){
			return user.myEvents();
		}
	},
	my_popular_events(){
		const user = Meteor.user();
		if(user){
			return user.popularEvents();
		}
	},
	my_events_count(){
		const user = Meteor.user();
		if(user){
			return user.myEvents().count();
		}
	},
	next_event(){
		return Events.findOne();
	},
	recommendedEvents(){
		const user = Meteor.user();
		if(user){
			return user.recommendedEvents();
		}
	},
	recommendedEventsCount(){
		const user = Meteor.user();
		if(user){
			return user.recommendedEvents().count();
		}
	},
	segment1(){
		return Template.instance().segment1.get();
	},
	segment2(){
		return Template.instance().segment2.get();
	}
});
