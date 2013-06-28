window.SessionsTemplate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    SessionsTemplate.gists = new SessionsTemplate.Collections.Gists();

		new SessionsTemplate.Routers.Gists({
			$rootEl: $('#content')
		});
		Backbone.history.start();
  }
};

$(document).ready(function(){
  SessionsTemplate.initialize();
});
