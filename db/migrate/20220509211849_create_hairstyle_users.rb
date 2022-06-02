class CreateHairstyleUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :hairstyle_users do |t|
      t.references :hairstyle, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.text :comments
      t.integer :rating

      t.timestamps
    end
  end
end
