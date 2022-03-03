class TagsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        tags = Tag.all
        render json: TagSerializer.new(tags)
    end

    def create
        tag = Tag.new(tag_params)
        if tag.save
            render json: TagSerializer.new(tag)
        else
            render json: {message: "we're sorry, tag could not be created"}
        end
    end

    private

    def tag_params
        params.require(:tag).permit(:name, :user_id, :image_id)
    end
end