class HairstyleSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :minutes_to_complete
  has_one :creator
end
