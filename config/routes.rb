SessionsTemplate::Application.routes.draw do
  root :to => "root#root"

  resources :favourites, :only => [:index]

  resources :gists, :only => [:index, :show] do
    resource :favourite, :only => [:create, :destroy]
  end

  resource :session, :only => [:new, :create, :destroy]
  resources :users, :only => [:new, :create, :show]
end
