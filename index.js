import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
// import fs from 'fs';
// import path from 'path';

const app = express();

import './config/db';

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
// const typeDefs = [
//   fs.readFileSync(path.join(__dirname, 'graphql/schema.graphql'), 'utf8')
// ];

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors());
app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(1337, () =>
  console.log('API endpoint available at localhost:1337/graphql')
)
