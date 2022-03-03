# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'json'

Image.delete_all
url = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc14642-a3d6-424b-b621-5ecf5d955d7f/foam-seed.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220303T044305Z&X-Amz-Expires=86400&X-Amz-Signature=20f2b429b0c559439bc03474346550fc293e9d6b78d279eeb788dfc0b1757906&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22foam-seed.json%22&x-id=GetObject"
URI.open(url, 'User-Agent' => 'ruby') do |json|
    data = JSON.parse(json.read)
    data.each do |image|
        Image.create!(url: image["url"])
    end
end

