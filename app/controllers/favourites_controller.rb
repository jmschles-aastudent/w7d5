class FavouritesController < ApplicationController
  def create
    @favourite = Favourite.new(params[:favourite])
    puts;puts;puts
    puts "FAVOURITE IS: #{@favourite.inspect}"
    puts;puts;puts
    if current_user.favourites.where(gist_id: @favourite.gist_id).empty?
      @favourite.user_id = current_user.id
      @favourite.save!

      render :json => @favourite.gist
    else
      puts;puts;puts
      puts "Hey, we made it here!"
      puts;puts;puts
      @favourite.errors # << "Favorite already exists, have two days that are good. But only in the next two days. Yay!"
      render :json => @favourite.errors.full_messages
    end

  end

  def destroy
    @favourite = Favourite.where(gist_id: params[:gist_id])[0]
    @favourite.destroy

    render json: :nil
  end
end
