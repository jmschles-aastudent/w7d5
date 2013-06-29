SessionsTemplate.Views.GistDetail = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'change:favourite', this.render);
	},

	events: {
		"click #back": "goBack",
		"click button.favourite": "favourite",
		"click button.unfavourite": "unfavourite"
	},

  template: JST['gists/show'],

	render: function(){
		var content = this.template({
			gist: this.model
		});
		console.log("RENDERING!");
		this.$el.html(content);

		return this;
	},

	goBack: function(e) {
		e.preventDefault();
		window.history.back();
	},

	favourite: function(e) {
		var that = this;

		var id = parseInt($(e.target).data('id'));

		var favourite = new SessionsTemplate.Models.Favourite();

		favourite.save({ gist_id: id }, { success: function() {
			that.render();
		}});
	},

	unfavourite: function(e) {
		var that = this;

		var id = $(e.target).data('id');

		var favourite = this.model.favourite;

		favourite.destroy({
			success: function() {
				console.log('people');
				console.log(that.model);
				that.render();
			}
		});
	}

});
