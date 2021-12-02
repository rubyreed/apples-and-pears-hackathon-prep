# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


apple1 = Apple.create(variety: "Granny Smith", description: "green, sour, and crisp")
apple2 = Apple.create(variety: "Honeycrisp", description: "golden, sweet and crisp")

apple1.worms.create(species: "Apple Maggot", description: "likes fallen apples, does not have legs")
apple1.worms.create(species: "Codling Moth", description: "very destructive, native of Eurasia")
apple2.worms.create(species: "Plum Curculio", description: "looks like a beetle, consumes seeds")
apple2.worms.create(species: "Fruit Fly", description: "small, black")

Pear.create(variety: "Asian", description: "large, juicy, best eaten raw")
Pear.create(variety: "Bartlett", description: "yellow when ripe, buttery texture")
