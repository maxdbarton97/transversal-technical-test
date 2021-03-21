const planetTypeDefs = `
    type Planet {
        name: String!
        diameter: String!
        rotation_period: String!
        orbital_period: String!
        gravity: String!
        population: String!
        climate: String!
        terrain: String!
        surface_water: String!
        residents: [String]!
        films: [String]!
        url: String!
        created: String!
        edited: String! 
    }

    type Query {
        planets(input: Search): [Planet]
    }
`;

module.exports = planetTypeDefs;
