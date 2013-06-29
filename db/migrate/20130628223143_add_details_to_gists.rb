class AddDetailsToGists < ActiveRecord::Migration
  def change
    add_column :gists, :details, :text
  end
end
