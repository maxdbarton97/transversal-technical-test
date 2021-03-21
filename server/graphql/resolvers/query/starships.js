const { default: axios } = require("axios");

module.exports = async (_, { input = {} }) => {
    const { name = "" } = input;
    const { data: { results } } = await axios.get(`https://swapi.dev/api/starships?search=${name}`);
    return results;
};
