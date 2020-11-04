const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gamesRouter = require('./helpers/games_router.js');
const MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('chess');
    const gamesCollection = db.collection('games');
    app.use('/api/games', gamesRouter(gamesCollection));
})
  .catch(console.error);

app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});