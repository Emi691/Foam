class CreateTags < ActiveRecord::Migration[6.1]
  def change
    create_table :tags do |t|
      t.boolean :foaming
      t.integer :user_id
      t.integer :image_id

      t.timestamps
    end
  end
end
