class User < ApplicationRecord
    has_many :tags
    has_many :images, through: :tags 
    has_secure_password
end
