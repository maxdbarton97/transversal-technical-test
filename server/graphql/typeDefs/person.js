const personTypeDefs = `
    type Person {
        name: String!
        birth_year: String!
        eye_color: String!
        gender: String!
        hair_color: String!
        height: String!
        mass: String!
        skin_color: String!
    }

    type Query {
        people(input: Search): [Person]
    }
`;

module.exports = personTypeDefs;
