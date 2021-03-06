const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express(); //--> App instance

process.env.JWT_SECRET =
  'rvoiwovijbiabiui@^%#6Tk7j8bkjb-wkj0b4679kjKJBER#^R#%7n';
const PORT = process.env.PORT || 4000; //-->  server port
app.use(cors());
app.use(bodyParser.json()); //-->  parse incoming body to json format
app.use('/', routes);

//-->  connect to database
mongoose.connect(
  'mongodb+srv://oddfeeling:himmar38@naija-ajo.deacr.mongodb.net/test'
);

app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});

module.exports = app;
