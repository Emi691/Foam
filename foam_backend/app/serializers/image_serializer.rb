class ImageSerializer
  include JSONAPI::Serializer
  attributes :url 
  has_many :tags
end
