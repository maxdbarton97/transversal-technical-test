### Setup
`npm i`
That's it!

### `npm run client`
Runs the react client (port 3000).

### `npm run server`
Runs the nodejs server (port 8080).
Go to http://localhost:8080/graphiql to open the playground.

### `npm run all`
Runs the client and server concurrently.

## About
This project uses Node to serve agraphql endpoint setup using Apollo Server, which is consumed by a React client.

As in my initial technical test, I am using [SWAPI (Star Wars API)](https://swapi.dev) to display star wars related data in a semantic table, that is fetched using graphQL.

This works by creating type definitions for planets, starships and people, along with asynchronous resolvers which will fetch the data from their respective swapi.dev endpoints. These resolvers also accept and apply a search value, which will filter out the results by name.

On the client, I am using ant design to quickly put together navigation, a table and a search bar. I have taken care of making sure the table is responsive.!

On a more technical note, I have done my best to include a range of hooks, such as: 
- useState
- useEffect
- useLayoutEffect
- useContext
- useContext

## Decisions
I had trouble deciding the folder structure for the graphql typeDefs and resolvers. In the end, I decided to create a file for each of the models, which I understand will not scale well, but will suffice for a small demo project like this.

I also understand that using a top-level app context does not scale well, and is somewhat unnecessary for a small project, but I thought it was important to include some state management that uses hooks to demonstrate a good understanding.
