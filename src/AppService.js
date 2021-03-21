import { graphQLClient } from "./helpers";

// using the graphQL VS Code extention nicely formats quieries using #graphql.
const GET_PLANETS = `#graphql
    query($name: String!) {
        planets(input: { name: $name }) {
            name
            diameter
            rotation_period
            orbital_period
            gravity
            population
            climate
            terrain
            surface_water
        }
    }
`;

const GET_STARSHIPS = `#graphql
    query($name: String!) {
        starships(input: { name: $name }) {
            name
            model
            starship_class
            manufacturer
            cost_in_credits
            length
            crew
            passengers
            max_atmosphering_speed
            hyperdrive_rating
            MGLT
            cargo_capacity
            consumables
        }
    }
`;

const GET_PEOPLE = `#graphql
    query($name: String!) {
        people(input: { name: $name }) {
            name
            birth_year
            eye_color
            gender
            hair_color
            height
            mass
            skin_color
        }
    }
`;

const AppService = {
    async getPlanets(filter) {
        try {
            const { planets } = await graphQLClient.query(GET_PLANETS, filter);
            return planets;
        } catch ({ message }) {
            throw new Error(message);
        }
    },

    async getStarships(filter) {
        try {
            const { starships } = await graphQLClient.query(GET_STARSHIPS, filter);
            return starships;
        } catch ({ message }) {
            throw new Error(message);
        }
    },

    async getPeople(filter) {
        try {
            const { people } = await graphQLClient.query(GET_PEOPLE, filter);
            return people;
        } catch ({ message }) {
            throw new Error(message);
        }
    },
};

export default AppService;
