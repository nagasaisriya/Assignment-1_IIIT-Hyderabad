const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./serverschema/schema')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://dbUser1:dbPassword1@cluster0.dvduh.mongodb.net/dbUser1?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log("Connected to database");
})
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000, () => {
  console.log(`now listening for requests at http://localhost:4000`);
})
/*const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./serverschema/schema')
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://dbUser1:dbPassword1@cluster0.dvduh.mongodb.net/dbUser1?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log("Connected to database");
})
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000, () => {
  console.log(`now listening for requests at http://localhost:4000`);
})
*/
