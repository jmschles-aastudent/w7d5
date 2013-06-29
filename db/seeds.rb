# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({ :username => "Stefano", :password => "password" })

Gist.create([{ :title => "gistacular", :details => "whoa, check out this gist", :user_id => 1 },
             { :title => "better_gist", :details => "ummmmmmm", :user_id => 1 },
             { :title => "sweet_gist", :details => "stefano LOVES this gist", :user_id => 1 }, ])

Favourite.create([
  {user_id: 1, gist_id: 3}
])