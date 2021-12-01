class CreatePears < ActiveRecord::Migration[6.1]
  def change
    create_table :pears do |t|
      t.string :variety
      t.string :description

      t.timestamps
    end
  end
end
