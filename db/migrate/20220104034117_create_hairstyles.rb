class CreateHairstyles < ActiveRecord::Migration[6.1]
  def change
    create_table :hairstyles do |t|
      t.string :title
      t.text :instructions
      t.integer :minutes_to_complete
      t.references :creator, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
