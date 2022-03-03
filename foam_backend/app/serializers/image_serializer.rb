class ImageSerializer
  include JSONAPI::Serializer
  attributes :url, :tag
end
