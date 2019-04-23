const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js')
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());



app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
app.use(express.static('../client/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server starter on port ${PORT}`));