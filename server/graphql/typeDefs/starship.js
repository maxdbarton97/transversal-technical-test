const starshipTypeDefs = `
    type Starship {
        name: String!
        model: String!
        starship_class: String!
        manufacturer: String!
        cost_in_credits: String!
        length: String!
        crew: String!
        passengers: String!
        max_atmosphering_speed: String!
        hyperdrive_rating: String!
        MGLT: String!
        cargo_capacity: String!
        consumables: String!
        url: String!
        created: String!
        edited : String!
    }

    type Query {
        starships(input: Search): [Starship]
    }
`;

module.exports = starshipTypeDefs;
