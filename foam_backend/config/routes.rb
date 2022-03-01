Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :show, :create]
  resources :images, only: [:index]
  resources :tags, only: [:index, :create, :update]
end
