const express = require('express');
const app = express();
const general = require('./general.js');

app.use(express.json());
app.use('/', general);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
