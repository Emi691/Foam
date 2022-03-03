class ImageSerializer
  include JSONAPI::Serializer
  attributes :url, :tags
end
