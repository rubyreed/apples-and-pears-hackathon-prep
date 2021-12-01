class CreateWorms < ActiveRecord::Migration[6.1]
  def change
    create_table :worms do |t|
      t.string :species
      t.string :description
      t.belongs_to :apple, null: false, foreign_key: true

      t.timestamps
    end
  end
end
