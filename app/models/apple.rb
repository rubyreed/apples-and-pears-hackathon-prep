class Apple < ApplicationRecord
  has_many :worms, dependent: :destroy
  validates :variety, presence: :true
end
