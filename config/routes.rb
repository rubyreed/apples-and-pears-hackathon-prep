Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :apples do
      resources :worms
    end
    resources :pears
  end
end
