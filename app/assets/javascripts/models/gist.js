SessionsTemplate.Models.Gist = Backbone.Model.extend({
	parse: function(resp, options){
		if (resp.favourite) {
			this.favourite = new SessionsTemplate.Models.Favourite(resp.favourite);
		}
		return resp;
	}
});
