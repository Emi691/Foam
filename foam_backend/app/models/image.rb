class Image < ApplicationRecord
    has_many :tags
    has_many :users, throught: :tags
end
