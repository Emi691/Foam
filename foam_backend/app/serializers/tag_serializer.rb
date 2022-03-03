class TagSerializer
  include JSONAPI::Serializer
  attributes :name, :image_id
end
