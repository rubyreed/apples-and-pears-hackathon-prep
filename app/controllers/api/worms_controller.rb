class Api::WormsController < ApplicationController
  before_action :set_apple
  before_action :set_worm, only: [:show, :update, :destroy]

  def index
    render json: @apple.worms
  end

  def show
    render json: @worm
  end

  def create
    @worm=@apple.worms.new(worm_params)
    if(@worm.save)
      render json: @worm
    else
      render json: {errors: @worm.errors}, status: :unprocessable_entity
    end
  end

  def update
    if (@worm.update(worm_params))
      render json: @worm
    else
      render json: { errors: @worm.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @worm.destroy
  end
  
  private
  
  def worm_params
    params.require(:worm).permit(:species, :description)
  end

  def set_apple
    @apple = Apple.find(params[:apple_id])
  end

  def set_worm
    @worm = @apple.worms.find(params[:id])
  end
end
