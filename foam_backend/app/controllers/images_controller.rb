class ImagesController < ApplicationController

    def index
        images = Image.all 
        render json: ImageSerializer.new(images)
    end

end