class Api::PearsController < ApplicationController
  before_action :set_pear, only: [:show, :destroy, :update]

  def index
    render json: Pear.all
  end

  def show
    render json: @pear
  end

  def create
    @pear=Pear.new(pear_params)
    if(@pear.save)
      render json: @pear
    else
      render json: {errors: pear.errors}, status: :unprocessable_entity
    end
  end

  def update
    if (@pear.update(pear_params))
      render json: @pear
    else
      render json: { errors: @pear.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @pear.destroy
  end
  
  private
  
  def pear_params
    params.require(:pear).permit(:variety, :description)
  end

  def set_pear
    @pear = Pear.find(params[:id])
  end
end
