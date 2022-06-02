class User < ApplicationRecord
    has_many :created_hairstyles, class_name: "Hairstyle", foreign_key: :creator_id
    has_many :hairstyle_users
    has_many :hairstyles, through: :hairstyle_users
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
