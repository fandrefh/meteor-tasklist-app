Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish("tarefas", function() {
  	return Tarefas.find({ usuario: this.userId });
  });

});
