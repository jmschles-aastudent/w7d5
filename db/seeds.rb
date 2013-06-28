# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({ :username => "Stefano", :password => "password" })

Gist.create([{ :title => "gistacular", :user_id => 1 },
             { :title => "better_gist", :user_id => 1 },
             { :title => "sweet_gist", :user_id => 1 }, ])