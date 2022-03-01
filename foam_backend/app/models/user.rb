class User < ApplicationRecord
    # has_many :tags
    has_secure_password
end
