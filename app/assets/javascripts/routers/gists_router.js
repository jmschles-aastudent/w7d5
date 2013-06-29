SessionsTemplate.Routers.Gists = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl;

	},

	routes: {
		"": "index",
		"gists/:id": "show"
	},

	index: function() {
		var that = this;

		SessionsTemplate.gists.fetch({
			success: function() {
				var index = new SessionsTemplate.Views.GistsIndex({
					collection: SessionsTemplate.gists
				});
				that.$rootEl.html(index.render().$el);
			}
		});
	},

	show: function(id) {
		var that = this;

		var gist = SessionsTemplate.gists.get(id);
		if (!gist) {
			gist = new SessionsTemplate.Models.Gist({id: id});
			SessionsTemplate.gists.add(gist);
			gist.fetch();
		}

		var show = new SessionsTemplate.Views.GistDetail({
			model: gist
		});

		that.$rootEl.html(show.render().$el);
	},

});
