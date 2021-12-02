class Api::ApplesController < ApplicationController
  before_action :set_apple, only: [:show, :destroy, :update]

  def index
    render json: Apple.all
  end

  def show
    render json: @apple
  end

  def create
    @apple=Apple.new(apple_params)
    if(@apple.save)
      render json: @apple
    else
      render json: {errors: apple.errors}, status: :unprocessable_entity
    end
  end

  def update
    if (@apple.update(apple_params))
      render json: @apple
    else
      render json: { errors: @apple.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @apple.destroy
  end
  
  private
  
  def apple_params
    params.require(:apple).permit(:variety, :description)
  end

  def set_apple
    @apple = Apple.find(params[:id])
  end

end
