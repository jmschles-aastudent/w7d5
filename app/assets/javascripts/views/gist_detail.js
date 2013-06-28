SessionsTemplate.Views.GistDetail = Backbone.View.extend({

  template: JST['gists/show'],

	render: function(){
		console.log(this.model);
		var content = this.template({
			gist: this.model
		});

		this.$el.html(content);

		return this;
	}

});
