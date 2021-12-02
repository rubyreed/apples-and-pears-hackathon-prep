class Api::WormsController < ApplicationController
  before_action :set_worm, only: [:show, :destroy, :update]

  def index
    render json: Worm.all
  end

  def show
    render json: @worm
  end

  def create
    @worm=Worm.new(worm_params)
    if(@worm.save)
      render json: @worm
    else
      render json: {errors: worm.errors}, status: :unprocessable_entity
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

  def set_worm
    @worm = Worm.find(params[:id])
  end
end
