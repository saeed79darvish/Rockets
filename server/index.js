const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());


app.use(express.static(__dirname + "/../client/dist"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
