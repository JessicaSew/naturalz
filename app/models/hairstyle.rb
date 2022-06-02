class Hairstyle < ApplicationRecord
    belongs_to :creator, class_name: "User"
    has_many :hairstyle_users
    has_many :users, through: :hairstyle_users

  validates :title, presence: true
  validates :instructions, length: { minimum: 25 }
end
