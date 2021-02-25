exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("items")
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("items").insert([{
                    id: 1,
                    name: "Eggs",
                    description: "Best Eggs in the markets",
                    price: 25.5,
                    market_id: 1,
                    category_id: 1,
                    user_id: 1,
                },
                {
                    id: 2,
                    name: "Beef",
                    description: "Best Beef in the markets",
                    price: 50,
                    market_id: 5,
                    category_id: 1,
                    user_id: 2,
                },
                {
                    id: 3,
                    name: "Soya Beans",
                    description: "Best beans in the markets",
                    price: 25.5,
                    market_id: 2,
                    category_id: 2,
                    user_id: 2,
                },
                {
                    id: 4,
                    name: "Imported Rice",
                    description: "Best rice in the markets",
                    price: 4.35,
                    market_id: 8,
                    category_id: 5,
                    user_id: 3,
                },
                {
                    id: 5,
                    name: "Oranges",
                    description: "Best oranges in the markets",
                    price: 3.1,
                    market_id: 4,
                    category_id: 6,
                    user_id: 3,
                },
            ]);
        });
};