SessionsTemplate.Models.Favourite = Backbone.Model.extend({
	url: function(){
		console.log(this);
		return '/gists/' + this.get('gist_id') + '/favourite';
	}
});
