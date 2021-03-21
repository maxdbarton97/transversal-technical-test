import axios from "axios";

const graphqlUrl = "http://localhost:8080/graphql";

const graphqlRequest = async (query, variables) => {
    try {
        const { data: json } = await axios.post(
            graphqlUrl,
            { query, variables },
        );

        if (json.errors && json.errors[0]) {
            throw json.errors[0];
        }

        return json.data;
    } catch ({ message }) {
        throw new Error(message);
    }
};

const GraphQLClient = {
    query(query, variables) {
        return graphqlRequest(query, variables);
    },
    mutation(query, variables) {
        return graphqlRequest(query, variables);
    },
};

export default GraphQLClient;
