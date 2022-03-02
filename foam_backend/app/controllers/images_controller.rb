class ImagesController < ApplicationController

    def index
        images = Image.first(30)
        render json: ImageSerializer.new(images)
    end

end