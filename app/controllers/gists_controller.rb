class GistsController < ApplicationController
  before_filter :require_login

  def index
    @gists = current_user.gists
    render :json => @gists
  end

  def show
    @gist = Gist.find params[:id]
    render json: @gist
  end
end
