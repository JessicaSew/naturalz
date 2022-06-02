class HairstyleUser < ApplicationRecord
  belongs_to :hairstyle
  belongs_to :user

end
